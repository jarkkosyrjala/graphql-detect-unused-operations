import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  basicMutation: MyObject;
  complexMutation: MyObject;
  unusedMutation: Scalars['Boolean'];
};


export type MutationBasicMutationArgs = {
  unusedVariable?: InputMaybe<Scalars['Boolean']>;
};


export type MutationComplexMutationArgs = {
  scalarField: Scalars['String'];
};

export type MyDeepObject = {
  __typename?: 'MyDeepObject';
  age: Scalars['Int'];
  evenDeeperObject: MyEvenDeeperObject;
  name: Scalars['String'];
};

export type MyEvenDeeperObject = {
  __typename?: 'MyEvenDeeperObject';
  id: Scalars['ID'];
};

export type MyObject = {
  __typename?: 'MyObject';
  id: Scalars['ID'];
  scalarField: Scalars['String'];
  subObject: MyDeepObject;
};

export type Query = {
  __typename?: 'Query';
  basicQuery: MyObject;
  complexQuery: MyObject;
  unusedQuery: Scalars['Boolean'];
};


export type QueryBasicQueryArgs = {
  id: Scalars['String'];
};


export type QueryComplexQueryArgs = {
  id: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  MyDeepObject: ResolverTypeWrapper<MyDeepObject>;
  MyEvenDeeperObject: ResolverTypeWrapper<MyEvenDeeperObject>;
  MyObject: ResolverTypeWrapper<MyObject>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  MyDeepObject: MyDeepObject;
  MyEvenDeeperObject: MyEvenDeeperObject;
  MyObject: MyObject;
  Query: {};
  String: Scalars['String'];
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  basicMutation?: Resolver<ResolversTypes['MyObject'], ParentType, ContextType, Partial<MutationBasicMutationArgs>>;
  complexMutation?: Resolver<ResolversTypes['MyObject'], ParentType, ContextType, RequireFields<MutationComplexMutationArgs, 'scalarField'>>;
  unusedMutation?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type MyDeepObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyDeepObject'] = ResolversParentTypes['MyDeepObject']> = {
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  evenDeeperObject?: Resolver<ResolversTypes['MyEvenDeeperObject'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MyEvenDeeperObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyEvenDeeperObject'] = ResolversParentTypes['MyEvenDeeperObject']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MyObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyObject'] = ResolversParentTypes['MyObject']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  scalarField?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subObject?: Resolver<ResolversTypes['MyDeepObject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  basicQuery?: Resolver<ResolversTypes['MyObject'], ParentType, ContextType, RequireFields<QueryBasicQueryArgs, 'id'>>;
  complexQuery?: Resolver<ResolversTypes['MyObject'], ParentType, ContextType, RequireFields<QueryComplexQueryArgs, 'id'>>;
  unusedQuery?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  MyDeepObject?: MyDeepObjectResolvers<ContextType>;
  MyEvenDeeperObject?: MyEvenDeeperObjectResolvers<ContextType>;
  MyObject?: MyObjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

