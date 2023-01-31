import React from 'react';
import {Card} from "react-bootstrap";
import style from "./Product.module.css";

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
                        <i className={"fas fa-star"}></i> {product.rating}
                        <span className={style.textRight}>{product.numReviews} отзывов</span>
                    </div>
                </Card.Text>

                <Card.Text as={"h3"}>
                    {product.price} рублей
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;