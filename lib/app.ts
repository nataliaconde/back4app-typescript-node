import * as express from "express";
import * as bodyParser from "body-parser";
import * as Parse from "parse/node";
import * as dotenv from "dotenv";

import { CarsRoutes } from "./src/routes/carsRouter";

dotenv.config();

class App {

    public app: express.Application;
    public routePrvCar: CarsRoutes = new CarsRoutes();

    constructor() {
        this.app = express();
        this.config(); 
        this.routes();
        this.ParseServerConfiguration();      
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(function (req, res, next) {

            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                
            // Pass to next layer of middleware
            next();
        });
    }

    private ParseServerConfiguration():void{
        Parse.initialize(process.env.BACK4APP_APPLICATION_ID, process.env.BACK4APP_JAVASCRIPT_KEY)
        Parse.serverURL = process.env.BACK4APP_SERVER_URL;
    }
    private routes():void{
        this.routePrvCar.routes(this.app);
    }

}

export default new App().app;