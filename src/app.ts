import express, { Application } from 'express'
import morgan from 'morgan'

// Routes
import IndexRoutes from './routes/index.routes'
import CountryRoutes from './routes/country.routes'
import CityRoutes from './routes/city.routes'
import ShippingTypeRoutes from './routes/shipping_type.routes'
import CashOrderRoutes from './routes/cash_order.routes'
import LocationRoutes from './routes/location.routes'
import ShippingRoutes  from './routes/shipping.routes'


//import AuthorRoutes from  './routes/author.routes'

export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 5000);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    private routes() {
        this.app.use(IndexRoutes);
        this.app.use('/countries', CountryRoutes);
        this.app.use('/cities', CityRoutes);
        this.app.use('/shipping_types', ShippingTypeRoutes);
        this.app.use('/cash_orders', CashOrderRoutes);
        this.app.use('/locations', LocationRoutes);
        this.app.use('/shippings', ShippingRoutes);

        //this.app.use('/authors', AuthorRoutes);
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}