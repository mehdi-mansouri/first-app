import style from './Product.module.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
function Product(props) {
    useEffect(
        () => {
            console.log('[Product.js] use Effect' + props.id);
            return (
                () => {
                    console.log('[Product.js] unload useEffect' + props.id);
                }
            )
        }, []
    );
    useEffect(
        () => {
            console.log('[Product.js] 2nd useEffect' + props.id);
            return (
                () => {
                    console.log('[Product.js] 2nd unload useEffect' + props.id);
                }
            )
        }
    );
   
    
    return (
        <div className={style.productContainer}>

            <img src={props.src} alt={props.ptitle} />
            <h3 onClick={props.titleClick}>{props.ptitle}</h3>
            <h5 style={{ backgroundColor: 'green', color: 'blue' }}>{props.prise}</h5>
            <div>{props.children}</div>

            <Button onClick={() => props.deletep(props.id)} variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
        </div>


    );
}
export default Product;