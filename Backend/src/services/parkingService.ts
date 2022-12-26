// Data manipulation / business logic

/*
 Create new car parking.
List parkings (You can filter parkings by using query params).
Delete parkings.

Query parms:
Max min price
Type. (public/private)
Amenities.
 */

import parkingData from '../../db';
import { Parking, NewParking } from '../types';

const parkings: Array<Parking> = parkingData as Array<Parking>;

const getParkings = (): Array<Parking> => {
  return parkings;
};

const addParking = (entry: NewParking): Parking => {
  console.log(entry)
  const newParking = {
   
    id: Math.floor(Math.random() * 13586.557),
   ...entry
  };
  parkings.push(newParking);
  return newParking;
};

export default {
  getParkings, 
  addParking
};