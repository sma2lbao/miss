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
  readonly __typename?: "Bullet";
  readonly id: Scalars["ID"];
  readonly content: Scalars["String"];
  readonly point?: Maybe<Scalars["Float"]>;
  readonly create_at: Scalars["Date"];
  readonly author: User;
  readonly medium: Medium;
};

export type Category = {
  readonly __typename?: "Category";
  readonly id: Scalars["ID"];
  readonly label: Scalars["String"];
  readonly alias?: Maybe<Scalars["String"]>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
  readonly children?: Maybe<ReadonlyArray<Category>>;
  readonly parent?: Maybe<Category>;
};

export type Character = {
  readonly __typename?: "Character";
  readonly avatar: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
  readonly name: Scalars["String"];
  readonly tags?: Maybe<ReadonlyArray<Scalars["String"]>>;
};

export type CreateBulletInput = {
  readonly content: Scalars["String"];
  readonly point?: Maybe<Scalars["Float"]>;
  readonly medium_id: Scalars["Int"];
};

export type CreateCategoryInput = {
  readonly label: Scalars["String"];
  readonly alias?: Maybe<Scalars["String"]>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly parent_id?: Maybe<Scalars["Float"]>;
  readonly children?: Maybe<ReadonlyArray<CreateCategoryInput>>;
};

export type CreateCharacterInput = {
  readonly name: Scalars["String"];
  readonly avatar?: Maybe<Scalars["String"]>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly tags?: Maybe<ReadonlyArray<Scalars["String"]>>;
};

export type CreateFollowInput = {
  readonly follower_uid?: Maybe<Scalars["ID"]>;
  readonly owner_uid: Scalars["ID"];
};

export type CreateMovieInput = {
  readonly title: Scalars["String"];
  readonly sub_title?: Maybe<Scalars["String"]>;
  readonly alias_title?: Maybe<Scalars["String"]>;
  readonly cover: Scalars["String"];
  readonly posters?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly about?: Maybe<Scalars["String"]>;
  readonly region?: Maybe<Scalars["String"]>;
  readonly credits?: Maybe<ReadonlyArray<CreateCharacterInput>>;
  readonly sources?: Maybe<ReadonlyArray<CreateMovieMediumInput>>;
};

export type CreateMovieMediumInput = {
  readonly name: Scalars["String"];
  readonly url: Scalars["String"];
  readonly alias_name?: Maybe<Scalars["String"]>;
  readonly cover?: Maybe<Scalars["String"]>;
  readonly posters?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly movie_id?: Maybe<Scalars["ID"]>;
};

export type CreatePlaylistInput = {
  readonly title: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
  readonly cover?: Maybe<Scalars["String"]>;
};

export type CreateReviewInput = {
  readonly content: Scalars["String"];
  readonly author_uid?: Maybe<Scalars["ID"]>;
  readonly type: ReviewMedium;
  readonly type_id: Scalars["ID"];
};

export type CreateTagInput = {
  readonly label: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
};

export type CreateTopicInput = {
  readonly title: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
  readonly top_movie_id?: Maybe<Scalars["ID"]>;
  readonly top_movies_ids?: Maybe<ReadonlyArray<Scalars["ID"]>>;
};

export type CreateUserInput = {
  readonly username: Scalars["String"];
  readonly password: Scalars["String"];
  readonly email: Scalars["String"];
  readonly nickname?: Maybe<Scalars["String"]>;
  readonly avatar?: Maybe<Scalars["String"]>;
  readonly mobile?: Maybe<Scalars["String"]>;
  readonly address?: Maybe<Scalars["String"]>;
  readonly description?: Maybe<Scalars["String"]>;
};

export type CreateUserWithCodeInput = {
  readonly username: Scalars["String"];
  readonly password: Scalars["String"];
  readonly email: Scalars["String"];
  readonly nickname?: Maybe<Scalars["String"]>;
  readonly avatar?: Maybe<Scalars["String"]>;
  readonly mobile?: Maybe<Scalars["String"]>;
  readonly address?: Maybe<Scalars["String"]>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly code: Scalars["String"];
};

export type CreateVideoInput = {
  readonly title: Scalars["String"];
  readonly sub_title?: Maybe<Scalars["String"]>;
  readonly alias_title?: Maybe<Scalars["String"]>;
  readonly cover: Scalars["String"];
  readonly posters?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly sources?: Maybe<ReadonlyArray<CreateVideoMediumInput>>;
};

export type CreateVideoMediumInput = {
  readonly name: Scalars["String"];
  readonly url: Scalars["String"];
  readonly alias_name?: Maybe<Scalars["String"]>;
  readonly cover?: Maybe<Scalars["String"]>;
  readonly posters?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly video_id?: Maybe<Scalars["ID"]>;
};

export type CreateVoteInput = {
  readonly medium_id: Scalars["Float"];
  readonly status: VoteStatus;
  readonly owner_uid?: Maybe<Scalars["String"]>;
};

export type DeleteFollowInput = {
  readonly follower_uid?: Maybe<Scalars["ID"]>;
  readonly owner_uid: Scalars["ID"];
};

export type Follow = {
  readonly __typename?: "Follow";
  readonly follower: User;
  readonly owner: User;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
};

export type FollowEdge = {
  readonly __typename?: "FollowEdge";
  readonly cursor: Scalars["String"];
  readonly node: Follow;
};

export type FollowPageInfo = {
  readonly __typename?: "FollowPageInfo";
  readonly hasNextPage: Scalars["Boolean"];
  readonly hasPreviousPage: Scalars["Boolean"];
  readonly startCursor: Scalars["String"];
  readonly endCursor: Scalars["String"];
};

export type FollowPaginated = {
  readonly __typename?: "FollowPaginated";
  readonly edges?: Maybe<ReadonlyArray<FollowEdge>>;
  readonly nodes?: Maybe<ReadonlyArray<Follow>>;
  readonly pageInfo: FollowPageInfo;
  readonly totalCount: Scalars["Int"];
};

