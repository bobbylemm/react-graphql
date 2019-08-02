import { gql } from 'apollo-boost';

const query = gql`
    query Count {
        basketQuantity @client
    }
`;

export default {
    Mutation: {
        handleQuantityIncre: (parents, args, { cache }) => {
            const { basketQuantity } = cache.readQuery({ query });
            const nextQuantity = basketQuantity + 1;
            const data = {
                basketQuantity: nextQuantity
            };
            cache.writeData({ data });
            return null;
        },
        handleQuantityDecre: (parents, args, { cache }) => {
            const { basketQuantity } = cache.readQuery({ query });
            const nextQuantity = basketQuantity - 1;
            const data = {
                basketQuantity: nextQuantity
            };
            cache.writeData({ data });
            return null;
        }
    }
};
