# kalyptio-parking

This progect consists on two folders: Backend and Frontend

## Backend

Built with Node, Typescript and React it accepts POST and GET requests.

An example of json data for a POST request:

```
{
    "address": "2641 Geary Blvd, San Francisco, CA 94118, EE. UU.",
    "price": "C",
    "type": "private",
    "images": "https://goo.gl/maps/nNNSYBjQjFFeVFP56",
    "score": 3,
    "description": "24/7 parking lot with vigilance and reception"
}
```

To start the backend server locate on backend folder and run 

```
npm run dev
```

## Frontend

Built with React and Typescript

To run the front end use npm start as usual.

Note: Frontend is not fetching data yet.