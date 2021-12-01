/*==============================================================*/
/* DBMS name:      Sybase SQL Anywhere 12                       */
/* Created on:     30/11/2021 5:12:34 a. m.                     */
/*==============================================================*/


if exists(select 1 from sys.sysforeignkey where role='FK_CASH_ORD_REFERENCE_SHIPPING') then
    alter table CASH_ORDER
       delete foreign key FK_CASH_ORD_REFERENCE_SHIPPING
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_CITY_REFERENCE_CONTRY') then
    alter table CITY
       delete foreign key FK_CITY_REFERENCE_CONTRY
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_CITY_SHI_REFERENCE_CITY') then
    alter table CITY_SHIPPING_ID
       delete foreign key FK_CITY_SHI_REFERENCE_CITY
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_CITY_SHI_REFERENCE_SHIPPING') then
    alter table CITY_SHIPPING_ID
       delete foreign key FK_CITY_SHI_REFERENCE_SHIPPING
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_LOCATION_REFERENCE_CITY') then
    alter table LOCATION
       delete foreign key FK_LOCATION_REFERENCE_CITY
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_SHIPPING_REFERENCE_CASH_ORD') then
    alter table SHIPPING
       delete foreign key FK_SHIPPING_REFERENCE_CASH_ORD
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_SHIPPING_REFERENCE_LOCATION') then
    alter table SHIPPING
       delete foreign key FK_SHIPPING_REFERENCE_LOCATION
end if;

drop table if exists CASH_ORDER;

drop table if exists CITY;

drop table if exists CITY_SHIPPING_ID;

drop table if exists CONTRY;

drop table if exists LOCATION;

drop table if exists SHIPPING;

drop table if exists SHIPPING_TYPE;

/*==============================================================*/
/* Table: CASH_ORDER                                            */
/*==============================================================*/
create table CASH_ORDER 
(
   ORDER_ID             varchar(50)                    not null,
   USER_ID              int                            not null,
   SHOPPING_CAR         int                            not null,
   PRODUCT_ID           int                            not null,
   ORDER_DATE           datetime                       not null,
   SHIPPING_TYPE_ID     int                            not null,
   PAYMENT_METHOD_ID    int                            not null,
   ORDER_ADDRESS        varchar(150)                   not null,
   ZIP_CODE             int                            not null,
   ORDER_STATUS         binary                         not null,
   constraint PK_CASH_ORDER primary key clustered (ORDER_ID)
);

/*==============================================================*/
/* Table: CITY                                                  */
/*==============================================================*/
create table CITY 
(
   CITY_ID              int                            not null,
   CONTRY_ID            int                            not null,
   CITY_NAME            varchar(150)                   not null,
   CITY_STATUS          binary                         not null,
   constraint PK_CITY primary key clustered (CITY_ID)
);

/*==============================================================*/
/* Table: CITY_SHIPPING_ID                                      */
/*==============================================================*/
create table CITY_SHIPPING_ID 
(
   SHIPPING_TYPE_ID     int                            not null,
   CITY_ID              int                            not null,
   constraint PK_CITY_SHIPPING_ID primary key clustered (SHIPPING_TYPE_ID, CITY_ID)
);

/*==============================================================*/
/* Table: CONTRY                                                */
/*==============================================================*/
create table CONTRY 
(
   CONTRY_ID            int                            not null,
   CONTRY_NAME          varchar(150)                   not null,
   REGION               varbinary(150)                 not null,
   CONTRY_STATUS        binary                         not null,
   constraint PK_CONTRY primary key clustered (CONTRY_ID)
);

/*==============================================================*/
/* Table: LOCATION                                              */
/*==============================================================*/
create table LOCATION 
(
   LOCATION_ID          int                            not null,
   CITY_ID              int                            not null,
   LOCATION_NAME        varchar(150)                   not null,
   LOCATION_STATUS      binary                         not null,
   constraint PK_LOCATION primary key clustered (LOCATION_ID)
);

/*==============================================================*/
/* Table: SHIPPING                                              */
/*==============================================================*/
create table SHIPPING 
(
   SHIPPING_ID          varchar(50)                    not null,
   ORDER_ID             varchar(50)                    not null,
   PRODUCT_ID           int                            not null,
   STATE                varchar(50)                    not null,
   UPDATED              datetime                       not null,
   LOCATION_ID          int                            not null,
   SHIPPING_STATUS      binary                         not null,
   constraint PK_SHIPPING primary key clustered (SHIPPING_ID)
);

/*==============================================================*/
/* Table: SHIPPING_TYPE                                         */
/*==============================================================*/
create table SHIPPING_TYPE 
(
   SHIPPING_TYPE_ID     int                            not null,
   CITY_ID              int                            not null,
   SHIPPING_TYPE_NAME   varchar(150)                   not null,
   DELIVERY_TIME        int                            not null,
   COST                 double                         not null,
   STATUS_SHIPPING_TYPE binary                         not null,
   constraint PK_SHIPPING_TYPE primary key clustered (SHIPPING_TYPE_ID)
);

alter table CASH_ORDER
   add constraint FK_CASH_ORD_REFERENCE_SHIPPING foreign key (SHIPPING_TYPE_ID)
      references SHIPPING_TYPE (SHIPPING_TYPE_ID)
      on update restrict
      on delete restrict;

alter table CITY
   add constraint FK_CITY_REFERENCE_CONTRY foreign key (CONTRY_ID)
      references CONTRY (CONTRY_ID)
      on update restrict
      on delete restrict;

alter table CITY_SHIPPING_ID
   add constraint FK_CITY_SHI_REFERENCE_CITY foreign key (CITY_ID)
      references CITY (CITY_ID)
      on update restrict
      on delete restrict;

alter table CITY_SHIPPING_ID
   add constraint FK_CITY_SHI_REFERENCE_SHIPPING foreign key (SHIPPING_TYPE_ID)
      references SHIPPING_TYPE (SHIPPING_TYPE_ID)
      on update restrict
      on delete restrict;

alter table LOCATION
   add constraint FK_LOCATION_REFERENCE_CITY foreign key (CITY_ID)
      references CITY (CITY_ID)
      on update restrict
      on delete restrict;

alter table SHIPPING
   add constraint FK_SHIPPING_REFERENCE_CASH_ORD foreign key (ORDER_ID)
      references CASH_ORDER (ORDER_ID)
      on update restrict
      on delete restrict;

alter table SHIPPING
   add constraint FK_SHIPPING_REFERENCE_LOCATION foreign key (LOCATION_ID)
      references LOCATION (LOCATION_ID)
      on update restrict
      on delete restrict;