export type Medium = {
  readonly __typename?: "Medium";
  readonly id: Scalars["ID"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly alias_name?: Maybe<Scalars["String"]>;
  readonly cover?: Maybe<Scalars["String"]>;
  readonly posters?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly duration?: Maybe<Scalars["Float"]>;
  readonly preview_url?: Maybe<Scalars["String"]>;
  readonly url: Scalars["String"];
  readonly low_quality_url?: Maybe<Scalars["String"]>;
  readonly medium_quality_url?: Maybe<Scalars["String"]>;
  readonly high_quality_url?: Maybe<Scalars["String"]>;
  readonly super_quality_url?: Maybe<Scalars["String"]>;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
  readonly version: Scalars["Float"];
};

export type Movie = {
  readonly __typename?: "Movie";
  readonly id: Scalars["ID"];
  readonly title: Scalars["String"];
  readonly sub_title?: Maybe<Scalars["String"]>;
  readonly alias_title?: Maybe<Scalars["String"]>;
  readonly cover: Scalars["String"];
  readonly posters?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly about?: Maybe<Scalars["String"]>;
  readonly region: Region;
  readonly credits?: Maybe<ReadonlyArray<Character>>;
  readonly sources: ReadonlyArray<MovieMedium>;
  readonly author: User;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
};

export type MovieEdge = {
  readonly __typename?: "MovieEdge";
  readonly cursor: Scalars["String"];
  readonly node: Movie;
};

export type MovieMedium = {
  readonly __typename?: "MovieMedium";
  readonly id: Scalars["ID"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly alias_name?: Maybe<Scalars["String"]>;
  readonly cover?: Maybe<Scalars["String"]>;
  readonly posters?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly duration?: Maybe<Scalars["Float"]>;
  readonly preview_url?: Maybe<Scalars["String"]>;
  readonly url: Scalars["String"];
  readonly low_quality_url?: Maybe<Scalars["String"]>;
  readonly medium_quality_url?: Maybe<Scalars["String"]>;
  readonly high_quality_url?: Maybe<Scalars["String"]>;
  readonly super_quality_url?: Maybe<Scalars["String"]>;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
  readonly version: Scalars["Float"];
};

export type MoviePageInfo = {
  readonly __typename?: "MoviePageInfo";
  readonly hasNextPage: Scalars["Boolean"];
  readonly hasPreviousPage: Scalars["Boolean"];
  readonly startCursor: Scalars["String"];
  readonly endCursor: Scalars["String"];
};

export type MoviePaginated = {
  readonly __typename?: "MoviePaginated";
  readonly edges?: Maybe<ReadonlyArray<MovieEdge>>;
  readonly nodes?: Maybe<ReadonlyArray<Movie>>;
  readonly pageInfo: MoviePageInfo;
  readonly totalCount: Scalars["Int"];
};

export type Mutation = {
  readonly __typename?: "Mutation";
  readonly create_tag: Tag;
  readonly add_movie_to_tag: Scalars["Boolean"];
  readonly add_category_to_tag: Scalars["Boolean"];
  readonly create_movie: Movie;
  readonly update_movie: Movie;
  readonly add_mediums_to_movie: Movie;
  readonly create_category: Category;
  readonly delete_category: Scalars["Boolean"];
  readonly create_bullet: Bullet;
  readonly login: Scalars["String"];
  /** create user. */
  readonly create_user: User;
  /** create user with verif code. */
  readonly create_user_with_code: User;
  readonly send_register_email: Scalars["Boolean"];
  readonly update_user: User;
  readonly upload_file_oss: Scalars["String"];
  readonly create_topic: Topic;
  readonly create_review: Review;
  readonly create_playlist: Playlist;
  readonly add_movie_to_playlist: Scalars["Boolean"];
  readonly create_follow: Follow;
  readonly remove_follow: Follow;
  readonly create_video: Video;
  readonly add_mediums_to_video: Video;
  readonly create_or_update_vote: Vote;
};

export type MutationCreate_TagArgs = {
  tag: CreateTagInput;
};

export type MutationAdd_Movie_To_TagArgs = {
  tag_id: Scalars["Float"];
  movie_id: Scalars["Float"];
};

export type MutationAdd_Category_To_TagArgs = {
  tag_id: Scalars["Float"];
  category_id: Scalars["Float"];
};

export type MutationCreate_MovieArgs = {
  movie: CreateMovieInput;
};

export type MutationUpdate_MovieArgs = {
  movie: UpdateMovieInput;
  movie_id: Scalars["ID"];
};

export type MutationAdd_Mediums_To_MovieArgs = {
  movie_medium: CreateMovieMediumInput;
  movie_id: Scalars["ID"];
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

export type MutationCreate_VideoArgs = {
  video: CreateVideoInput;
};

export type MutationAdd_Mediums_To_VideoArgs = {
  video_medium: CreateVideoMediumInput;
  video_id: Scalars["ID"];
};

export type MutationCreate_Or_Update_VoteArgs = {
  vote: CreateVoteInput;
};

export type PaginatedQuery = {
  readonly first?: Maybe<Scalars["Int"]>;
  readonly after?: Maybe<Scalars["String"]>;
  readonly last?: Maybe<Scalars["Int"]>;
  readonly before?: Maybe<Scalars["String"]>;
};

export type PlatformAuthWay = {
  readonly __typename?: "PlatformAuthWay";
  readonly http_domain: Scalars["String"];
  readonly platform: Scalars["String"];
  readonly url: Scalars["String"];
};

export type Playlist = {
  readonly __typename?: "Playlist";
  readonly id: Scalars["ID"];
  readonly title: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
  readonly cover?: Maybe<Scalars["String"]>;
  readonly movies?: Maybe<ReadonlyArray<Movie>>;
  readonly movies_count?: Maybe<Scalars["Float"]>;
  readonly author: User;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
};

export type PlaylistEdge = {
  readonly __typename?: "PlaylistEdge";
  readonly cursor: Scalars["String"];
  readonly node: Playlist;
};

export type PlaylistPageInfo = {
  readonly __typename?: "PlaylistPageInfo";
  readonly hasNextPage: Scalars["Boolean"];
  readonly hasPreviousPage: Scalars["Boolean"];
  readonly startCursor: Scalars["String"];
  readonly endCursor: Scalars["String"];
};

export type PlaylistPaginated = {
  readonly __typename?: "PlaylistPaginated";
  readonly edges?: Maybe<ReadonlyArray<PlaylistEdge>>;
  readonly nodes?: Maybe<ReadonlyArray<Playlist>>;
  readonly pageInfo: PlaylistPageInfo;
  readonly totalCount: Scalars["Int"];
};

export type Query = {
  readonly __typename?: "Query";
  readonly movie: Movie;
  readonly movies_paginated: MoviePaginated;
  readonly user_movies_paginated: MoviePaginated;
  readonly me: User;
  readonly platform_auth_way: ReadonlyArray<PlatformAuthWay>;
  /** find username exit. */
  readonly has_username: Scalars["Boolean"];
  /** find user by uid or username. */
  readonly user: User;
  /** all user with paginated. */
  readonly users_paginated: UserPaginated;
  readonly current_topic: Topic;
  readonly movie_urges: ReadonlyArray<Movie>;
  readonly movie_urges_by_movie: ReadonlyArray<Movie>;
  readonly user_urges: ReadonlyArray<User>;
  readonly movie_next_urges_by_movie: ReadonlyArray<Movie>;
  readonly reviews_paginated: ReviewPaginated;
  readonly playlists_paginated: PlaylistPaginated;
  readonly playlist: Playlist;
  readonly follows: ReadonlyArray<Follow>;
  readonly follows_paginated: FollowPaginated;
  readonly follows_total: Scalars["Int"];
  readonly fans: ReadonlyArray<Follow>;
  readonly fans_paginated: FollowPaginated;
  readonly fans_total: Scalars["Int"];
  readonly is_following: Scalars["Boolean"];
  readonly video: Video;
  readonly videos_paginated: VideoPaginated;
  readonly vote: Vote;
  readonly medium_vote_count: Scalars["Int"];
};

export type QueryMovieArgs = {
  id: Scalars["ID"];
};

export type QueryMovies_PaginatedArgs = {
  query?: Maybe<PaginatedQuery>;
};

export type QueryUser_Movies_PaginatedArgs = {
  query?: Maybe<PaginatedQuery>;
  author_username: Scalars["String"];
};

export type QueryHas_UsernameArgs = {
  username: Scalars["String"];
};

export type QueryUserArgs = {
  username?: Maybe<Scalars["String"]>;
  uid?: Maybe<Scalars["String"]>;
};

export type QueryUsers_PaginatedArgs = {
  query?: Maybe<PaginatedQuery>;
};

export type QueryMovie_Urges_By_MovieArgs = {
  movie_id: Scalars["ID"];
};

export type QueryMovie_Next_Urges_By_MovieArgs = {
  movie_id: Scalars["ID"];
};

export type QueryReviews_PaginatedArgs = {
  query?: Maybe<PaginatedQuery>;
  type_id?: Maybe<Scalars["ID"]>;
  type?: Maybe<ReviewMedium>;
};

export type QueryPlaylists_PaginatedArgs = {
  author_username?: Maybe<Scalars["String"]>;
  author_uid?: Maybe<Scalars["String"]>;
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

export type QueryVideoArgs = {
  id: Scalars["ID"];
};

export type QueryVideos_PaginatedArgs = {
  query?: Maybe<PaginatedQuery>;
};

export type QueryVoteArgs = {
  medium_id: Scalars["Float"];
};

export type QueryMedium_Vote_CountArgs = {
  status: Scalars["String"];
  medium_id: Scalars["Float"];
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
  readonly __typename?: "Review";
  readonly id: Scalars["ID"];
  readonly content: Scalars["String"];
  readonly author: User;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
};

export type ReviewEdge = {
  readonly __typename?: "ReviewEdge";
  readonly cursor: Scalars["String"];
  readonly node: Review;
};

export enum ReviewMedium {
  Medium = "MEDIUM",
  Movie = "MOVIE"
}

export type ReviewPageInfo = {
  readonly __typename?: "ReviewPageInfo";
  readonly hasNextPage: Scalars["Boolean"];
  readonly hasPreviousPage: Scalars["Boolean"];
  readonly startCursor: Scalars["String"];
  readonly endCursor: Scalars["String"];
};

export type ReviewPaginated = {
  readonly __typename?: "ReviewPaginated";
  readonly edges?: Maybe<ReadonlyArray<ReviewEdge>>;
  readonly nodes?: Maybe<ReadonlyArray<Review>>;
  readonly pageInfo: ReviewPageInfo;
  readonly totalCount: Scalars["Int"];
};

export type Subscription = {
  readonly __typename?: "Subscription";
  readonly user_created: User;
  readonly review_created: Review;
};

export type SubscriptionReview_CreatedArgs = {
  type_id: Scalars["ID"];
  type: ReviewMedium;
};

export type Tag = {
  readonly __typename?: "Tag";
  readonly id: Scalars["ID"];
  readonly label: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
  readonly movies?: Maybe<ReadonlyArray<Movie>>;
  readonly categories?: Maybe<ReadonlyArray<Category>>;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
};

export type Topic = {
  readonly __typename?: "Topic";
  readonly id: Scalars["ID"];
  readonly title: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
  readonly top_movie?: Maybe<Movie>;
  readonly top_movies?: Maybe<ReadonlyArray<Movie>>;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
};

export type UpdateMovieInput = {
  readonly sub_title?: Maybe<Scalars["String"]>;
  readonly alias_title?: Maybe<Scalars["String"]>;
  readonly posters?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly about?: Maybe<Scalars["String"]>;
  readonly region?: Maybe<Scalars["String"]>;
  readonly credits?: Maybe<ReadonlyArray<CreateCharacterInput>>;
  readonly sources?: Maybe<ReadonlyArray<CreateMovieMediumInput>>;
  readonly title?: Maybe<Scalars["String"]>;
  readonly cover?: Maybe<Scalars["String"]>;
};

export type UpdateUserInput = {
  readonly nickname?: Maybe<Scalars["String"]>;
  readonly avatar?: Maybe<Scalars["String"]>;
  readonly mobile?: Maybe<Scalars["String"]>;
  readonly address?: Maybe<Scalars["String"]>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly password?: Maybe<Scalars["String"]>;
};

export type User = {
  readonly __typename?: "User";
  readonly address?: Maybe<Scalars["String"]>;
  readonly avatar: Scalars["String"];
  readonly create_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly email?: Maybe<Scalars["String"]>;
  readonly mobile?: Maybe<Scalars["String"]>;
  readonly nickname?: Maybe<Scalars["String"]>;
  readonly uid: Scalars["ID"];
  readonly update_at: Scalars["Date"];
  readonly username: Scalars["String"];
};

export type UserEdge = {
  readonly __typename?: "UserEdge";
  readonly cursor: Scalars["String"];
  readonly node: User;
};

export type UserPageInfo = {
  readonly __typename?: "UserPageInfo";
  readonly hasNextPage: Scalars["Boolean"];
  readonly hasPreviousPage: Scalars["Boolean"];
  readonly startCursor: Scalars["String"];
  readonly endCursor: Scalars["String"];
};

export type UserPaginated = {
  readonly __typename?: "UserPaginated";
  readonly edges?: Maybe<ReadonlyArray<UserEdge>>;
  readonly nodes?: Maybe<ReadonlyArray<User>>;
  readonly pageInfo: UserPageInfo;
  readonly totalCount: Scalars["Int"];
};

export type Video = {
  readonly __typename?: "Video";
  readonly id: Scalars["ID"];
  readonly title: Scalars["String"];
  readonly sub_title?: Maybe<Scalars["String"]>;
  readonly alias_title?: Maybe<Scalars["String"]>;
  readonly cover: Scalars["String"];
  readonly posters?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly sources: ReadonlyArray<VideoMedium>;
  readonly author: User;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
};

export type VideoEdge = {
  readonly __typename?: "VideoEdge";
  readonly cursor: Scalars["String"];
  readonly node: Video;
};

export type VideoMedium = {
  readonly __typename?: "VideoMedium";
  readonly id: Scalars["ID"];
  readonly name?: Maybe<Scalars["String"]>;
  readonly alias_name?: Maybe<Scalars["String"]>;
  readonly cover?: Maybe<Scalars["String"]>;
  readonly posters?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly duration?: Maybe<Scalars["Float"]>;
  readonly preview_url?: Maybe<Scalars["String"]>;
  readonly url: Scalars["String"];
  readonly low_quality_url?: Maybe<Scalars["String"]>;
  readonly medium_quality_url?: Maybe<Scalars["String"]>;
  readonly high_quality_url?: Maybe<Scalars["String"]>;
  readonly super_quality_url?: Maybe<Scalars["String"]>;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
  readonly version: Scalars["Float"];
};

export type VideoPageInfo = {
  readonly __typename?: "VideoPageInfo";
  readonly hasNextPage: Scalars["Boolean"];
  readonly hasPreviousPage: Scalars["Boolean"];
  readonly startCursor: Scalars["String"];
  readonly endCursor: Scalars["String"];
};

export type VideoPaginated = {
  readonly __typename?: "VideoPaginated";
  readonly edges?: Maybe<ReadonlyArray<VideoEdge>>;
  readonly nodes?: Maybe<ReadonlyArray<Video>>;
  readonly pageInfo: VideoPageInfo;
  readonly totalCount: Scalars["Int"];
};

export type Vote = {
  readonly __typename?: "Vote";
  readonly id: Scalars["ID"];
  readonly status: VoteStatus;
  readonly owner: User;
  readonly medium: Medium;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
};

export enum VoteStatus {
  Likd = "LIKD",
  Dislike = "DISLIKE",
  Default = "DEFAULT"
}

export type LoginMutationVariables = Exact<{
  username: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = {
  readonly __typename?: "Mutation";
  readonly login: string;
};

export type SendRegisterEmailMutationVariables = Exact<{
  email: Scalars["String"];
}>;

export type SendRegisterEmailMutation = {
  readonly __typename?: "Mutation";
  readonly send_register_email: boolean;
};

export type CreateUserWithCodeMutationVariables = Exact<{
  user: CreateUserWithCodeInput;
}>;

export type CreateUserWithCodeMutation = {
  readonly __typename?: "Mutation";
  readonly create_user_with_code: {
    readonly __typename?: "User";
    readonly username: string;
    readonly avatar: string;
  };
};

export type UpdateUserMutationVariables = Exact<{
  user: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  readonly __typename?: "Mutation";
  readonly update_user: {
    readonly __typename?: "User";
    readonly uid: number | string;
    readonly username: string;
    readonly email?: Maybe<string>;
    readonly nickname?: Maybe<string>;
    readonly avatar: string;
    readonly mobile?: Maybe<string>;
    readonly address?: Maybe<string>;
    readonly description?: Maybe<string>;
    readonly create_at: any;
    readonly update_at: any;
  };
};

export type CreateMovieMutationVariables = Exact<{
  movie: CreateMovieInput;
}>;

export type CreateMovieMutation = {
  readonly __typename?: "Mutation";
  readonly create_movie: {
    readonly __typename?: "Movie";
    readonly create_at: any;
  };
};

export type UpdateMovieMutationVariables = Exact<{
  movie: UpdateMovieInput;
  movie_id: Scalars["ID"];
}>;

export type UpdateMovieMutation = {
  readonly __typename?: "Mutation";
  readonly update_movie: {
    readonly __typename?: "Movie";
    readonly create_at: any;
  };
};

export type AddMediumsToMovieMutationVariables = Exact<{
  movie_id: Scalars["ID"];
  movie_medium: CreateMovieMediumInput;
}>;

export type AddMediumsToMovieMutation = {
  readonly __typename?: "Mutation";
  readonly add_mediums_to_movie: {
    readonly __typename?: "Movie";
    readonly sources: ReadonlyArray<{
      readonly __typename?: "MovieMedium";
      readonly name?: Maybe<string>;
    }>;
  };
};

export type UploadFileOssMutationVariables = Exact<{
  file: Scalars["Upload"];
}>;

export type UploadFileOssMutation = {
  readonly __typename?: "Mutation";
  readonly upload_file_oss: string;
};

export type CreateFollowMutationVariables = Exact<{
  follow: CreateFollowInput;
}>;

export type CreateFollowMutation = {
  readonly __typename?: "Mutation";
  readonly create_follow: {
    readonly __typename?: "Follow";
    readonly create_at: any;
  };
};

export type RemoveFollowMutationVariables = Exact<{
  follow: DeleteFollowInput;
}>;

export type RemoveFollowMutation = {
  readonly __typename?: "Mutation";
  readonly remove_follow: {
    readonly __typename?: "Follow";
    readonly create_at: any;
  };
};

export type PlatformAuthWayQueryVariables = Exact<{ [key: string]: never }>;

export type PlatformAuthWayQuery = {
  readonly __typename?: "Query";
  readonly platform_auth_way: ReadonlyArray<{
    readonly __typename?: "PlatformAuthWay";
    readonly platform: string;
    readonly url: string;
    readonly http_domain: string;
  }>;
};

export type HasUsernameQueryVariables = Exact<{
  username: Scalars["String"];
}>;

export type HasUsernameQuery = {
  readonly __typename?: "Query";
  readonly has_username: boolean;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  readonly __typename?: "Query";
  readonly me: {
    readonly __typename?: "User";
    readonly uid: number | string;
    readonly username: string;
    readonly email?: Maybe<string>;
    readonly nickname?: Maybe<string>;
    readonly avatar: string;
    readonly mobile?: Maybe<string>;
    readonly address?: Maybe<string>;
    readonly description?: Maybe<string>;
    readonly create_at: any;
    readonly update_at: any;
  };
};

export type CurrentTopicQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentTopicQuery = {
  readonly __typename?: "Query";
  readonly current_topic: {
    readonly __typename?: "Topic";
    readonly id: number | string;
    readonly title: string;
    readonly description?: Maybe<string>;
    readonly top_movies?: Maybe<
      ReadonlyArray<{
        readonly __typename?: "Movie";
        readonly id: number | string;
        readonly description?: Maybe<string>;
        readonly title: string;
        readonly sub_title?: Maybe<string>;
        readonly create_at: any;
        readonly update_at: any;
        readonly cover: string;
        readonly posters?: Maybe<ReadonlyArray<string>>;
        readonly author: {
          readonly __typename?: "User";
          readonly uid: number | string;
          readonly avatar: string;
          readonly nickname?: Maybe<string>;
          readonly username: string;
          readonly description?: Maybe<string>;
        };
      }>
    >;
    readonly top_movie?: Maybe<{
      readonly __typename?: "Movie";
      readonly id: number | string;
      readonly description?: Maybe<string>;
      readonly title: string;
      readonly sub_title?: Maybe<string>;
      readonly create_at: any;
      readonly update_at: any;
      readonly cover: string;
      readonly posters?: Maybe<ReadonlyArray<string>>;
      readonly author: {
        readonly __typename?: "User";
        readonly uid: number | string;
        readonly avatar: string;
        readonly nickname?: Maybe<string>;
        readonly username: string;
        readonly description?: Maybe<string>;
      };
    }>;
  };
};

export type MovieUrgesQueryVariables = Exact<{ [key: string]: never }>;

export type MovieUrgesQuery = {
  readonly __typename?: "Query";
  readonly movie_urges: ReadonlyArray<{
    readonly __typename?: "Movie";
    readonly id: number | string;
    readonly description?: Maybe<string>;
    readonly title: string;
    readonly sub_title?: Maybe<string>;
    readonly create_at: any;
    readonly update_at: any;
    readonly cover: string;
    readonly posters?: Maybe<ReadonlyArray<string>>;
    readonly author: {
      readonly __typename?: "User";
      readonly uid: number | string;
      readonly avatar: string;
      readonly nickname?: Maybe<string>;
      readonly username: string;
      readonly description?: Maybe<string>;
    };
  }>;
};

export type UserUrgesQueryVariables = Exact<{ [key: string]: never }>;

export type UserUrgesQuery = {
  readonly __typename?: "Query";
  readonly user_urges: ReadonlyArray<{
    readonly __typename?: "User";
    readonly nickname?: Maybe<string>;
    readonly avatar: string;
    readonly username: string;
    readonly uid: number | string;
    readonly description?: Maybe<string>;
  }>;
};

export type MovieQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type MovieQuery = {
  readonly __typename?: "Query";
  readonly movie: {
    readonly __typename?: "Movie";
    readonly alias_title?: Maybe<string>;
    readonly region: Region;
    readonly id: number | string;
    readonly description?: Maybe<string>;
    readonly title: string;
    readonly sub_title?: Maybe<string>;
    readonly create_at: any;
    readonly update_at: any;
    readonly cover: string;
    readonly posters?: Maybe<ReadonlyArray<string>>;
    readonly credits?: Maybe<
      ReadonlyArray<{
        readonly __typename?: "Character";
        readonly avatar: string;
        readonly name: string;
        readonly description?: Maybe<string>;
      }>
    >;
    readonly author: {
      readonly __typename?: "User";
      readonly uid: number | string;
      readonly avatar: string;
      readonly nickname?: Maybe<string>;
      readonly username: string;
      readonly description?: Maybe<string>;
    };
    readonly sources: ReadonlyArray<{
      readonly __typename?: "MovieMedium";
      readonly id: number | string;
      readonly url: string;
      readonly super_quality_url?: Maybe<string>;
      readonly preview_url?: Maybe<string>;
      readonly posters?: Maybe<ReadonlyArray<string>>;
      readonly name?: Maybe<string>;
      readonly medium_quality_url?: Maybe<string>;
      readonly low_quality_url?: Maybe<string>;
      readonly high_quality_url?: Maybe<string>;
      readonly duration?: Maybe<number>;
      readonly description?: Maybe<string>;
      readonly alias_name?: Maybe<string>;
      readonly create_at: any;
      readonly update_at: any;
    }>;
  };
};

export type MoviesPaginatedQueryVariables = Exact<{
  query?: Maybe<PaginatedQuery>;
}>;

export type MoviesPaginatedQuery = {
  readonly __typename?: "Query";
  readonly movies_paginated: {
    readonly __typename?: "MoviePaginated";
    readonly totalCount: number;
    readonly pageInfo: {
      readonly __typename?: "MoviePageInfo";
      readonly hasNextPage: boolean;
      readonly endCursor: string;
    };
    readonly edges?: Maybe<
      ReadonlyArray<{
        readonly __typename?: "MovieEdge";
        readonly cursor: string;
        readonly node: {
          readonly __typename?: "Movie";
          readonly id: number | string;
          readonly description?: Maybe<string>;
          readonly title: string;
          readonly sub_title?: Maybe<string>;
          readonly create_at: any;
          readonly update_at: any;
          readonly cover: string;
          readonly posters?: Maybe<ReadonlyArray<string>>;
          readonly author: {
            readonly __typename?: "User";
            readonly uid: number | string;
            readonly avatar: string;
            readonly nickname?: Maybe<string>;
            readonly username: string;
            readonly description?: Maybe<string>;
          };
        };
      }>
    >;
  };
};

export type UserMoviesPaginatedQueryVariables = Exact<{
  author_username: Scalars["String"];
  query?: Maybe<PaginatedQuery>;
}>;

export type UserMoviesPaginatedQuery = {
  readonly __typename?: "Query";
  readonly user_movies_paginated: {
    readonly __typename?: "MoviePaginated";
    readonly totalCount: number;
    readonly pageInfo: {
      readonly __typename?: "MoviePageInfo";
      readonly hasNextPage: boolean;
      readonly endCursor: string;
    };
    readonly edges?: Maybe<
      ReadonlyArray<{
        readonly __typename?: "MovieEdge";
        readonly cursor: string;
        readonly node: {
          readonly __typename?: "Movie";
          readonly id: number | string;
          readonly description?: Maybe<string>;
          readonly title: string;
          readonly sub_title?: Maybe<string>;
          readonly create_at: any;
          readonly update_at: any;
          readonly cover: string;
          readonly posters?: Maybe<ReadonlyArray<string>>;
          readonly author: {
            readonly __typename?: "User";
            readonly uid: number | string;
            readonly avatar: string;
            readonly nickname?: Maybe<string>;
            readonly username: string;
            readonly description?: Maybe<string>;
          };
        };
      }>
    >;
  };
};

export type MovieUrgesByMovieQueryVariables = Exact<{
  movie_id: Scalars["ID"];
}>;

export type MovieUrgesByMovieQuery = {
  readonly __typename?: "Query";
  readonly movie_urges_by_movie: ReadonlyArray<{
    readonly __typename?: "Movie";
    readonly id: number | string;
    readonly description?: Maybe<string>;
    readonly title: string;
    readonly sub_title?: Maybe<string>;
    readonly create_at: any;
    readonly update_at: any;
    readonly cover: string;
    readonly posters?: Maybe<ReadonlyArray<string>>;
    readonly author: {
      readonly __typename?: "User";
      readonly uid: number | string;
      readonly avatar: string;
      readonly nickname?: Maybe<string>;
      readonly username: string;
      readonly description?: Maybe<string>;
    };
  }>;
};

export type MovieNextUrgesByMovieQueryVariables = Exact<{
  movie_id: Scalars["ID"];
}>;

export type MovieNextUrgesByMovieQuery = {
  readonly __typename?: "Query";
  readonly movie_next_urges_by_movie: ReadonlyArray<{
    readonly __typename?: "Movie";
    readonly id: number | string;
    readonly description?: Maybe<string>;
    readonly title: string;
    readonly sub_title?: Maybe<string>;
    readonly create_at: any;
    readonly update_at: any;
    readonly cover: string;
    readonly posters?: Maybe<ReadonlyArray<string>>;
    readonly author: {
      readonly __typename?: "User";
      readonly uid: number | string;
      readonly avatar: string;
      readonly nickname?: Maybe<string>;
      readonly username: string;
      readonly description?: Maybe<string>;
    };
  }>;
};

export type PlaylistsPaginatedQueryVariables = Exact<{
  query?: Maybe<PaginatedQuery>;
  author_uid?: Maybe<Scalars["String"]>;
  author_username?: Maybe<Scalars["String"]>;
}>;

export type PlaylistsPaginatedQuery = {
  readonly __typename?: "Query";
  readonly playlists_paginated: {
    readonly __typename?: "PlaylistPaginated";
    readonly totalCount: number;
    readonly pageInfo: {
      readonly __typename?: "PlaylistPageInfo";
      readonly hasNextPage: boolean;
      readonly endCursor: string;
    };
    readonly edges?: Maybe<
      ReadonlyArray<{
        readonly __typename?: "PlaylistEdge";
        readonly cursor: string;
        readonly node: {
          readonly __typename?: "Playlist";
          readonly title: string;
          readonly description?: Maybe<string>;
          readonly cover?: Maybe<string>;
          readonly create_at: any;
        };
      }>
    >;
  };
};

export type IsFollowingQueryVariables = Exact<{
  owner_uid: Scalars["String"];
  follower_uid?: Maybe<Scalars["String"]>;
}>;

export type IsFollowingQuery = {
  readonly __typename?: "Query";
  readonly is_following: boolean;
};

export type UserQueryVariables = Exact<{
  uid?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
}>;

export type UserQuery = {
  readonly __typename?: "Query";
  readonly user: {
    readonly __typename?: "User";
    readonly uid: number | string;
    readonly username: string;
    readonly email?: Maybe<string>;
    readonly nickname?: Maybe<string>;
    readonly avatar: string;
    readonly mobile?: Maybe<string>;
    readonly address?: Maybe<string>;
    readonly description?: Maybe<string>;
    readonly create_at: any;
    readonly update_at: any;
    readonly delete_at?: Maybe<any>;
  };
};

export type ReviewCreatedSubscriptionVariables = Exact<{
  type: ReviewMedium;
  type_id: Scalars["ID"];
}>;

export type ReviewCreatedSubscription = {
  readonly __typename?: "Subscription";
  readonly review_created: {
    readonly __typename?: "Review";
    readonly content: string;
    readonly create_at: any;
    readonly author: {
      readonly __typename?: "User";
      readonly nickname?: Maybe<string>;
      readonly avatar: string;
    };
  };
};

export const MeFragmentDoc = gql`
  fragment Me on User {
    uid
    username
    email
    nickname
    avatar
    mobile
    address
    description
    create_at
    update_at
  }
`;
export const AuthorFragmentDoc = gql`
  fragment Author on User {
    uid
    avatar
    nickname
    username
    description
  }
`;
export const MovieFragmentDoc = gql`
  fragment Movie on Movie {
    id
    description
    title
    sub_title
    create_at
    update_at
    cover
    posters
  }
`;
export const MovieSourceFragmentDoc = gql`
  fragment MovieSource on MovieMedium {
    id
    url
    super_quality_url
    preview_url
    posters
    name
    medium_quality_url
    low_quality_url
    high_quality_url
    duration
    description
    alias_name
    create_at
    update_at
  }
`;
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
export const UpdateUserDocument = gql`
  mutation updateUser($user: UpdateUserInput!) {
    update_user(user: $user) {
      ...Me
    }
  }
  ${MeFragmentDoc}
`;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UpdateUserDocument, baseOptions);
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<
  UpdateUserMutation
>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const CreateMovieDocument = gql`
  mutation createMovie($movie: CreateMovieInput!) {
    create_movie(movie: $movie) {
      create_at
    }
  }
`;
export type CreateMovieMutationFn = ApolloReactCommon.MutationFunction<
  CreateMovieMutation,
  CreateMovieMutationVariables
>;

/**
 * __useCreateMovieMutation__
 *
 * To run a mutation, you first call `useCreateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMovieMutation, { data, loading, error }] = useCreateMovieMutation({
 *   variables: {
 *      movie: // value for 'movie'
 *   },
 * });
 */
export function useCreateMovieMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateMovieMutation,
    CreateMovieMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateMovieMutation,
    CreateMovieMutationVariables
  >(CreateMovieDocument, baseOptions);
}
export type CreateMovieMutationHookResult = ReturnType<
  typeof useCreateMovieMutation
>;
export type CreateMovieMutationResult = ApolloReactCommon.MutationResult<
  CreateMovieMutation
>;
export type CreateMovieMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateMovieMutation,
  CreateMovieMutationVariables
>;
export const UpdateMovieDocument = gql`
  mutation updateMovie($movie: UpdateMovieInput!, $movie_id: ID!) {
    update_movie(movie_id: $movie_id, movie: $movie) {
      create_at
    }
  }
`;
export type UpdateMovieMutationFn = ApolloReactCommon.MutationFunction<
  UpdateMovieMutation,
  UpdateMovieMutationVariables
>;

/**
 * __useUpdateMovieMutation__
 *
 * To run a mutation, you first call `useUpdateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMovieMutation, { data, loading, error }] = useUpdateMovieMutation({
 *   variables: {
 *      movie: // value for 'movie'
 *      movie_id: // value for 'movie_id'
 *   },
 * });
 */
export function useUpdateMovieMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateMovieMutation,
    UpdateMovieMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateMovieMutation,
    UpdateMovieMutationVariables
  >(UpdateMovieDocument, baseOptions);
}
export type UpdateMovieMutationHookResult = ReturnType<
  typeof useUpdateMovieMutation
>;
export type UpdateMovieMutationResult = ApolloReactCommon.MutationResult<
  UpdateMovieMutation
>;
export type UpdateMovieMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateMovieMutation,
  UpdateMovieMutationVariables
>;
export const AddMediumsToMovieDocument = gql`
  mutation addMediumsToMovie(
    $movie_id: ID!
    $movie_medium: CreateMovieMediumInput!
  ) {
    add_mediums_to_movie(movie_id: $movie_id, movie_medium: $movie_medium) {
      sources {
        name
      }
    }
  }
`;
export type AddMediumsToMovieMutationFn = ApolloReactCommon.MutationFunction<
  AddMediumsToMovieMutation,
  AddMediumsToMovieMutationVariables
>;

/**
 * __useAddMediumsToMovieMutation__
 *
 * To run a mutation, you first call `useAddMediumsToMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMediumsToMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMediumsToMovieMutation, { data, loading, error }] = useAddMediumsToMovieMutation({
 *   variables: {
 *      movie_id: // value for 'movie_id'
 *      movie_medium: // value for 'movie_medium'
 *   },
 * });
 */
export function useAddMediumsToMovieMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddMediumsToMovieMutation,
    AddMediumsToMovieMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddMediumsToMovieMutation,
    AddMediumsToMovieMutationVariables
  >(AddMediumsToMovieDocument, baseOptions);
}
export type AddMediumsToMovieMutationHookResult = ReturnType<
  typeof useAddMediumsToMovieMutation
>;
export type AddMediumsToMovieMutationResult = ApolloReactCommon.MutationResult<
  AddMediumsToMovieMutation
>;
export type AddMediumsToMovieMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddMediumsToMovieMutation,
  AddMediumsToMovieMutationVariables
>;
export const UploadFileOssDocument = gql`
  mutation uploadFileOss($file: Upload!) {
    upload_file_oss(file: $file)
  }
`;
export type UploadFileOssMutationFn = ApolloReactCommon.MutationFunction<
  UploadFileOssMutation,
  UploadFileOssMutationVariables
>;

/**
 * __useUploadFileOssMutation__
 *
 * To run a mutation, you first call `useUploadFileOssMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileOssMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileOssMutation, { data, loading, error }] = useUploadFileOssMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadFileOssMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UploadFileOssMutation,
    UploadFileOssMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UploadFileOssMutation,
    UploadFileOssMutationVariables
  >(UploadFileOssDocument, baseOptions);
}
export type UploadFileOssMutationHookResult = ReturnType<
  typeof useUploadFileOssMutation
>;
export type UploadFileOssMutationResult = ApolloReactCommon.MutationResult<
  UploadFileOssMutation
>;
export type UploadFileOssMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UploadFileOssMutation,
  UploadFileOssMutationVariables
>;
export const CreateFollowDocument = gql`
  mutation createFollow($follow: CreateFollowInput!) {
    create_follow(follow: $follow) {
      create_at
    }
  }
`;
export type CreateFollowMutationFn = ApolloReactCommon.MutationFunction<
  CreateFollowMutation,
  CreateFollowMutationVariables
>;

/**
 * __useCreateFollowMutation__
 *
 * To run a mutation, you first call `useCreateFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFollowMutation, { data, loading, error }] = useCreateFollowMutation({
 *   variables: {
 *      follow: // value for 'follow'
 *   },
 * });
 */
export function useCreateFollowMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateFollowMutation,
    CreateFollowMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateFollowMutation,
    CreateFollowMutationVariables
  >(CreateFollowDocument, baseOptions);
}
export type CreateFollowMutationHookResult = ReturnType<
  typeof useCreateFollowMutation
