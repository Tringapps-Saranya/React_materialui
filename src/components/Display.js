import { Grid, Card, CardContent, CardHeader, CardMedia, IconButton, Typography, Menu, MenuItem, Dialog, DialogActions, Button, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useState } from 'react'
import '../assets/productform.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import profile_picture from '../assets/profile_picture.png'
import Grocery_items from '../assets/Grocery_items.jfif'

export const Display = ({ productdetails }) => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const editCard = () => {
       
    }
    const deleteCard = () => {
       handleClickOpen()
    }
    const [show, setShow] = React.useState(false);

    const handleClickOpen = () => {
        setShow(true);
    };

    const closedialog = () => {
        setShow(false);
    };

    console.log(productdetails);
    return (<div>

        <Grid container spacing={2}>{
            productdetails.map((data, index) => {
                return (
                    <Grid items xs={2} className='margin-outside' key={data.name}>
                        <Card variant='outlined' className='m-set'>
                            <CardHeader title={data.Name} action={
                                <IconButton>
                                    < MoreVertIcon id="dot-icon" onClick={(event)=>handleClick(event)}
                                        aria-controls={open ? 'icon-menu' : undefined}
                                        aria-haspopup='true'
                                        aria-expanded={open ? 'true' : undefined} />
                                </IconButton>
                            } />
                            <Menu id="icon-menu" anchorEl={anchorEl}
                                open={open}
                                MenuListProps={
                                    {
                                        'aria-labelledby': 'dot-icon',
                                    }
                                }
                                onClose={handleClose}>
                                <MenuItem onClick={editCard}>Edit</MenuItem>
                                <MenuItem onClick={deleteCard}>Delete</MenuItem>
                            </Menu>
                            <Dialog
                                open={show}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Are u sure to delete this product?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={closedialog}>Cancel</Button>
                                    <Button onClick={handleClickOpen} autoFocus>
                                        Yes
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            <CardMedia component='img' height='220' image={Grocery_items} alt={profile_picture} />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component='div'>ProductDetails</Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    <div key={index}>
                                        <div>Product_Name  : {data.Name}</div>
                                        <div>Product_Price : {data.Price}</div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })
        }
        </Grid>
    </div>
    )
}




