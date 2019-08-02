import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import './productCard.scss';

const GET_BOOKS = gql`
    query GetBooks {
        books @client {
            id
            name
            chapters
            price
        }
    }
`;

const ProductCard = ({ title, chapters, price }) => {
    return (
        <div className="productCard">
            <h3>{title}</h3>
            <p>{chapters}</p>

            <div className="details">
                <span className="price">{price}</span>
                <span>
                    <Link to="#">view details</Link>
                </span>
            </div>
        </div>
    );
};

const ProductCardSection = () => {
    return (
        <Query query={GET_BOOKS}>
            {({ data }) => {
                return (
                    <Fragment>
                        <section className="productCard-section">
                            <h1>More Books</h1>
                            <div className="books">
                                {data.books.map(book => {
                                    return (
                                        <ProductCard
                                            title={book.name}
                                            price={book.price}
                                            chapters={book.chapters}
                                        />
                                    );
                                })}
                            </div>
                            <button>view all books</button>
                        </section>
                    </Fragment>
                );
            }}
        </Query>
    );
};
export default ProductCardSection;
