import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import shoppingBasket from '../../../assets/svg/shopping-basket-black.svg';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import './navbar.scss';

const GET_BASKET_QUAN = gql`
    {
        basketQuantity @client
    }
`;

const Navbar = () => {
    return (
        <Query query={GET_BASKET_QUAN}>
            {({ data }) => {
                return (
                    <Fragment>
                        <header>
                            <img src={Logo} alt="site-logo" className="logo" />
                            <nav className="nav">
                                <ul className="nav__links">
                                    <li>
                                        <Link to="#">Books</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Login</Link>
                                    </li>
                                    <li>
                                        <button>
                                            <span>
                                                <img
                                                    src={shoppingBasket}
                                                    alt="basket-logo"
                                                />
                                            </span>
                                            Basket
                                        </button>
                                    </li>
                                    <li>
                                        <button className="basket-quantity">
                                            {data.basketQuantity}
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </header>
                    </Fragment>
                );
            }}
        </Query>
    );
};
export default Navbar;
