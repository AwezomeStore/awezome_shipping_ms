/*==============================================================*/
/* Table: cash_order                                            */
/*==============================================================*/
create table cash_order
(
   order_id             varchar(50) not null,
   user_id              int not null,
   shopping_car         int not null,
   order_date           timestamp not null,
   shipping_type_id     int not null,
   payment_method_id    int not null,
   order_address        varchar(150) not null,
   zip_code             int not null,
   order_status         boolean not null,
   primary key (order_id)
);

/*==============================================================*/
/* Table: city                                                  */
/*==============================================================*/
create table city
(
   city_id              int not null,
   country_id           int not null,
   city_name            varchar(150) not null,
   city_status          boolean not null,
   primary key (city_id)
);

/*==============================================================*/
/* Table: city_shipping_type                                    */
/*==============================================================*/
create table city_shipping_type
(
   shipping_type_id     int not null,
   city_id              int not null,
   primary key (shipping_type_id, city_id)
);

/*==============================================================*/
/* Table: country                                               */
/*==============================================================*/
create table country
(
   country_id           int not null,
   country_name         varchar(150) not null,
   region               varchar(150) not null,
   country_status       boolean not null,
   primary key (country_id)
);

/*==============================================================*/
/* Table: location                                              */
/*==============================================================*/
create table location
(
   location_id          int not null,
   city_id              int not null,
   location_name        varchar(150) not null,
   location_status      boolean not null,
   primary key (location_id)
);

/*==============================================================*/
/* Table: shipping                                              */
/*==============================================================*/
create table shipping
(
   shipping_id          varchar(50) not null,
   order_id             varchar(50) not null,
   product_id           int not null,
   units                int not null,
   state                varchar(50) not null,
   updated              timestamp not null,
   location_id          int not null,
   shipping_status      boolean not null,
   primary key (shipping_id)
);

/*==============================================================*/
/* Table: shipping_type                                         */
/*==============================================================*/
create table shipping_type
(
   shipping_type_id     int not null,
   city_id              int not null,
   shipping_type_name   varchar(150) not null,
   delivery_time        int not null,
   cost                 double not null,
   status_shipping_type boolean not null,
   primary key (shipping_type_id)
);

alter table cash_order add constraint fk_reference_5 foreign key (shipping_type_id)
      references shipping_type (shipping_type_id) on delete restrict on update restrict;

alter table city add constraint fk_reference_1 foreign key (country_id)
      references country (country_id) on delete restrict on update restrict;

alter table city_shipping_type add constraint fk_reference_2 foreign key (city_id)
      references city (city_id) on delete restrict on update restrict;

alter table city_shipping_type add constraint fk_reference_3 foreign key (shipping_type_id)
      references shipping_type (shipping_type_id) on delete restrict on update restrict;

alter table location add constraint fk_reference_4 foreign key (city_id)
      references city (city_id) on delete restrict on update restrict;

alter table shipping add constraint fk_reference_6 foreign key (order_id)
      references cash_order (order_id) on delete restrict on update restrict;

alter table shipping add constraint fk_reference_7 foreign key (location_id)
      references location (location_id) on delete restrict on update restrict;

