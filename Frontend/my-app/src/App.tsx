import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import List from './components/list';
import Form from './components/form';
import axios from 'axios';
import { Parking } from './types';

/* enum Price {
  OptionA = "A",
  OptionB = "B",
  OptionC = "C"

}

enum ParkingType {
  Public = "public",
  Private = "private"
} */


interface AppState {
  parkings: Parking[];
}

const initialState = [
  {
    id: 1,
    address: "2862 Pine St, San Francisco, CA 94115, EE. UU.",
    price: "A",
    type: "public",
    images: "https://picsum.photos/id/43/200/",
    score: 5,
    description: "Good location surrounded by cameras"
  },
  {
    id: 2,
    address: "2401 Post St, San Francisco, CA 94115, EE. UU.",
    price: "B",
    type: "private",
    images: "https://picsum.photos/id/57/200/",
    score: 4,
    description: "Normal parking lot inside a residential"
  },
  {
    id: 3,
    address: "2640 Geary Blvd, San Francisco, CA 94118, EE. UU.",
    price: "C",
    type: "private",
    images: "https://picsum.photos/id/85/200/",
    score: 5,
    description: "24/7 parking lot with vigilance and reception"
  }
]

function App() {

  const [parkings, setParkings] = useState<AppState['parkings']>([])

  useEffect(() =>{
    setParkings(initialState)
  }, [])

  return (
    <>
    <List parkings={parkings} />
    <Form />
    </>
   
    
  );
}

export default App;
