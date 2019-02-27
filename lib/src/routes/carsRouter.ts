import  CarController  from "../controllers/carController";

export class CarsRoutes { 
    
    public carController: CarController = new CarController() 
    
    public routes(app): void {   
        
        app.route('/cars')
            .get(this.carController.allCars)
            
        app
            .route('/cars/:query')
            .get(this.carController.getCar)
    }
}