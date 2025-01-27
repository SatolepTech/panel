/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AuthRegisterCompanyInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AuthRegisterUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type GetOneUserGqlDto = {
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isEmailConfirmed: Scalars['Boolean']['output'];
  isSuperAdmin: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LoginGqlDto = {
  token: Scalars['String']['output'];
  user: GetOneUserGqlDto;
};

export type MeGqlDto = {
  user: GetOneUserGqlDto;
};

export type Mutation = {
  reciveCode: SuccessGqlDto;
  register: SuccessGqlDto;
  requestPasswordChange: SuccessGqlDto;
  scraperPopulateDatabase: SuccessGqlDto;
};


export type MutationReciveCodeArgs = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  company: AuthRegisterCompanyInput;
  user: AuthRegisterUserInput;
};


export type MutationRequestPasswordChangeArgs = {
  email: Scalars['String']['input'];
};


export type MutationScraperPopulateDatabaseArgs = {
  search: Array<Scalars['String']['input']>;
};

export type ProductChildGqlDto = {
  color?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  googleShopping: ProductGoogleShoppingGqlDto;
  id: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  imageUrls: Array<Scalars['String']['output']>;
  price: ProductPriceGqlDto;
  rating?: Maybe<Scalars['String']['output']>;
  storesData: Array<ProductChildStoreDataGqlDto>;
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  variant?: Maybe<Scalars['String']['output']>;
};

export type ProductChildStoreDataGqlDto = {
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  priceFormatted: Scalars['String']['output'];
  storeUrl: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ProductGoogleShoppingGqlDto = {
  productId: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ProductPriceGqlDto = {
  range?: Maybe<ProductPriceRangeGqlDto>;
};

export type ProductPriceRangeGqlDto = {
  max: Scalars['Int']['output'];
  med: Scalars['Int']['output'];
  min: Scalars['Int']['output'];
};

export type ProductRatingGqlDto = {
  average?: Maybe<Scalars['String']['output']>;
};

export type ProductRelatedsDto = {
  data: Array<ProductRelatedsDto_Product>;
};

export type ProductRelatedsDto_Product = {
  color?: Maybe<Scalars['String']['output']>;
  groupId: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  minimunPrice: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  title: Scalars['String']['output'];
  variant?: Maybe<Scalars['String']['output']>;
};

export type ProductSearchGqlDto = {
  children: Array<ProductChildGqlDto>;
  description: Scalars['String']['output'];
  elapsedTimeSeconds?: Maybe<Scalars['Int']['output']>;
  googleGroupId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  initialUrl: Scalars['String']['output'];
  lastScrapeAt: Scalars['DateTime']['output'];
  price: ProductPriceGqlDto;
  rating: ProductRatingGqlDto;
  sponsors?: Maybe<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type ProductSearchSuggestionGqlDto = {
  imageUrl?: Maybe<Scalars['String']['output']>;
  maxPrice?: Maybe<Scalars['Float']['output']>;
  minPrice?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
};

export type Query = {
  login: LoginGqlDto;
  me: MeGqlDto;
  productRelated: ProductRelatedsDto;
  productSearch: ProductSearchGqlDto;
  productSearchSuggestion: Array<ProductSearchSuggestionGqlDto>;
  scraperSearch: ProductSearchGqlDto;
};


export type QueryLoginArgs = {
  identification: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type QueryProductRelatedArgs = {
  groupId: Scalars['String']['input'];
};


export type QueryProductSearchArgs = {
  forceScrape: Scalars['Boolean']['input'];
  groupUrl?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductSearchSuggestionArgs = {
  limit?: Scalars['Int']['input'];
  search: Scalars['String']['input'];
  similarity?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryScraperSearchArgs = {
  groupUrl?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type SuccessGqlDto = {
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};
