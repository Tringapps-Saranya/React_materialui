import React from "react";
import { Card, CardContent, Typography,  Button, CardMedia, CardHeader, IconButton, Menu, MenuItem, Grid, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import Grocery_items from '../assets/Grocery_items.jfif'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import '../assets/productform.css'
export default function Display({ productdetails, setProductDetails, setName, setPrice }) {

    const [dialogOpen, setOpen] = useState(false);
    const [storeIndex, setStoreIndex] = useState(null);
    const [editProduct, setEditProduct] = useState(null);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    const handleOk = () => {
        handleDelete();
        setOpen(false);
    }
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClickIcon = (event, index, product) => {
        setAnchorEl(event.currentTarget);
        setStoreIndex(index);
        setEditProduct(product)
    }
    const handleClose = () => {

        setAnchorEl(null);
    }
    const handleEdit = () => {
        setName(editProduct.ProductName)
        setPrice(editProduct.ProductPrice)
        handleDelete();
    }

    const handleDelete = () => {
        productdetails.splice(storeIndex, 1);
        setProductDetails(productdetails)
        handleClose()
    }

    return (
        <>
            <Grid container spacing={3}>
                {
                    productdetails.map((productdetails, index) => {
                        return (
                            <Grid item xs={3}>
                                <div key={index}>
                                    <Menu id='menus' anchorEl={anchorEl} open={open} MenuListProps={{
                                        'aria-labelledby': 'iconId',
                                    }}
                                        onClose={handleClose}>
                                        <MenuItem onClick={handleEdit}>Edit</MenuItem>
                                        <MenuItem onClick={handleClickOpen}>Delete</MenuItem>
                                    </Menu>

                                    <Card sx={{ margin: '30px' }}>
                                        <CardHeader title={productdetails.Name}
                                            action={
                                                <IconButton id='iconId' aria-controls={open ? 'menus' : undefined} aria-haspopup='true' aria-expanded={open ? 'true' : undefined}>
                                                    <MoreVertIcon onClick={(event) => handleClickIcon(event, index, productdetails)} />
                                                </IconButton>
                                            }
                                        />
                                        <CardMedia
                                            component='img'
                                            height='140'
                                            image={Grocery_items}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant='h5' component='div'>ProductDetails</Typography>                               <Typography variant='body2' color='text.secondary'>
                                                <div key={index}>
                                                    <div>Product_Name  : {productdetails.Name}</div>
                                                    <div>Product_Price : {productdetails.Price}</div>
                                                </div>
                                            </Typography>

                                        </CardContent>
                                    </Card>

                                    <Dialog
                                        open={dialogOpen}
                                        onClose={handleClickClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            {"Delete Product"}
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Are you sure to delete this product?
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClickClose}>cancel</Button>
                                            <Button onClick={handleOk} autoFocus>
                                                Ok
                                            </Button>
                                        </DialogActions>
                                    </Dialog>

                                </div>
                            </Grid>
                        )

                    })
                }
            </Grid>

        </>

    )
}



