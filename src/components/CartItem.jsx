/* eslint-disable no-unused-vars */
import "./style/CartItem";
import React from 'react'
import { Link } from 'react-router-dom';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    return (
        <div className="product__item">
            <Link className="product__inner" to={`/product/${item.product}`} >
                <img className="product__img_size-s"
                    src={item.imageUrl}
                    alt={item.name}
                />
            </Link>
            <div className="product__inner">
                <div className="product__height">
                    <p className="product__article">артикул: <strong>{item.article}</strong></p>
                    <p className="title product__name">{item.name}</p>
                </div>
            </div>
            <div className="product__inner product__border">
                <div className="product__height">
                    <p className="qty__text">Количество:</p>
                    <select
                        className="qty__select"
                        value={item.qty}
                        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
                    >
                        {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="product__inner">
                <div className="product__height">
                    <p className="qty__text">Цена:</p>
                    <p className="product__price">{item.price}₽
                        <strike className="old-price old-price__s">{item.oldPrice}₽</strike>
                    </p>
                </div>
            </div>
            <div className="product__remove" onClick={() => removeHandler(item.product)}>
                <button>&times;</button>
            </div>
        </div>
    )
};

export default CartItem;