export enum Price {
  OptionA = "A",
  OptionB = "B",
  OptionC = "C"

}

export enum ParkingType {
  Public = "public",
  Private = "private"
}

export interface Parking {
  id: number,
  address: string,
  price: Price,
  type: ParkingType,
  images: string,
  score: number,
  description: string
}

export type NewParking = Omit<Parking, "id">;

/**
 {
    "id": 3,
    "address": "2640 Geary Blvd, San Francisco, CA 94118, EE. UU.",
    "price": "C",
    "private": true,
    "images": "https://goo.gl/maps/nNNSYBjQjFFeVFP56",
    "score": 5,
    "description": "24/7 parking lot with vigilance and reception"
  }
 */