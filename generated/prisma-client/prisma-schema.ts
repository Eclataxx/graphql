// Code generated by Prisma (prisma@1.34.12). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type Address {
  id: ID!
  city: String!
  country: String!
  state: String!
  Postal_code: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type AddressConnection {
  pageInfo: PageInfo!
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  id: ID
  city: String!
  country: String!
  state: String!
  Postal_code: String!
}

input AddressCreateManyInput {
  create: [AddressCreateInput!]
  connect: [AddressWhereUniqueInput!]
}

type AddressEdge {
  node: Address!
  cursor: String!
}

enum AddressOrderByInput {
  id_ASC
  id_DESC
  city_ASC
  city_DESC
  country_ASC
  country_DESC
  state_ASC
  state_DESC
  Postal_code_ASC
  Postal_code_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AddressPreviousValues {
  id: ID!
  city: String!
  country: String!
  state: String!
  Postal_code: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input AddressScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  Postal_code: String
  Postal_code_not: String
  Postal_code_in: [String!]
  Postal_code_not_in: [String!]
  Postal_code_lt: String
  Postal_code_lte: String
  Postal_code_gt: String
  Postal_code_gte: String
  Postal_code_contains: String
  Postal_code_not_contains: String
  Postal_code_starts_with: String
  Postal_code_not_starts_with: String
  Postal_code_ends_with: String
  Postal_code_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [AddressScalarWhereInput!]
  OR: [AddressScalarWhereInput!]
  NOT: [AddressScalarWhereInput!]
}

type AddressSubscriptionPayload {
  mutation: MutationType!
  node: Address
  updatedFields: [String!]
  previousValues: AddressPreviousValues
}

input AddressSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AddressWhereInput
  AND: [AddressSubscriptionWhereInput!]
  OR: [AddressSubscriptionWhereInput!]
  NOT: [AddressSubscriptionWhereInput!]
}

input AddressUpdateDataInput {
  city: String
  country: String
  state: String
  Postal_code: String
}

input AddressUpdateInput {
  city: String
  country: String
  state: String
  Postal_code: String
}

input AddressUpdateManyDataInput {
  city: String
  country: String
  state: String
  Postal_code: String
}

input AddressUpdateManyInput {
  create: [AddressCreateInput!]
  update: [AddressUpdateWithWhereUniqueNestedInput!]
  upsert: [AddressUpsertWithWhereUniqueNestedInput!]
  delete: [AddressWhereUniqueInput!]
  connect: [AddressWhereUniqueInput!]
  set: [AddressWhereUniqueInput!]
  disconnect: [AddressWhereUniqueInput!]
  deleteMany: [AddressScalarWhereInput!]
  updateMany: [AddressUpdateManyWithWhereNestedInput!]
}

input AddressUpdateManyMutationInput {
  city: String
  country: String
  state: String
  Postal_code: String
}

input AddressUpdateManyWithWhereNestedInput {
  where: AddressScalarWhereInput!
  data: AddressUpdateManyDataInput!
}

input AddressUpdateWithWhereUniqueNestedInput {
  where: AddressWhereUniqueInput!
  data: AddressUpdateDataInput!
}

input AddressUpsertWithWhereUniqueNestedInput {
  where: AddressWhereUniqueInput!
  update: AddressUpdateDataInput!
  create: AddressCreateInput!
}

input AddressWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  Postal_code: String
  Postal_code_not: String
  Postal_code_in: [String!]
  Postal_code_not_in: [String!]
  Postal_code_lt: String
  Postal_code_lte: String
  Postal_code_gt: String
  Postal_code_gte: String
  Postal_code_contains: String
  Postal_code_not_contains: String
  Postal_code_starts_with: String
  Postal_code_not_starts_with: String
  Postal_code_ends_with: String
  Postal_code_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [AddressWhereInput!]
  OR: [AddressWhereInput!]
  NOT: [AddressWhereInput!]
}

input AddressWhereUniqueInput {
  id: ID
}

