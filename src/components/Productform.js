import { Button, Container, TextField, Box} from '@mui/material'
import React, { useState } from 'react';
import { Display } from './Display';

const Productform = () => {

    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [productdetails,setProductDetails] = useState([]);

    function changeName(event){
        setName(event.target.value)
    }

    function changePrice(event){
        setPrice(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(name,price);
        setProductDetails([...productdetails,{Name:name,Price:price}]);
      
     
    }
    console.log(productdetails);

  return (
    <div>
        <Box  className="formbox">
        <Container>
            <form onSubmit={handleSubmit}>
                <TextField 
                id="name-input"
                label ="Name"
                variant='outlined'
                required
                value={name}
                onChange={changeName} />

                <TextField 
                id="price-input"
                label="Price"
                variant='outlined'
                required
                value={price}
                onChange={changePrice} />

                <Button  type="submit" color="secondary" variant='contained'>submit</Button>
            </form>
            
        </Container>
        </Box>
        <div>
            <Display productdetails = {productdetails}/>
            </div>
    </div>
  )
}

export default Productform