>;
export type CreateFollowMutationResult = ApolloReactCommon.MutationResult<
  CreateFollowMutation
>;
export type CreateFollowMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateFollowMutation,
  CreateFollowMutationVariables
>;
export const RemoveFollowDocument = gql`
  mutation removeFollow($follow: DeleteFollowInput!) {
    remove_follow(follow: $follow) {
      create_at
    }
  }
`;
export type RemoveFollowMutationFn = ApolloReactCommon.MutationFunction<
  RemoveFollowMutation,
  RemoveFollowMutationVariables
>;

/**
 * __useRemoveFollowMutation__
 *
 * To run a mutation, you first call `useRemoveFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFollowMutation, { data, loading, error }] = useRemoveFollowMutation({
 *   variables: {
 *      follow: // value for 'follow'
 *   },
 * });
 */
export function useRemoveFollowMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RemoveFollowMutation,
    RemoveFollowMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    RemoveFollowMutation,
    RemoveFollowMutationVariables
  >(RemoveFollowDocument, baseOptions);
}
export type RemoveFollowMutationHookResult = ReturnType<
  typeof useRemoveFollowMutation
>;
export type RemoveFollowMutationResult = ApolloReactCommon.MutationResult<
  RemoveFollowMutation
>;
export type RemoveFollowMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveFollowMutation,
  RemoveFollowMutationVariables
