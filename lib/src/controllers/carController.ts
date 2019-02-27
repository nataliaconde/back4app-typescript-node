import { Request, Response } from 'express';
import * as Parse from 'parse/node';


export class CarController{
    public getCar (req: Request, res: Response) {   
        const Cars = Parse.Object.extend("Cars");
        const query = new Parse.Query(Cars);
        query.equalTo("color", req.params.query);
        query.find().then(result => {
            res.send(result);
        }).catch(error => {
            res.send(error);
        });       
    }
    public allCars (req: Request, res: Response) {          
        const Cars = Parse.Object.extend("Cars");
        const query = new Parse.Query(Cars);
        query.find().then(result => {
            res.send(result);
        }).catch(error => {
            res.send(error);
        });        
    }
}
export default CarController