export default `
  type TopItem {
    id: ID,
    name: String,
    description: String,
    imageLink: String
  }

  type Query {
    basketQuantity: Int
    topItems: [TopItem]
  }

  type Mutation {
    handleQuantityIncre: Int,
    handleQuantityDecre: Int
  }
`;