>;
export const PlatformAuthWayDocument = gql`
  query platformAuthWay {
    platform_auth_way {
      platform
      url
      http_domain @client
    }
  }
`;

/**
 * __usePlatformAuthWayQuery__
 *
 * To run a query within a React component, call `usePlatformAuthWayQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlatformAuthWayQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlatformAuthWayQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlatformAuthWayQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    PlatformAuthWayQuery,
    PlatformAuthWayQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    PlatformAuthWayQuery,
    PlatformAuthWayQueryVariables
  >(PlatformAuthWayDocument, baseOptions);
}
export function usePlatformAuthWayLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PlatformAuthWayQuery,
    PlatformAuthWayQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    PlatformAuthWayQuery,
    PlatformAuthWayQueryVariables
  >(PlatformAuthWayDocument, baseOptions);
}
export type PlatformAuthWayQueryHookResult = ReturnType<
  typeof usePlatformAuthWayQuery
>;
export type PlatformAuthWayLazyQueryHookResult = ReturnType<
  typeof usePlatformAuthWayLazyQuery
>;
export type PlatformAuthWayQueryResult = ApolloReactCommon.QueryResult<
  PlatformAuthWayQuery,
  PlatformAuthWayQueryVariables
>;
export const HasUsernameDocument = gql`
  query hasUsername($username: String!) {
    has_username(username: $username)
  }
`;

/**
 * __useHasUsernameQuery__
 *
 * To run a query within a React component, call `useHasUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useHasUsernameQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    HasUsernameQuery,
    HasUsernameQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<HasUsernameQuery, HasUsernameQueryVariables>(
    HasUsernameDocument,
    baseOptions
  );
}
export function useHasUsernameLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    HasUsernameQuery,
    HasUsernameQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    HasUsernameQuery,
    HasUsernameQueryVariables
  >(HasUsernameDocument, baseOptions);
}
export type HasUsernameQueryHookResult = ReturnType<typeof useHasUsernameQuery>;
export type HasUsernameLazyQueryHookResult = ReturnType<
  typeof useHasUsernameLazyQuery
>;
export type HasUsernameQueryResult = ApolloReactCommon.QueryResult<
  HasUsernameQuery,
  HasUsernameQueryVariables
>;
export const MeDocument = gql`
  query me {
    me {
      ...Me
    }
  }
  ${MeFragmentDoc}
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions
  );
}
export function useMeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions
  );
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<
  MeQuery,
  MeQueryVariables
>;
export const CurrentTopicDocument = gql`
  query currentTopic {
    current_topic {
      id
      title
      description
      top_movies {
        ...Movie
        author {
          ...Author
        }
      }
      top_movie {
        ...Movie
        author {
          ...Author
        }
      }
    }
  }
  ${MovieFragmentDoc}
  ${AuthorFragmentDoc}
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
      ...Movie
      author {
        ...Author
      }
    }
  }
  ${MovieFragmentDoc}
  ${AuthorFragmentDoc}
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
      username
      uid
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
      credits {
        avatar
        name
        description
      }
      author {
        ...Author
      }
      alias_title
      region
      ...Movie
      sources {
        ...MovieSource
      }
    }
  }
  ${AuthorFragmentDoc}
  ${MovieFragmentDoc}
  ${MovieSourceFragmentDoc}
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
          ...Movie
          author {
            ...Author
          }
        }
      }
    }
  }
  ${MovieFragmentDoc}
  ${AuthorFragmentDoc}
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
export const UserMoviesPaginatedDocument = gql`
  query userMoviesPaginated($author_username: String!, $query: PaginatedQuery) {
    user_movies_paginated(author_username: $author_username, query: $query) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...Movie
          author {
            ...Author
          }
        }
      }
    }
  }
  ${MovieFragmentDoc}
  ${AuthorFragmentDoc}
`;

/**
 * __useUserMoviesPaginatedQuery__
 *
 * To run a query within a React component, call `useUserMoviesPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserMoviesPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserMoviesPaginatedQuery({
 *   variables: {
 *      author_username: // value for 'author_username'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useUserMoviesPaginatedQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    UserMoviesPaginatedQuery,
    UserMoviesPaginatedQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    UserMoviesPaginatedQuery,
    UserMoviesPaginatedQueryVariables
  >(UserMoviesPaginatedDocument, baseOptions);
}
export function useUserMoviesPaginatedLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    UserMoviesPaginatedQuery,
    UserMoviesPaginatedQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    UserMoviesPaginatedQuery,
    UserMoviesPaginatedQueryVariables
  >(UserMoviesPaginatedDocument, baseOptions);
}
export type UserMoviesPaginatedQueryHookResult = ReturnType<
  typeof useUserMoviesPaginatedQuery
>;
export type UserMoviesPaginatedLazyQueryHookResult = ReturnType<
  typeof useUserMoviesPaginatedLazyQuery
>;
export type UserMoviesPaginatedQueryResult = ApolloReactCommon.QueryResult<
  UserMoviesPaginatedQuery,
  UserMoviesPaginatedQueryVariables
>;
export const MovieUrgesByMovieDocument = gql`
  query movieUrgesByMovie($movie_id: ID!) {
    movie_urges_by_movie(movie_id: $movie_id) {
      ...Movie
      author {
        ...Author
      }
    }
  }
  ${MovieFragmentDoc}
  ${AuthorFragmentDoc}
`;

/**
 * __useMovieUrgesByMovieQuery__
 *
 * To run a query within a React component, call `useMovieUrgesByMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieUrgesByMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieUrgesByMovieQuery({
 *   variables: {
 *      movie_id: // value for 'movie_id'
 *   },
 * });
 */
export function useMovieUrgesByMovieQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    MovieUrgesByMovieQuery,
    MovieUrgesByMovieQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    MovieUrgesByMovieQuery,
    MovieUrgesByMovieQueryVariables
  >(MovieUrgesByMovieDocument, baseOptions);
}
export function useMovieUrgesByMovieLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MovieUrgesByMovieQuery,
    MovieUrgesByMovieQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    MovieUrgesByMovieQuery,
    MovieUrgesByMovieQueryVariables
  >(MovieUrgesByMovieDocument, baseOptions);
}
export type MovieUrgesByMovieQueryHookResult = ReturnType<
  typeof useMovieUrgesByMovieQuery
>;
export type MovieUrgesByMovieLazyQueryHookResult = ReturnType<
  typeof useMovieUrgesByMovieLazyQuery
>;
export type MovieUrgesByMovieQueryResult = ApolloReactCommon.QueryResult<
  MovieUrgesByMovieQuery,
  MovieUrgesByMovieQueryVariables
>;
export const MovieNextUrgesByMovieDocument = gql`
  query movieNextUrgesByMovie($movie_id: ID!) {
    movie_next_urges_by_movie(movie_id: $movie_id) {
      ...Movie
      author {
        ...Author
      }
    }
  }
  ${MovieFragmentDoc}
  ${AuthorFragmentDoc}
`;

