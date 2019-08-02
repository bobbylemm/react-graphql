import React from 'react';
import './basketCart.scss';
import checkedLogo from '../../assets/svg/checked.svg';
import shoppingBasket from '../../assets/svg/shopping-basket.svg';
import { Mutation, Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const INCREMENT_QUANTITY = gql`
    mutation {
        handleQuantityIncre @client
    }
`;
const DECREMENT_QUANTITY = gql`
    mutation {
        handleQuantityDecre @client
    }
`;

const GET_BASKET_QUAN = gql`
    {
        basketQuantity @client
    }
`;

const BasketCard = () => {
    return (
        <Query query={GET_BASKET_QUAN}>
            {({ data }) => {
                return (
                    <div className="basket__card">
                        <ul>
                            <li>
                                <img src={checkedLogo} alt="checked" />
                                <span className="title">Publisher: </span>something else
                            </li>
                            <li>
                                <img src={checkedLogo} alt="checked" />
                                <span className="title">Publisher: </span>something else
                            </li>
                            <li>
                                <img src={checkedLogo} alt="checked" />
                                <span className="title">Publisher: </span>something else
                            </li>
                            <li>
                                <img src={checkedLogo} alt="checked" />
                                <span className="title">Publisher: </span>something else
                            </li>
                        </ul>
                        <div className="basket__card-price">
                            <span className="price">120</span>
                            <div className="cart-edit">
                                <Mutation mutation={DECREMENT_QUANTITY}>
                                    {handleQuantityDecre => (
                                        <button onClick={handleQuantityDecre}>-</button>
                                    )}
                                </Mutation>
                                <div className="quantity">{data.basketQuantity}</div>
                                <Mutation mutation={INCREMENT_QUANTITY}>
                                    {handleQuantityIncre => (
                                        <button onClick={handleQuantityIncre}>+</button>
                                    )}
                                </Mutation>
                            </div>
                        </div>
                        <button className="addToCartBtn">
                            <span>
                                <img src={shoppingBasket} alt="shopping basket" />
                            </span>
                            Add to Basket
                        </button>
                    </div>
                );
            }}
        </Query>
    );
};
export default BasketCard;
