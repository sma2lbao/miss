import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: number | string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Bullet = {
  __typename?: "Bullet";
  id: Scalars["ID"];
  content: Scalars["String"];
  point?: Maybe<Scalars["Float"]>;
  create_at: Scalars["Date"];
  author: User;
  media: Medium;
};

export type Category = {
  __typename?: "Category";
  id: Scalars["ID"];
  label: Scalars["String"];
  alias?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  create_at: Scalars["Date"];
  update_at: Scalars["Date"];
  delete_at: Scalars["Date"];
  children?: Maybe<Array<Category>>;
  parent?: Maybe<Category>;
};

export type Character = {
  __typename?: "Character";
  name: Scalars["String"];
  avatar?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type CreateBulletInput = {
  content: Scalars["String"];
  point?: Maybe<Scalars["Float"]>;
  medium_id: Scalars["Int"];
};

export type CreateCategoryInput = {
  label: Scalars["String"];
  alias?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  children?: Maybe<Array<CreateCategoryInput>>;
};

export type CreateCharacterInput = {
  name: Scalars["String"];
  avatar?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type CreateFollowInput = {
  follower_uid?: Maybe<Scalars["ID"]>;
  owner_uid: Scalars["ID"];
};

export type CreateMovieInput = {
  title: Scalars["String"];
  sub_title?: Maybe<Scalars["String"]>;
  alias_title?: Maybe<Scalars["String"]>;
  cover: Scalars["String"];
  posters?: Maybe<Array<Scalars["String"]>>;
  description?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  actors?: Maybe<Array<CreateCharacterInput>>;
  directors?: Maybe<Array<CreateCharacterInput>>;
  source_ids: Array<Scalars["ID"]>;
  sources: Array<CreateMovieMediumInput>;
};

export type CreateMovieMediumInput = {
  name: Scalars["String"];
  url: Scalars["String"];
  alias_name?: Maybe<Scalars["String"]>;
  posters?: Maybe<Array<Scalars["String"]>>;
  description?: Maybe<Scalars["String"]>;
  movie_id?: Maybe<Scalars["ID"]>;
};

export type CreatePlaylistInput = {
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
};

export type CreateReviewInput = {
  content: Scalars["String"];
  author_uid: Scalars["ID"];
};

export type CreateTagInput = {
  label: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export type CreateTopicInput = {
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  top_movie_id?: Maybe<Scalars["ID"]>;
  top_movies_ids?: Maybe<Array<Scalars["ID"]>>;
};

export type CreateUserInput = {
  username: Scalars["String"];
  password: Scalars["String"];
  email: Scalars["String"];
  nickname?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  mobile?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type CreateUserWithCodeInput = {
  username: Scalars["String"];
  password: Scalars["String"];
  email: Scalars["String"];
  nickname?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  mobile?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  code: Scalars["String"];
};

export type DeleteFollowInput = {
  follower_uid?: Maybe<Scalars["ID"]>;
  owner_uid: Scalars["ID"];
};

export type Follow = {
  __typename?: "Follow";
  follower: User;
  owner: User;
  create_at: Scalars["Date"];
  update_at: Scalars["Date"];
  delete_at: Scalars["Date"];
};

export type FollowEdge = {
  __typename?: "FollowEdge";
  cursor: Scalars["String"];
  node: Follow;
};

export type FollowPageInfo = {
  __typename?: "FollowPageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor: Scalars["String"];
  endCursor: Scalars["String"];
};

export type FollowPaginated = {
  __typename?: "FollowPaginated";
  edges?: Maybe<Array<FollowEdge>>;
  nodes?: Maybe<Array<Follow>>;
  pageInfo: FollowPageInfo;
  totalCount: Scalars["Int"];
};

export type Medium = {
  __typename?: "Medium";
  id: Scalars["ID"];
  name: Scalars["String"];
  alias_name: Scalars["String"];
  posters?: Maybe<Array<Scalars["String"]>>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Float"]>;
  preview_url?: Maybe<Scalars["String"]>;
  url: Scalars["String"];
  low_quality_url?: Maybe<Scalars["String"]>;
  medium_quality_url?: Maybe<Scalars["String"]>;
  high_quality_url?: Maybe<Scalars["String"]>;
  super_quality_url?: Maybe<Scalars["String"]>;
  create_at: Scalars["Date"];
  update_at: Scalars["Date"];
  delete_at: Scalars["Date"];
  version: Scalars["Float"];
};

export type Movie = {
  __typename?: "Movie";
  id: Scalars["ID"];
  title: Scalars["String"];
  sub_title?: Maybe<Scalars["String"]>;
  alias_title?: Maybe<Scalars["String"]>;
  cover: Scalars["String"];
  posters?: Maybe<Array<Scalars["String"]>>;
  description?: Maybe<Scalars["String"]>;
  region: Region;
  actors?: Maybe<Array<Character>>;
  directors?: Maybe<Array<Character>>;
  sources: Array<MovieMedium>;
  author: User;
  create_at: Scalars["Date"];
  update_at: Scalars["Date"];
  delete_at: Scalars["Date"];
};

export type MovieEdge = {
  __typename?: "MovieEdge";
  cursor: Scalars["String"];
  node: Movie;
};

export type MovieMedium = {
  __typename?: "MovieMedium";
  id: Scalars["ID"];
  name: Scalars["String"];
  alias_name: Scalars["String"];
  posters?: Maybe<Array<Scalars["String"]>>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Float"]>;
  preview_url?: Maybe<Scalars["String"]>;
  url: Scalars["String"];
  low_quality_url?: Maybe<Scalars["String"]>;
  medium_quality_url?: Maybe<Scalars["String"]>;
  high_quality_url?: Maybe<Scalars["String"]>;
  super_quality_url?: Maybe<Scalars["String"]>;
  create_at: Scalars["Date"];
  update_at: Scalars["Date"];
  delete_at: Scalars["Date"];
  version: Scalars["Float"];
};

export type MoviePageInfo = {
  __typename?: "MoviePageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor: Scalars["String"];
  endCursor: Scalars["String"];
};

export type MoviePaginated = {
  __typename?: "MoviePaginated";
  edges?: Maybe<Array<MovieEdge>>;
  nodes?: Maybe<Array<Movie>>;
  pageInfo: MoviePageInfo;
  totalCount: Scalars["Int"];
};

export type Mutation = {
  __typename?: "Mutation";
  create_tag: Tag;
  add_movie_to_tag: Scalars["Boolean"];
  create_movie: Movie;
  create_category: Category;
  delete_category: Scalars["Boolean"];
  create_bullet: Bullet;
  login: Scalars["String"];
  /** create user. */
  create_user: User;
  /** create user with verif code. */
  create_user_with_code: User;
  send_register_email: Scalars["Boolean"];
  update_user: Scalars["String"];
  upload_file_oss: Scalars["String"];
  create_topic: Topic;
  create_review: Review;
  create_playlist: Playlist;
  add_movie_to_playlist: Scalars["Boolean"];
  create_follow: Follow;
  remove_follow: Follow;
};

export type MutationCreate_TagArgs = {
  tag: CreateTagInput;
};

export type MutationAdd_Movie_To_TagArgs = {
  tag_id: Scalars["Float"];
  movie_id: Scalars["Float"];
};

export type MutationCreate_MovieArgs = {
  movie: CreateMovieInput;
};

export type MutationCreate_CategoryArgs = {
  category: CreateCategoryInput;
};

export type MutationDelete_CategoryArgs = {
  id: Scalars["ID"];
};

export type MutationCreate_BulletArgs = {
  bullet: CreateBulletInput;
};

export type MutationLoginArgs = {
  password: Scalars["String"];
  username: Scalars["String"];
};

export type MutationCreate_UserArgs = {
  user: CreateUserInput;
};

export type MutationCreate_User_With_CodeArgs = {
  user: CreateUserWithCodeInput;
};

export type MutationSend_Register_EmailArgs = {
  email: Scalars["String"];
};

export type MutationUpdate_UserArgs = {
  user: UpdateUserInput;
};

export type MutationUpload_File_OssArgs = {
  file: Scalars["Upload"];
};

export type MutationCreate_TopicArgs = {
  topic: CreateTopicInput;
};

export type MutationCreate_ReviewArgs = {
  review: CreateReviewInput;
};

export type MutationCreate_PlaylistArgs = {
  playlist: CreatePlaylistInput;
};

export type MutationAdd_Movie_To_PlaylistArgs = {
  playlist_id: Scalars["Float"];
  movie_id: Scalars["Float"];
};

export type MutationCreate_FollowArgs = {
  follow: CreateFollowInput;
};

export type MutationRemove_FollowArgs = {
  follow: DeleteFollowInput;
};

export type PaginatedQuery = {
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["String"]>;
};

export type Playlist = {
  __typename?: "Playlist";
  id: Scalars["ID"];
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
  movies?: Maybe<Array<Movie>>;
  author: User;
  create_at: Scalars["Date"];
  update_at: Scalars["Date"];
  delete_at: Scalars["Date"];
};

export type Query = {
  __typename?: "Query";
  movie: Movie;
  movies_paginated: MoviePaginated;
  me: User;
  /** find user by uid. */
  user: User;
  /** all user with paginated. */
  users_paginated: UserPaginated;
  current_topic: Topic;
  movie_urges: Array<Movie>;
  user_urges: Array<User>;
  playlist: Playlist;
  follows: Array<Follow>;
  follows_paginated: FollowPaginated;
  follows_total: Scalars["Int"];
  fans: Array<Follow>;
  fans_paginated: FollowPaginated;
  fans_total: Scalars["Int"];
  is_following: Scalars["Boolean"];
};

export type QueryMovieArgs = {
  id: Scalars["ID"];
};

export type QueryMovies_PaginatedArgs = {
  query?: Maybe<PaginatedQuery>;
};

export type QueryUserArgs = {
  uid: Scalars["String"];
};

export type QueryUsers_PaginatedArgs = {
  query?: Maybe<PaginatedQuery>;
};

export type QueryPlaylistArgs = {
  playlist_id: Scalars["Float"];
};

export type QueryFollows_PaginatedArgs = {
  query?: Maybe<PaginatedQuery>;
};

export type QueryFollows_TotalArgs = {
  follower_uid?: Maybe<Scalars["String"]>;
};

export type QueryFans_PaginatedArgs = {
  query?: Maybe<PaginatedQuery>;
};

export type QueryFans_TotalArgs = {
  owner_uid?: Maybe<Scalars["String"]>;
};

export type QueryIs_FollowingArgs = {
  follower_uid?: Maybe<Scalars["String"]>;
  owner_uid: Scalars["String"];
};

export enum Region {
  Mainland = "Mainland",
  America = "America",
  Hongkong = "Hongkong",
  Taiwan = "Taiwan",
  Britain = "Britain",
  India = "India"
}

export type Review = {
  __typename?: "Review";
  id: Scalars["ID"];
  content: Scalars["String"];
  author: User;
  create_at: Scalars["Date"];
  update_at: Scalars["Date"];
  delete_at: Scalars["Date"];
};

export type Subscription = {
  __typename?: "Subscription";
  user_created: User;
};

export type Tag = {
  __typename?: "Tag";
  id: Scalars["ID"];
  label: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  movies?: Maybe<Array<Movie>>;
  create_at: Scalars["Date"];
  update_at: Scalars["Date"];
};

export type Topic = {
  __typename?: "Topic";
  id: Scalars["ID"];
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  top_movie?: Maybe<Movie>;
  top_movies?: Maybe<Array<Movie>>;
  create_at: Scalars["Date"];
  update_at: Scalars["Date"];
  delete_at: Scalars["Date"];
};

export type UpdateUserInput = {
  nickname?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  mobile?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  uid: Scalars["ID"];
  username: Scalars["String"];
  password: Scalars["String"];
  email: Scalars["String"];
  nickname?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  mobile?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  create_at: Scalars["Date"];
  update_at: Scalars["Date"];
  delete_at: Scalars["Date"];
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"];
  node: User;
};

export type UserPageInfo = {
  __typename?: "UserPageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor: Scalars["String"];
  endCursor: Scalars["String"];
};

export type UserPaginated = {
  __typename?: "UserPaginated";
  edges?: Maybe<Array<UserEdge>>;
  nodes?: Maybe<Array<User>>;
  pageInfo: UserPageInfo;
  totalCount: Scalars["Int"];
};

export type LoginMutationVariables = Exact<{
  username: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = { __typename?: "Mutation"; login: string };

export type SendRegisterEmailMutationVariables = Exact<{
  email: Scalars["String"];
}>;

export type SendRegisterEmailMutation = {
  __typename?: "Mutation";
  send_register_email: boolean;
};

export type CreateUserWithCodeMutationVariables = Exact<{
  user: CreateUserWithCodeInput;
}>;

export type CreateUserWithCodeMutation = {
  __typename?: "Mutation";
  create_user_with_code: {
    __typename?: "User";
    username: string;
    avatar?: Maybe<string>;
  };
};

export type CurrentTopicQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentTopicQuery = {
  __typename?: "Query";
  current_topic: {
    __typename?: "Topic";
    title: string;
    description?: Maybe<string>;
    top_movies?: Maybe<
      Array<{
        __typename?: "Movie";
        description?: Maybe<string>;
        title: string;
        sub_title?: Maybe<string>;
        create_at: any;
        update_at: any;
        cover: string;
        posters?: Maybe<Array<string>>;
        author: {
          __typename?: "User";
          avatar?: Maybe<string>;
          nickname?: Maybe<string>;
          uid: number | string;
          username: string;
        };
      }>
    >;
    top_movie?: Maybe<{
      __typename?: "Movie";
      description?: Maybe<string>;
      title: string;
      sub_title?: Maybe<string>;
      create_at: any;
      update_at: any;
      cover: string;
      posters?: Maybe<Array<string>>;
      author: {
        __typename?: "User";
        avatar?: Maybe<string>;
        nickname?: Maybe<string>;
        uid: number | string;
        username: string;
      };
    }>;
  };
};

export type MovieUrgesQueryVariables = Exact<{ [key: string]: never }>;

export type MovieUrgesQuery = {
  __typename?: "Query";
  movie_urges: Array<{
    __typename?: "Movie";
    title: string;
    sub_title?: Maybe<string>;
    cover: string;
    description?: Maybe<string>;
    author: {
      __typename?: "User";
      avatar?: Maybe<string>;
      nickname?: Maybe<string>;
      uid: number | string;
    };
  }>;
};

export type UserUrgesQueryVariables = Exact<{ [key: string]: never }>;

export type UserUrgesQuery = {
  __typename?: "Query";
  user_urges: Array<{
    __typename?: "User";
    nickname?: Maybe<string>;
    avatar?: Maybe<string>;
    description?: Maybe<string>;
  }>;
};

export type MovieQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type MovieQuery = {
  __typename?: "Query";
  movie: {
    __typename?: "Movie";
    cover: string;
    title: string;
    update_at: any;
    sub_title?: Maybe<string>;
    id: number | string;
    description?: Maybe<string>;
    create_at: any;
    alias_title?: Maybe<string>;
    posters?: Maybe<Array<string>>;
    region: Region;
    actors?: Maybe<
      Array<{
        __typename?: "Character";
        avatar?: Maybe<string>;
        name: string;
        description?: Maybe<string>;
      }>
    >;
    author: {
      __typename?: "User";
      avatar?: Maybe<string>;
      uid: number | string;
      nickname?: Maybe<string>;
    };
    directors?: Maybe<
      Array<{
        __typename?: "Character";
        avatar?: Maybe<string>;
        description?: Maybe<string>;
        name: string;
      }>
    >;
    sources: Array<{
      __typename?: "MovieMedium";
      url: string;
      super_quality_url?: Maybe<string>;
      preview_url?: Maybe<string>;
      posters?: Maybe<Array<string>>;
      name: string;
      medium_quality_url?: Maybe<string>;
      low_quality_url?: Maybe<string>;
      id: number | string;
      high_quality_url?: Maybe<string>;
      duration?: Maybe<number>;
      description?: Maybe<string>;
      alias_name: string;
      create_at: any;
      update_at: any;
    }>;
  };
};

export type MoviesPaginatedQueryVariables = Exact<{
  query?: Maybe<PaginatedQuery>;
}>;

export type MoviesPaginatedQuery = {
  __typename?: "Query";
  movies_paginated: {
    __typename?: "MoviePaginated";
    totalCount: number;
    pageInfo: {
      __typename?: "MoviePageInfo";
      hasNextPage: boolean;
      endCursor: string;
    };
    edges?: Maybe<
      Array<{
        __typename?: "MovieEdge";
        cursor: string;
        node: {
          __typename?: "Movie";
          title: string;
          sub_title?: Maybe<string>;
          alias_title?: Maybe<string>;
          cover: string;
          description?: Maybe<string>;
          author: { __typename?: "User"; nickname?: Maybe<string> };
        };
      }>
    >;
  };
};

export const LoginDocument = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<
  LoginMutation
>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const SendRegisterEmailDocument = gql`
  mutation sendRegisterEmail($email: String!) {
    send_register_email(email: $email)
  }
`;
export type SendRegisterEmailMutationFn = ApolloReactCommon.MutationFunction<
  SendRegisterEmailMutation,
  SendRegisterEmailMutationVariables
>;

/**
 * __useSendRegisterEmailMutation__
 *
 * To run a mutation, you first call `useSendRegisterEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendRegisterEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendRegisterEmailMutation, { data, loading, error }] = useSendRegisterEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendRegisterEmailMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SendRegisterEmailMutation,
    SendRegisterEmailMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    SendRegisterEmailMutation,
    SendRegisterEmailMutationVariables
  >(SendRegisterEmailDocument, baseOptions);
}
export type SendRegisterEmailMutationHookResult = ReturnType<
  typeof useSendRegisterEmailMutation
>;
export type SendRegisterEmailMutationResult = ApolloReactCommon.MutationResult<
  SendRegisterEmailMutation
>;
export type SendRegisterEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SendRegisterEmailMutation,
  SendRegisterEmailMutationVariables
>;
export const CreateUserWithCodeDocument = gql`
  mutation createUserWithCode($user: CreateUserWithCodeInput!) {
    create_user_with_code(user: $user) {
      username
      avatar
    }
  }
`;
export type CreateUserWithCodeMutationFn = ApolloReactCommon.MutationFunction<
  CreateUserWithCodeMutation,
  CreateUserWithCodeMutationVariables
>;

/**
 * __useCreateUserWithCodeMutation__
 *
 * To run a mutation, you first call `useCreateUserWithCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserWithCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserWithCodeMutation, { data, loading, error }] = useCreateUserWithCodeMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateUserWithCodeMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateUserWithCodeMutation,
    CreateUserWithCodeMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateUserWithCodeMutation,
    CreateUserWithCodeMutationVariables
  >(CreateUserWithCodeDocument, baseOptions);
}
export type CreateUserWithCodeMutationHookResult = ReturnType<
  typeof useCreateUserWithCodeMutation
>;
export type CreateUserWithCodeMutationResult = ApolloReactCommon.MutationResult<
  CreateUserWithCodeMutation
>;
export type CreateUserWithCodeMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateUserWithCodeMutation,
  CreateUserWithCodeMutationVariables
>;
export const CurrentTopicDocument = gql`
  query currentTopic {
    current_topic {
      title
      description
      top_movies {
        description
        title
        sub_title
        create_at
        update_at
        cover
        posters
        author {
          avatar
          nickname
          uid
          username
        }
      }
      top_movie {
        description
        title
        sub_title
        create_at
        update_at
        cover
        posters
        author {
          avatar
          nickname
          uid
          username
        }
      }
    }
  }
`;

/**
 * __useCurrentTopicQuery__
 *
 * To run a query within a React component, call `useCurrentTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentTopicQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentTopicQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CurrentTopicQuery,
    CurrentTopicQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    CurrentTopicQuery,
    CurrentTopicQueryVariables
  >(CurrentTopicDocument, baseOptions);
}
export function useCurrentTopicLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CurrentTopicQuery,
    CurrentTopicQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    CurrentTopicQuery,
    CurrentTopicQueryVariables
  >(CurrentTopicDocument, baseOptions);
}
export type CurrentTopicQueryHookResult = ReturnType<
  typeof useCurrentTopicQuery
>;
export type CurrentTopicLazyQueryHookResult = ReturnType<
  typeof useCurrentTopicLazyQuery
>;
export type CurrentTopicQueryResult = ApolloReactCommon.QueryResult<
  CurrentTopicQuery,
  CurrentTopicQueryVariables
>;
export const MovieUrgesDocument = gql`
  query movieUrges {
    movie_urges {
      title
      sub_title
      cover
      description
      author {
        avatar
        nickname
        uid
      }
    }
  }
`;

/**
 * __useMovieUrgesQuery__
 *
 * To run a query within a React component, call `useMovieUrgesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieUrgesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieUrgesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMovieUrgesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    MovieUrgesQuery,
    MovieUrgesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<MovieUrgesQuery, MovieUrgesQueryVariables>(
    MovieUrgesDocument,
    baseOptions
  );
}
export function useMovieUrgesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MovieUrgesQuery,
    MovieUrgesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    MovieUrgesQuery,
    MovieUrgesQueryVariables
  >(MovieUrgesDocument, baseOptions);
}
export type MovieUrgesQueryHookResult = ReturnType<typeof useMovieUrgesQuery>;
export type MovieUrgesLazyQueryHookResult = ReturnType<
  typeof useMovieUrgesLazyQuery
>;
export type MovieUrgesQueryResult = ApolloReactCommon.QueryResult<
  MovieUrgesQuery,
  MovieUrgesQueryVariables
>;
export const UserUrgesDocument = gql`
  query userUrges {
    user_urges {
      nickname
      avatar
      description
    }
  }
`;

/**
 * __useUserUrgesQuery__
 *
 * To run a query within a React component, call `useUserUrgesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserUrgesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserUrgesQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserUrgesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    UserUrgesQuery,
    UserUrgesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<UserUrgesQuery, UserUrgesQueryVariables>(
    UserUrgesDocument,
    baseOptions
  );
}
export function useUserUrgesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    UserUrgesQuery,
    UserUrgesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<UserUrgesQuery, UserUrgesQueryVariables>(
    UserUrgesDocument,
    baseOptions
  );
}
export type UserUrgesQueryHookResult = ReturnType<typeof useUserUrgesQuery>;
export type UserUrgesLazyQueryHookResult = ReturnType<
  typeof useUserUrgesLazyQuery
>;
export type UserUrgesQueryResult = ApolloReactCommon.QueryResult<
  UserUrgesQuery,
  UserUrgesQueryVariables
>;
export const MovieDocument = gql`
  query movie($id: ID!) {
    movie(id: $id) {
      actors {
        avatar
        name
        description
      }
      author {
        avatar
        uid
        nickname
      }
      cover
      title
      update_at
      sub_title
      id
      directors {
        avatar
        description
        name
      }
      description
      create_at
      alias_title
      posters
      region
      sources {
        url
        super_quality_url
        preview_url
        posters
        name
        medium_quality_url
        low_quality_url
        id
        high_quality_url
        duration
        description
        alias_name
        create_at
        update_at
      }
    }
  }
`;

/**
 * __useMovieQuery__
 *
 * To run a query within a React component, call `useMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMovieQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    MovieQuery,
    MovieQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<MovieQuery, MovieQueryVariables>(
    MovieDocument,
    baseOptions
  );
}
export function useMovieLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MovieQuery,
    MovieQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<MovieQuery, MovieQueryVariables>(
    MovieDocument,
    baseOptions
  );
}
export type MovieQueryHookResult = ReturnType<typeof useMovieQuery>;
export type MovieLazyQueryHookResult = ReturnType<typeof useMovieLazyQuery>;
export type MovieQueryResult = ApolloReactCommon.QueryResult<
  MovieQuery,
  MovieQueryVariables
>;
export const MoviesPaginatedDocument = gql`
  query moviesPaginated($query: PaginatedQuery) {
    movies_paginated(query: $query) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          title
          sub_title
          alias_title
          cover
          description
          author {
            nickname
          }
        }
      }
    }
  }
`;

/**
 * __useMoviesPaginatedQuery__
 *
 * To run a query within a React component, call `useMoviesPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesPaginatedQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useMoviesPaginatedQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    MoviesPaginatedQuery,
    MoviesPaginatedQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    MoviesPaginatedQuery,
    MoviesPaginatedQueryVariables
  >(MoviesPaginatedDocument, baseOptions);
}
export function useMoviesPaginatedLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MoviesPaginatedQuery,
    MoviesPaginatedQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    MoviesPaginatedQuery,
    MoviesPaginatedQueryVariables
  >(MoviesPaginatedDocument, baseOptions);
}
export type MoviesPaginatedQueryHookResult = ReturnType<
  typeof useMoviesPaginatedQuery
>;
export type MoviesPaginatedLazyQueryHookResult = ReturnType<
  typeof useMoviesPaginatedLazyQuery
>;
export type MoviesPaginatedQueryResult = ApolloReactCommon.QueryResult<
  MoviesPaginatedQuery,
  MoviesPaginatedQueryVariables
>;