/**
 * __useMovieNextUrgesByMovieQuery__
 *
 * To run a query within a React component, call `useMovieNextUrgesByMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieNextUrgesByMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieNextUrgesByMovieQuery({
 *   variables: {
 *      movie_id: // value for 'movie_id'
 *   },
 * });
 */
export function useMovieNextUrgesByMovieQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    MovieNextUrgesByMovieQuery,
    MovieNextUrgesByMovieQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    MovieNextUrgesByMovieQuery,
    MovieNextUrgesByMovieQueryVariables
  >(MovieNextUrgesByMovieDocument, baseOptions);
}
export function useMovieNextUrgesByMovieLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MovieNextUrgesByMovieQuery,
    MovieNextUrgesByMovieQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    MovieNextUrgesByMovieQuery,
    MovieNextUrgesByMovieQueryVariables
  >(MovieNextUrgesByMovieDocument, baseOptions);
}
export type MovieNextUrgesByMovieQueryHookResult = ReturnType<
  typeof useMovieNextUrgesByMovieQuery
>;
export type MovieNextUrgesByMovieLazyQueryHookResult = ReturnType<
  typeof useMovieNextUrgesByMovieLazyQuery
>;
export type MovieNextUrgesByMovieQueryResult = ApolloReactCommon.QueryResult<
  MovieNextUrgesByMovieQuery,
  MovieNextUrgesByMovieQueryVariables
