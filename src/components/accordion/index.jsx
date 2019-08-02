import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import './accordion.scss';

const GET_TOP_ITEMS = gql`
    query TopItems {
        topItems @client {
            id
            name
            description
            imageLink
        }
    }
`;

const AccordionSection = () => {
    const [itemImage, setImage] = useState('https://via.placeholder.com/570x370');

    return (
        <Query query={GET_TOP_ITEMS}>
            {({ data: { topItems } }) => {
                return (
                    <section className="accordion">
                        <div className="tabs">
                            {topItems.map(item => {
                                return (
                                    <div className="tab" key={item.id}>
                                        <input
                                            type="checkbox"
                                            id={`chck${item.id}`}
                                            onClick={() => setImage(item.imageLink)}
                                        />
                                        <label
                                            className="tab-label"
                                            htmlFor={`chck${item.id}`}>
                                            {item.name}
                                        </label>
                                        <div className="tab-content">
                                            {item.description}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="accor-image">
                            <img src={itemImage} alt="accr-img" />
                        </div>
                    </section>
                );
            }}
        </Query>
    );
};
export default AccordionSection;
