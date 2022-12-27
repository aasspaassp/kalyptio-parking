import { rawListeners } from 'process';
import React from 'react';
import { useState } from 'react';
import { Parking } from '../types';


  
interface FormState {
  inputValues: Parking
}


const Form = () => {

  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    id: 4,
    address: '',
    type: '',
    price: '',
    images: '',
    score: 4,
    description: ''
  })
  const handleSubmit = () => {

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name] : e.target.value
    })
  }
  
  return(
    <form onSubmit={handleSubmit} className="Form">
      Address<input onChange={handleChange} type="text" name="address" id="address" placeholder='address' value={inputValues.address}/>
      Private<input onChange={handleChange} type="checkbox" name="type" placeholder="type" value={inputValues.type}/>
     Price A <input onChange={handleChange} type="radio" name="price" value="priceA" />
      Price B<input onChange={handleChange} type="radio" name="price" value="priceB" />
      Price C<input onChange={handleChange} type="radio" name="price" value="priceC" />
      Image link<input onChange={handleChange} type="text" name="images" placeholder="images" value={inputValues.images} />
      Rate<input onChange={handleChange} type="number" name="rate" placeholder="rate" value={inputValues.score} />
      Description<input onChange={handleChange} type="text" name="description" placeholder="descrption" value={inputValues.description} /> 
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form