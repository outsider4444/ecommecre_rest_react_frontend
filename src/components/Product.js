import React from 'react';
import {Card} from "react-bootstrap";
import style from "./Product.module.css";
import Rating from "./Rating";

const Product = ({product}) => {
    return (
        <Card className={"my-3 p-3 rounded " + style.card}>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </a>
            <Card.Body as={"div"}>
                <a href={`/product/${product._id}`} className={style.productName}>
                    <Card.Title className={style.productName}>{product.name}</Card.Title>
                </a>
                <Card.Text as={"div"}>
                    <div className={"my-3"}>
                        <Rating value={product.rating} text={`${product.numReviews} оценок`} color={"#f8e825"}/>
                    </div>
                </Card.Text>

                <Card.Text as={"h3"}>
                    {product.price} <br/>
                    руб.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;