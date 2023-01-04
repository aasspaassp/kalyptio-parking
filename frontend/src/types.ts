export type Price = "A" | "B" | "C"

export type ParkingType = "public" | "private"

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