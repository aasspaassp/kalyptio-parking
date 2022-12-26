import { NewParking, Price, ParkingType } from "./src/types";
type Fields = { address: unknown, price: unknown, type: unknown, images: unknown, score: unknown, description: unknown}

//parse each field and make sure that the return value is exactly of type 

const parseAddress = (address: unknown): string => {
  if (!address || !isString(address)) {
    throw new Error('Incorrect or missing address');
  }

  return address;
};

const parseType = (type:unknown): ParkingType => {
  if(!type || !isParkingType(type)){
    throw new Error('Incorrect or missing value');
  }
  return type;
};

const parseImage = (image:unknown): string => {
  if (!image || !isString(image)) {
    throw new Error('Incorrect or missing image');
  }

  return image;
};

const parsePrice = (price: unknown): Price => {
  if (!price || !isPrice(price)) {
      throw new Error('Incorrect or missing price option: ' + price);
  }
  return price;
};

const parseDescription = (description: unknown): string => {
  if (!description || !isString(description)) {
    throw new Error('Incorrect or missing description');
  }

  return description;

};

const parseScore = (score: unknown): number =>{
  if(!score || !isNumber(score)){
    throw new Error('Incorrect or missing score');
  }
  return score;
}
//type guards

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};


const isNumber = (num: unknown): num is number => {
  return typeof num === 'number'
} 

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isPrice = (param: any): param is Price => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Price).includes(param);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isParkingType = (param: any): param is ParkingType => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(ParkingType).includes(param);
};



const resToParking = ({address, price, type, images, score, description}: Fields): NewParking => {
  const newParkingObject: NewParking = {
    address: parseAddress(address),
    price: parsePrice(price),
    type: parseType(type),
    images: parseImage(images),
    score: parseScore(score),
    description: parseDescription(description)
  };
  return newParkingObject;
};

export default resToParking;
