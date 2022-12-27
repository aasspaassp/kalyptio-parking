//aquí vamos a hacer todas las peticiones al servidor

import express from "express";
import parkingService from "../services/parkingService"
import resToParking from "../utils";
const router = express.Router();



 router.get('/', (_req, res) => {
  res.send(parkingService.getParkings());
 });

/*  router.post('/', (req, res) => {
  const { address, price, local, images, score, description  } = req.body;
  const newParking = parkingService.addParking({ address, 
    price, 
    local, 
    images, 
    score, 
    description});
  res.json(newParking);
}); */

router.post('/', (req, res) => {
  try{
    const newParking = resToParking(req.body);
    const addedParking = parkingService.addParking(newParking);
    res.json(addedParking)
  } catch (error:unknown){
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
})
export default router;