type AggregateAddress {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateValidation_Product {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createAddress(data: AddressCreateInput!): Address!
  updateAddress(data: AddressUpdateInput!, where: AddressWhereUniqueInput!): Address
  updateManyAddresses(data: AddressUpdateManyMutationInput!, where: AddressWhereInput): BatchPayload!
  upsertAddress(where: AddressWhereUniqueInput!, create: AddressCreateInput!, update: AddressUpdateInput!): Address!
  deleteAddress(where: AddressWhereUniqueInput!): Address
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createValidation_Product(data: Validation_ProductCreateInput!): Validation_Product!
  updateValidation_Product(data: Validation_ProductUpdateInput!, where: Validation_ProductWhereUniqueInput!): Validation_Product
  updateManyValidation_Products(data: Validation_ProductUpdateManyMutationInput!, where: Validation_ProductWhereInput): BatchPayload!
  upsertValidation_Product(where: Validation_ProductWhereUniqueInput!, create: Validation_ProductCreateInput!, update: Validation_ProductUpdateInput!): Validation_Product!
  deleteValidation_Product(where: Validation_ProductWhereUniqueInput!): Validation_Product
  deleteManyValidation_Products(where: Validation_ProductWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  total_price: Float!
  status: OrderStatus!
  user: User!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  id: ID
  total_price: Float!
  status: OrderStatus
  user: UserCreateOneWithoutOrdersInput!
  products: ProductCreateManyInput
}

input OrderCreateManyWithoutUserInput {
  create: [OrderCreateWithoutUserInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateWithoutUserInput {
  id: ID
  total_price: Float!
  status: OrderStatus
  products: ProductCreateManyInput
}

type OrderEdge {
  node: Order!
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  total_price_ASC
  total_price_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderPreviousValues {
  id: ID!
  total_price: Float!
  status: OrderStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input OrderScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  total_price: Float
  total_price_not: Float
  total_price_in: [Float!]
  total_price_not_in: [Float!]
  total_price_lt: Float
  total_price_lte: Float
  total_price_gt: Float
  total_price_gte: Float
  status: OrderStatus
  status_not: OrderStatus
  status_in: [OrderStatus!]
  status_not_in: [OrderStatus!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [OrderScalarWhereInput!]
  OR: [OrderScalarWhereInput!]
  NOT: [OrderScalarWhereInput!]
}

enum OrderStatus {
  DONE
  PENDING
  CANCELLED
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  total_price: Float
  status: OrderStatus
  user: UserUpdateOneRequiredWithoutOrdersInput
  products: ProductUpdateManyInput
}

input OrderUpdateManyDataInput {
  total_price: Float
  status: OrderStatus
}

input OrderUpdateManyMutationInput {
  total_price: Float
  status: OrderStatus
}

input OrderUpdateManyWithoutUserInput {
  create: [OrderCreateWithoutUserInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [OrderScalarWhereInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
}

input OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput!
  data: OrderUpdateManyDataInput!
}

input OrderUpdateWithoutUserDataInput {
  total_price: Float
  status: OrderStatus
  products: ProductUpdateManyInput
}

input OrderUpdateWithWhereUniqueWithoutUserInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutUserDataInput!
}

input OrderUpsertWithWhereUniqueWithoutUserInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutUserDataInput!
  create: OrderCreateWithoutUserInput!
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  total_price: Float
  total_price_not: Float
  total_price_in: [Float!]
  total_price_not_in: [Float!]
  total_price_lt: Float
  total_price_lte: Float
  total_price_gt: Float
  total_price_gte: Float
  status: OrderStatus
  status_not: OrderStatus
  status_in: [OrderStatus!]
  status_not_in: [OrderStatus!]
  user: UserWhereInput
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  name: String!
  price: Float!
  stock: Int!
  status: ProductStatus!
  user: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  id: ID
  name: String!
  price: Float!
  stock: Int!
  status: ProductStatus
  user: UserCreateOneWithoutProductsOwnedInput!
}

input ProductCreateManyInput {
  create: [ProductCreateInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithoutUserInput {
  create: [ProductCreateWithoutUserInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateOneInput {
  create: ProductCreateInput
  connect: ProductWhereUniqueInput
}

input ProductCreateWithoutUserInput {
  id: ID
  name: String!
  price: Float!
  stock: Int!
  status: ProductStatus
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  stock_ASC
  stock_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
  price: Float!
  stock: Int!
  status: ProductStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ProductScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  stock: Int
  stock_not: Int
  stock_in: [Int!]
  stock_not_in: [Int!]
  stock_lt: Int
  stock_lte: Int
  stock_gt: Int
  stock_gte: Int
  status: ProductStatus
  status_not: ProductStatus
  status_in: [ProductStatus!]
  status_not_in: [ProductStatus!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProductScalarWhereInput!]
  OR: [ProductScalarWhereInput!]
  NOT: [ProductScalarWhereInput!]
}

enum ProductStatus {
  OUT_OF_STOCK
  BANNED
  IN_STOCK
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateDataInput {
  name: String
  price: Float
  stock: Int
  status: ProductStatus
  user: UserUpdateOneRequiredWithoutProductsOwnedInput
}

input ProductUpdateInput {
  name: String
  price: Float
  stock: Int
  status: ProductStatus
  user: UserUpdateOneRequiredWithoutProductsOwnedInput
}

input ProductUpdateManyDataInput {
  name: String
  price: Float
  stock: Int
  status: ProductStatus
}

input ProductUpdateManyInput {
  create: [ProductCreateInput!]
  update: [ProductUpdateWithWhereUniqueNestedInput!]
  upsert: [ProductUpsertWithWhereUniqueNestedInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  set: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyMutationInput {
  name: String
  price: Float
  stock: Int
  status: ProductStatus
}

input ProductUpdateManyWithoutUserInput {
  create: [ProductCreateWithoutUserInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  set: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput!
  data: ProductUpdateManyDataInput!
}

input ProductUpdateOneRequiredInput {
  create: ProductCreateInput
  update: ProductUpdateDataInput
  upsert: ProductUpsertNestedInput
  connect: ProductWhereUniqueInput
}

input ProductUpdateWithoutUserDataInput {
  name: String
  price: Float
  stock: Int
  status: ProductStatus
}

input ProductUpdateWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateDataInput!
}

input ProductUpdateWithWhereUniqueWithoutUserInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutUserDataInput!
}

input ProductUpsertNestedInput {
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductUpsertWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductUpsertWithWhereUniqueWithoutUserInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutUserDataInput!
  create: ProductCreateWithoutUserInput!
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  stock: Int
  stock_not: Int
  stock_in: [Int!]
  stock_not_in: [Int!]
  stock_lt: Int
  stock_lte: Int
  stock_gt: Int
  stock_gte: Int
  status: ProductStatus
  status_not: ProductStatus
  status_in: [ProductStatus!]
  status_not_in: [ProductStatus!]
  user: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  address(where: AddressWhereUniqueInput!): Address
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  validationProduct(where: Validation_ProductWhereUniqueInput!): Validation_Product
  validationProducts(where: Validation_ProductWhereInput, orderBy: Validation_ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Validation_Product]!
  validationProductsConnection(where: Validation_ProductWhereInput, orderBy: Validation_ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Validation_ProductConnection!
  node(id: ID!): Node
}

enum Role {
  USER
  ADMIN
}

type Subscription {
  address(where: AddressSubscriptionWhereInput): AddressSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  validationProduct(where: Validation_ProductSubscriptionWhereInput): Validation_ProductSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  address(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address!]
  status: UserStatus!
  roles: Role!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  productsOwned(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  address: AddressCreateManyInput
  status: UserStatus
  roles: Role
  orders: OrderCreateManyWithoutUserInput
  productsOwned: ProductCreateManyWithoutUserInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutProductsOwnedInput {
  create: UserCreateWithoutProductsOwnedInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutOrdersInput {
  id: ID
  name: String!
  address: AddressCreateManyInput
  status: UserStatus
  roles: Role
  productsOwned: ProductCreateManyWithoutUserInput
}

input UserCreateWithoutProductsOwnedInput {
  id: ID
  name: String!
  address: AddressCreateManyInput
  status: UserStatus
  roles: Role
  orders: OrderCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  status_ASC
  status_DESC
  roles_ASC
  roles_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  status: UserStatus!
  roles: Role!
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum UserStatus {
  BANNED
  SUSPENDED
  FINE
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  address: AddressUpdateManyInput
  status: UserStatus
  roles: Role
  orders: OrderUpdateManyWithoutUserInput
  productsOwned: ProductUpdateManyWithoutUserInput
}

input UserUpdateInput {
  name: String
  address: AddressUpdateManyInput
  status: UserStatus
  roles: Role
  orders: OrderUpdateManyWithoutUserInput
  productsOwned: ProductUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  status: UserStatus
  roles: Role
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  update: UserUpdateWithoutOrdersDataInput
  upsert: UserUpsertWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutProductsOwnedInput {
  create: UserCreateWithoutProductsOwnedInput
  update: UserUpdateWithoutProductsOwnedDataInput
  upsert: UserUpsertWithoutProductsOwnedInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutOrdersDataInput {
  name: String
  address: AddressUpdateManyInput
  status: UserStatus
  roles: Role
  productsOwned: ProductUpdateManyWithoutUserInput
}

input UserUpdateWithoutProductsOwnedDataInput {
  name: String
  address: AddressUpdateManyInput
  status: UserStatus
  roles: Role
  orders: OrderUpdateManyWithoutUserInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput!
  create: UserCreateWithoutOrdersInput!
}

input UserUpsertWithoutProductsOwnedInput {
  update: UserUpdateWithoutProductsOwnedDataInput!
  create: UserCreateWithoutProductsOwnedInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  address_every: AddressWhereInput
  address_some: AddressWhereInput
  address_none: AddressWhereInput
  status: UserStatus
  status_not: UserStatus
  status_in: [UserStatus!]
  status_not_in: [UserStatus!]
  roles: Role
  roles_not: Role
  roles_in: [Role!]
  roles_not_in: [Role!]
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
  productsOwned_every: ProductWhereInput
  productsOwned_some: ProductWhereInput
  productsOwned_none: ProductWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}

type Validation_Product {
  id: ID!
  reviewer: User!
  product: Product!
  status: ValidationStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Validation_ProductConnection {
  pageInfo: PageInfo!
  edges: [Validation_ProductEdge]!
  aggregate: AggregateValidation_Product!
}

input Validation_ProductCreateInput {
  id: ID
  reviewer: UserCreateOneInput!
  product: ProductCreateOneInput!
  status: ValidationStatus
}

type Validation_ProductEdge {
  node: Validation_Product!
  cursor: String!
}

enum Validation_ProductOrderByInput {
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Validation_ProductPreviousValues {
  id: ID!
  status: ValidationStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Validation_ProductSubscriptionPayload {
  mutation: MutationType!
  node: Validation_Product
  updatedFields: [String!]
  previousValues: Validation_ProductPreviousValues
}

input Validation_ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Validation_ProductWhereInput
  AND: [Validation_ProductSubscriptionWhereInput!]
  OR: [Validation_ProductSubscriptionWhereInput!]
  NOT: [Validation_ProductSubscriptionWhereInput!]
}

input Validation_ProductUpdateInput {
  reviewer: UserUpdateOneRequiredInput
  product: ProductUpdateOneRequiredInput
  status: ValidationStatus
}

input Validation_ProductUpdateManyMutationInput {
  status: ValidationStatus
}

input Validation_ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  reviewer: UserWhereInput
  product: ProductWhereInput
  status: ValidationStatus
  status_not: ValidationStatus
  status_in: [ValidationStatus!]
  status_not_in: [ValidationStatus!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [Validation_ProductWhereInput!]
  OR: [Validation_ProductWhereInput!]
  NOT: [Validation_ProductWhereInput!]
}

input Validation_ProductWhereUniqueInput {
  id: ID
}

enum ValidationStatus {
  REJECTED
  ACCEPTED
  PENDING
}
`