>;
export const PlaylistsPaginatedDocument = gql`
  query playlistsPaginated(
    $query: PaginatedQuery
    $author_uid: String
    $author_username: String
  ) {
    playlists_paginated(
      query: $query
      author_uid: $author_uid
      author_username: $author_username
    ) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          title
          description
          cover
          create_at
        }
      }
    }
  }
`;

/**
 * __usePlaylistsPaginatedQuery__
 *
 * To run a query within a React component, call `usePlaylistsPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaylistsPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaylistsPaginatedQuery({
 *   variables: {
 *      query: // value for 'query'
 *      author_uid: // value for 'author_uid'
 *      author_username: // value for 'author_username'
 *   },
 * });
 */
export function usePlaylistsPaginatedQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    PlaylistsPaginatedQuery,
    PlaylistsPaginatedQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    PlaylistsPaginatedQuery,
    PlaylistsPaginatedQueryVariables
  >(PlaylistsPaginatedDocument, baseOptions);
}
export function usePlaylistsPaginatedLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PlaylistsPaginatedQuery,
    PlaylistsPaginatedQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    PlaylistsPaginatedQuery,
    PlaylistsPaginatedQueryVariables
  >(PlaylistsPaginatedDocument, baseOptions);
}
export type PlaylistsPaginatedQueryHookResult = ReturnType<
  typeof usePlaylistsPaginatedQuery
