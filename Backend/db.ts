import { Parking } from "./src/types";
import resToParking from "./src/utils";

const data =

[
  {
    "id": 1,
    "address": "2862 Pine St, San Francisco, CA 94115, EE. UU.",
    "price": "A",
    "type": "public",
    "images": "https://goo.gl/maps/tjsm8vaf9JCkmny89",
    "score": 5,
    "description": "Good location surrounded by cameras"
  },
  {
    "id": 2,
    "address": "2401 Post St, San Francisco, CA 94115, EE. UU.",
    "price": "B",
    "type": "private",
    "images": "https://goo.gl/maps/tjsm8vaf9JCkmny89",
    "score": 4,
    "description": "Normal parking lot inside a residential"
  },
  {
    "id": 3,
    "address": "2640 Geary Blvd, San Francisco, CA 94118, EE. UU.",
    "price": "C",
    "type": "private",
    "images": "https://goo.gl/maps/nNNSYBjQjFFeVFP56",
    "score": 5,
    "description": "24/7 parking lot with vigilance and reception"
  }
  

]

const parkingData : Parking[] = data.map(obj => {
  const object = resToParking(obj) as Parking;
  object.id = obj.id;
  return object;
});

export default parkingData;