>;
export type PlaylistsPaginatedLazyQueryHookResult = ReturnType<
  typeof usePlaylistsPaginatedLazyQuery
>;
export type PlaylistsPaginatedQueryResult = ApolloReactCommon.QueryResult<
  PlaylistsPaginatedQuery,
  PlaylistsPaginatedQueryVariables
>;
export const IsFollowingDocument = gql`
  query isFollowing($owner_uid: String!, $follower_uid: String) {
    is_following(owner_uid: $owner_uid, follower_uid: $follower_uid)
  }
`;

/**
 * __useIsFollowingQuery__
 *
 * To run a query within a React component, call `useIsFollowingQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsFollowingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsFollowingQuery({
 *   variables: {
 *      owner_uid: // value for 'owner_uid'
 *      follower_uid: // value for 'follower_uid'
 *   },
 * });
 */
export function useIsFollowingQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    IsFollowingQuery,
    IsFollowingQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<IsFollowingQuery, IsFollowingQueryVariables>(
    IsFollowingDocument,
    baseOptions
  );
}
export function useIsFollowingLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    IsFollowingQuery,
    IsFollowingQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    IsFollowingQuery,
    IsFollowingQueryVariables
  >(IsFollowingDocument, baseOptions);
}
export type IsFollowingQueryHookResult = ReturnType<typeof useIsFollowingQuery>;
export type IsFollowingLazyQueryHookResult = ReturnType<
  typeof useIsFollowingLazyQuery
>;
export type IsFollowingQueryResult = ApolloReactCommon.QueryResult<
  IsFollowingQuery,
  IsFollowingQueryVariables
>;
export const UserDocument = gql`
  query user($uid: String, $username: String) {
    user(uid: $uid, username: $username) {
      uid
      username
      email
      nickname
      avatar
      mobile
      address
      description
      create_at
      update_at
      delete_at
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>
) {
  return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    baseOptions
  );
}
export function useUserLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    UserQuery,
    UserQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    baseOptions
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<
  UserQuery,
  UserQueryVariables
>;
export const ReviewCreatedDocument = gql`
  subscription reviewCreated($type: ReviewMedium!, $type_id: ID!) {
    review_created(type: $type, type_id: $type_id) {
      content
      create_at
      author {
        nickname
        avatar
      }
    }
  }
`;

/**
 * __useReviewCreatedSubscription__
 *
 * To run a query within a React component, call `useReviewCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useReviewCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewCreatedSubscription({
 *   variables: {
 *      type: // value for 'type'
 *      type_id: // value for 'type_id'
 *   },
 * });
 */
export function useReviewCreatedSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    ReviewCreatedSubscription,
    ReviewCreatedSubscriptionVariables
  >
) {
  return ApolloReactHooks.useSubscription<
    ReviewCreatedSubscription,
    ReviewCreatedSubscriptionVariables
  >(ReviewCreatedDocument, baseOptions);
}
export type ReviewCreatedSubscriptionHookResult = ReturnType<
  typeof useReviewCreatedSubscription
>;
export type ReviewCreatedSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  ReviewCreatedSubscription
>;
