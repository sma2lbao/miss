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

export type CreateShadowInput = {
  readonly title: Scalars["String"];
  readonly sub_title?: Maybe<Scalars["String"]>;
  readonly alias_title?: Maybe<Scalars["String"]>;
  readonly cover: Scalars["String"];
  readonly posters?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly about?: Maybe<Scalars["String"]>;
  readonly region?: Maybe<Scalars["String"]>;
  readonly credits?: Maybe<ReadonlyArray<CreateCharacterInput>>;
  readonly sources?: Maybe<ReadonlyArray<CreateShadowMediumInput>>;
};

export type CreateShadowMediumInput = {
  readonly name: Scalars["String"];
  readonly url: Scalars["String"];
  readonly alias_name?: Maybe<Scalars["String"]>;
  readonly cover?: Maybe<Scalars["String"]>;
  readonly posters?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly shadow_id?: Maybe<Scalars["ID"]>;
};

export type CreateTagInput = {
  readonly label: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
};

export type CreateTopicInput = {
  readonly title: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
  readonly top_shadow_id?: Maybe<Scalars["ID"]>;
  readonly top_shadows_ids?: Maybe<ReadonlyArray<Scalars["ID"]>>;
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
  readonly votes?: Maybe<ReadonlyArray<Vote>>;
  readonly vote_like_count?: Maybe<Scalars["Float"]>;
  readonly vote_dislike_count?: Maybe<Scalars["Float"]>;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
  readonly version?: Maybe<Scalars["Float"]>;
};

export type Mutation = {
  readonly __typename?: "Mutation";
  readonly create_tag: Tag;
  readonly add_shadow_to_tag: Scalars["Boolean"];
  readonly add_category_to_tag: Scalars["Boolean"];
  readonly create_shadow: Shadow;
  readonly update_shadow: Shadow;
  readonly add_mediums_to_shadow: Shadow;
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
  readonly add_shadow_to_playlist: Scalars["Boolean"];
  readonly create_follow: Follow;
  readonly remove_follow: Follow;
  readonly create_or_update_vote: Vote;
};

export type MutationCreate_TagArgs = {
  tag: CreateTagInput;
};

export type MutationAdd_Shadow_To_TagArgs = {
  tag_id: Scalars["Float"];
  shadow_id: Scalars["Float"];
};

export type MutationAdd_Category_To_TagArgs = {
  tag_id: Scalars["Float"];
  category_id: Scalars["Float"];
};

export type MutationCreate_ShadowArgs = {
  shadow: CreateShadowInput;
};

export type MutationUpdate_ShadowArgs = {
  shadow: UpdateShadowInput;
  shadow_id: Scalars["ID"];
};

export type MutationAdd_Mediums_To_ShadowArgs = {
  shadow_medium: CreateShadowMediumInput;
  shadow_id: Scalars["ID"];
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

export type MutationAdd_Shadow_To_PlaylistArgs = {
  playlist_id: Scalars["Float"];
  shadow_id: Scalars["Float"];
};

export type MutationCreate_FollowArgs = {
  follow: CreateFollowInput;
};

export type MutationRemove_FollowArgs = {
  follow: DeleteFollowInput;
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
  readonly shadows?: Maybe<ReadonlyArray<Shadow>>;
  readonly shadows_count?: Maybe<Scalars["Float"]>;
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
  readonly shadow: Shadow;
  readonly shadows_paginated: ShadowPaginated;
  readonly user_shadows_paginated: ShadowPaginated;
  readonly me: User;
  readonly platform_auth_way: ReadonlyArray<PlatformAuthWay>;
  /** find username exit. */
  readonly has_username: Scalars["Boolean"];
  /** find user by uid or username. */
  readonly user: User;
  /** all user with paginated. */
  readonly users_paginated: UserPaginated;
  readonly current_topic: Topic;
  readonly shadow_urges: ReadonlyArray<Shadow>;
  readonly shadow_urges_by_shadow: ReadonlyArray<Shadow>;
  readonly user_urges: ReadonlyArray<User>;
  readonly shadow_next_urges_by_shadow: ReadonlyArray<Shadow>;
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
  readonly vote: Vote;
  readonly medium_vote_count: Scalars["Int"];
};

export type QueryShadowArgs = {
  id: Scalars["ID"];
};

export type QueryShadows_PaginatedArgs = {
  query?: Maybe<PaginatedQuery>;
};

export type QueryUser_Shadows_PaginatedArgs = {
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

export type QueryShadow_Urges_By_ShadowArgs = {
  shadow_id: Scalars["ID"];
};

export type QueryShadow_Next_Urges_By_ShadowArgs = {
  shadow_id: Scalars["ID"];
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
  Shadow = "SHADOW"
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

export type Shadow = {
  readonly __typename?: "Shadow";
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
  readonly sources: ReadonlyArray<ShadowMedium>;
  readonly author: User;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
};

export type ShadowEdge = {
  readonly __typename?: "ShadowEdge";
  readonly cursor: Scalars["String"];
  readonly node: Shadow;
};

export type ShadowMedium = {
  readonly __typename?: "ShadowMedium";
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
  readonly votes?: Maybe<ReadonlyArray<Vote>>;
  readonly vote_like_count?: Maybe<Scalars["Float"]>;
  readonly vote_dislike_count?: Maybe<Scalars["Float"]>;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
  readonly version?: Maybe<Scalars["Float"]>;
};

export type ShadowPageInfo = {
  readonly __typename?: "ShadowPageInfo";
  readonly hasNextPage: Scalars["Boolean"];
  readonly hasPreviousPage: Scalars["Boolean"];
  readonly startCursor: Scalars["String"];
  readonly endCursor: Scalars["String"];
};

export type ShadowPaginated = {
  readonly __typename?: "ShadowPaginated";
  readonly edges?: Maybe<ReadonlyArray<ShadowEdge>>;
  readonly nodes?: Maybe<ReadonlyArray<Shadow>>;
  readonly pageInfo: ShadowPageInfo;
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
  readonly shadows?: Maybe<ReadonlyArray<Shadow>>;
  readonly categories?: Maybe<ReadonlyArray<Category>>;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
};

export type Topic = {
  readonly __typename?: "Topic";
  readonly id: Scalars["ID"];
  readonly title: Scalars["String"];
  readonly description?: Maybe<Scalars["String"]>;
  readonly top_shadow?: Maybe<Shadow>;
  readonly top_shadows?: Maybe<ReadonlyArray<Shadow>>;
  readonly create_at: Scalars["Date"];
  readonly update_at: Scalars["Date"];
  readonly delete_at?: Maybe<Scalars["Date"]>;
};

export type UpdateShadowInput = {
  readonly sub_title?: Maybe<Scalars["String"]>;
  readonly alias_title?: Maybe<Scalars["String"]>;
  readonly posters?: Maybe<ReadonlyArray<Scalars["String"]>>;
  readonly description?: Maybe<Scalars["String"]>;
  readonly about?: Maybe<Scalars["String"]>;
  readonly region?: Maybe<Scalars["String"]>;
  readonly credits?: Maybe<ReadonlyArray<CreateCharacterInput>>;
  readonly sources?: Maybe<ReadonlyArray<CreateShadowMediumInput>>;
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

export type CreateShadowMutationVariables = Exact<{
  shadow: CreateShadowInput;
}>;

export type CreateShadowMutation = {
  readonly __typename?: "Mutation";
  readonly create_shadow: {
    readonly __typename?: "Shadow";
    readonly create_at: any;
  };
};

export type UpdateShadowMutationVariables = Exact<{
  shadow: UpdateShadowInput;
  shadow_id: Scalars["ID"];
}>;

export type UpdateShadowMutation = {
  readonly __typename?: "Mutation";
  readonly update_shadow: {
    readonly __typename?: "Shadow";
    readonly create_at: any;
  };
};

export type AddMediumsToShadowMutationVariables = Exact<{
  shadow_id: Scalars["ID"];
  shadow_medium: CreateShadowMediumInput;
}>;

export type AddMediumsToShadowMutation = {
  readonly __typename?: "Mutation";
  readonly add_mediums_to_shadow: {
    readonly __typename?: "Shadow";
    readonly sources: ReadonlyArray<{
      readonly __typename?: "ShadowMedium";
      readonly name?: Maybe<string>;
    }>;
  };
};

export type CreateOrUpdateVoteMutationVariables = Exact<{
  vote: CreateVoteInput;
}>;

export type CreateOrUpdateVoteMutation = {
  readonly __typename?: "Mutation";
  readonly create_or_update_vote: {
    readonly __typename?: "Vote";
    readonly status: VoteStatus;
  };
};

export type CreateReviewMutationVariables = Exact<{
  review: CreateReviewInput;
}>;

export type CreateReviewMutation = {
  readonly __typename?: "Mutation";
  readonly create_review: {
    readonly __typename?: "Review";
    readonly id: number | string;
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
    readonly top_shadows?: Maybe<
      ReadonlyArray<{
        readonly __typename?: "Shadow";
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
    readonly top_shadow?: Maybe<{
      readonly __typename?: "Shadow";
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

export type ShadowUrgesQueryVariables = Exact<{ [key: string]: never }>;

export type ShadowUrgesQuery = {
  readonly __typename?: "Query";
  readonly shadow_urges: ReadonlyArray<{
    readonly __typename?: "Shadow";
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

export type ShadowQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type ShadowQuery = {
  readonly __typename?: "Query";
  readonly shadow: {
    readonly __typename?: "Shadow";
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
      readonly __typename?: "ShadowMedium";
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
      readonly vote_like_count?: Maybe<number>;
      readonly vote_dislike_count?: Maybe<number>;
    }>;
  };
};

export type ShadowsPaginatedQueryVariables = Exact<{
  query?: Maybe<PaginatedQuery>;
}>;

export type ShadowsPaginatedQuery = {
  readonly __typename?: "Query";
  readonly shadows_paginated: {
    readonly __typename?: "ShadowPaginated";
    readonly totalCount: number;
    readonly pageInfo: {
      readonly __typename?: "ShadowPageInfo";
      readonly hasNextPage: boolean;
      readonly endCursor: string;
    };
    readonly edges?: Maybe<
      ReadonlyArray<{
        readonly __typename?: "ShadowEdge";
        readonly cursor: string;
        readonly node: {
          readonly __typename?: "Shadow";
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

export type UserShadowsPaginatedQueryVariables = Exact<{
  author_username: Scalars["String"];
  query?: Maybe<PaginatedQuery>;
}>;

export type UserShadowsPaginatedQuery = {
  readonly __typename?: "Query";
  readonly user_shadows_paginated: {
    readonly __typename?: "ShadowPaginated";
    readonly totalCount: number;
    readonly pageInfo: {
      readonly __typename?: "ShadowPageInfo";
      readonly hasNextPage: boolean;
      readonly endCursor: string;
    };
    readonly edges?: Maybe<
      ReadonlyArray<{
        readonly __typename?: "ShadowEdge";
        readonly cursor: string;
        readonly node: {
          readonly __typename?: "Shadow";
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

export type ShadowUrgesByShadowQueryVariables = Exact<{
  shadow_id: Scalars["ID"];
}>;

export type ShadowUrgesByShadowQuery = {
  readonly __typename?: "Query";
  readonly shadow_urges_by_shadow: ReadonlyArray<{
    readonly __typename?: "Shadow";
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

export type ShadowNextUrgesByShadowQueryVariables = Exact<{
  shadow_id: Scalars["ID"];
}>;

export type ShadowNextUrgesByShadowQuery = {
  readonly __typename?: "Query";
  readonly shadow_next_urges_by_shadow: ReadonlyArray<{
    readonly __typename?: "Shadow";
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

export type ReviewsPaginatedQueryVariables = Exact<{
  type?: Maybe<ReviewMedium>;
  type_id?: Maybe<Scalars["ID"]>;
  query?: Maybe<PaginatedQuery>;
}>;

export type ReviewsPaginatedQuery = {
  readonly __typename?: "Query";
  readonly reviews_paginated: {
    readonly __typename?: "ReviewPaginated";
    readonly totalCount: number;
    readonly pageInfo: {
      readonly __typename?: "ReviewPageInfo";
      readonly hasNextPage: boolean;
      readonly endCursor: string;
    };
    readonly edges?: Maybe<
      ReadonlyArray<{
        readonly __typename?: "ReviewEdge";
        readonly cursor: string;
        readonly node: {
          readonly __typename?: "Review";
          readonly id: number | string;
          readonly content: string;
          readonly create_at: any;
          readonly update_at: any;
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

export type FansTotalQueryVariables = Exact<{
  owner_uid: Scalars["String"];
}>;

export type FansTotalQuery = {
  readonly __typename?: "Query";
  readonly fans_total: number;
};

export type FollowsTotalQueryVariables = Exact<{
  follower_uid: Scalars["String"];
}>;

export type FollowsTotalQuery = {
  readonly __typename?: "Query";
  readonly follows_total: number;
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
export const ShadowFragmentDoc = gql`
  fragment Shadow on Shadow {
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
export const ShadowSourceFragmentDoc = gql`
  fragment ShadowSource on ShadowMedium {
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
    vote_like_count
    vote_dislike_count
  }
`;
export const ReviewFragmentDoc = gql`
  fragment Review on Review {
    id
    content
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
export const CreateShadowDocument = gql`
  mutation createShadow($shadow: CreateShadowInput!) {
    create_shadow(shadow: $shadow) {
      create_at
    }
  }
`;
export type CreateShadowMutationFn = ApolloReactCommon.MutationFunction<
  CreateShadowMutation,
  CreateShadowMutationVariables
>;

/**
 * __useCreateShadowMutation__
 *
 * To run a mutation, you first call `useCreateShadowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShadowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShadowMutation, { data, loading, error }] = useCreateShadowMutation({
 *   variables: {
 *      shadow: // value for 'shadow'
 *   },
 * });
 */
export function useCreateShadowMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateShadowMutation,
    CreateShadowMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateShadowMutation,
    CreateShadowMutationVariables
  >(CreateShadowDocument, baseOptions);
}
export type CreateShadowMutationHookResult = ReturnType<
  typeof useCreateShadowMutation
>;
export type CreateShadowMutationResult = ApolloReactCommon.MutationResult<
  CreateShadowMutation
>;
export type CreateShadowMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateShadowMutation,
  CreateShadowMutationVariables
>;
export const UpdateShadowDocument = gql`
  mutation updateShadow($shadow: UpdateShadowInput!, $shadow_id: ID!) {
    update_shadow(shadow_id: $shadow_id, shadow: $shadow) {
      create_at
    }
  }
`;
export type UpdateShadowMutationFn = ApolloReactCommon.MutationFunction<
  UpdateShadowMutation,
  UpdateShadowMutationVariables
>;

/**
 * __useUpdateShadowMutation__
 *
 * To run a mutation, you first call `useUpdateShadowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShadowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShadowMutation, { data, loading, error }] = useUpdateShadowMutation({
 *   variables: {
 *      shadow: // value for 'shadow'
 *      shadow_id: // value for 'shadow_id'
 *   },
 * });
 */
export function useUpdateShadowMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateShadowMutation,
    UpdateShadowMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateShadowMutation,
    UpdateShadowMutationVariables
  >(UpdateShadowDocument, baseOptions);
}
export type UpdateShadowMutationHookResult = ReturnType<
  typeof useUpdateShadowMutation
>;
export type UpdateShadowMutationResult = ApolloReactCommon.MutationResult<
  UpdateShadowMutation
>;
export type UpdateShadowMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateShadowMutation,
  UpdateShadowMutationVariables
>;
export const AddMediumsToShadowDocument = gql`
  mutation addMediumsToShadow(
    $shadow_id: ID!
    $shadow_medium: CreateShadowMediumInput!
  ) {
    add_mediums_to_shadow(
      shadow_id: $shadow_id
      shadow_medium: $shadow_medium
    ) {
      sources {
        name
      }
    }
  }
`;
export type AddMediumsToShadowMutationFn = ApolloReactCommon.MutationFunction<
  AddMediumsToShadowMutation,
  AddMediumsToShadowMutationVariables
>;

/**
 * __useAddMediumsToShadowMutation__
 *
 * To run a mutation, you first call `useAddMediumsToShadowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMediumsToShadowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMediumsToShadowMutation, { data, loading, error }] = useAddMediumsToShadowMutation({
 *   variables: {
 *      shadow_id: // value for 'shadow_id'
 *      shadow_medium: // value for 'shadow_medium'
 *   },
 * });
 */
export function useAddMediumsToShadowMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddMediumsToShadowMutation,
    AddMediumsToShadowMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddMediumsToShadowMutation,
    AddMediumsToShadowMutationVariables
  >(AddMediumsToShadowDocument, baseOptions);
}
export type AddMediumsToShadowMutationHookResult = ReturnType<
  typeof useAddMediumsToShadowMutation
>;
export type AddMediumsToShadowMutationResult = ApolloReactCommon.MutationResult<
  AddMediumsToShadowMutation
>;
export type AddMediumsToShadowMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddMediumsToShadowMutation,
  AddMediumsToShadowMutationVariables
>;
export const CreateOrUpdateVoteDocument = gql`
  mutation createOrUpdateVote($vote: CreateVoteInput!) {
    create_or_update_vote(vote: $vote) {
      status
    }
  }
`;
export type CreateOrUpdateVoteMutationFn = ApolloReactCommon.MutationFunction<
  CreateOrUpdateVoteMutation,
  CreateOrUpdateVoteMutationVariables
>;

/**
 * __useCreateOrUpdateVoteMutation__
 *
 * To run a mutation, you first call `useCreateOrUpdateVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrUpdateVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrUpdateVoteMutation, { data, loading, error }] = useCreateOrUpdateVoteMutation({
 *   variables: {
 *      vote: // value for 'vote'
 *   },
 * });
 */
export function useCreateOrUpdateVoteMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateOrUpdateVoteMutation,
    CreateOrUpdateVoteMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateOrUpdateVoteMutation,
    CreateOrUpdateVoteMutationVariables
  >(CreateOrUpdateVoteDocument, baseOptions);
}
export type CreateOrUpdateVoteMutationHookResult = ReturnType<
  typeof useCreateOrUpdateVoteMutation
>;
export type CreateOrUpdateVoteMutationResult = ApolloReactCommon.MutationResult<
  CreateOrUpdateVoteMutation
>;
export type CreateOrUpdateVoteMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateOrUpdateVoteMutation,
  CreateOrUpdateVoteMutationVariables
>;
export const CreateReviewDocument = gql`
  mutation createReview($review: CreateReviewInput!) {
    create_review(review: $review) {
      id
    }
  }
`;
export type CreateReviewMutationFn = ApolloReactCommon.MutationFunction<
  CreateReviewMutation,
  CreateReviewMutationVariables
>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      review: // value for 'review'
 *   },
 * });
 */
export function useCreateReviewMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateReviewMutation,
    CreateReviewMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateReviewMutation,
    CreateReviewMutationVariables
  >(CreateReviewDocument, baseOptions);
}
export type CreateReviewMutationHookResult = ReturnType<
  typeof useCreateReviewMutation
>;
export type CreateReviewMutationResult = ApolloReactCommon.MutationResult<
  CreateReviewMutation
>;
export type CreateReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateReviewMutation,
  CreateReviewMutationVariables
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
      top_shadows {
        ...Shadow
        author {
          ...Author
        }
      }
      top_shadow {
        ...Shadow
        author {
          ...Author
        }
      }
    }
  }
  ${ShadowFragmentDoc}
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
export const ShadowUrgesDocument = gql`
  query shadowUrges {
    shadow_urges {
      ...Shadow
      author {
        ...Author
      }
    }
  }
  ${ShadowFragmentDoc}
  ${AuthorFragmentDoc}
`;

/**
 * __useShadowUrgesQuery__
 *
 * To run a query within a React component, call `useShadowUrgesQuery` and pass it any options that fit your needs.
 * When your component renders, `useShadowUrgesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShadowUrgesQuery({
 *   variables: {
 *   },
 * });
 */
export function useShadowUrgesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ShadowUrgesQuery,
    ShadowUrgesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ShadowUrgesQuery, ShadowUrgesQueryVariables>(
    ShadowUrgesDocument,
    baseOptions
  );
}
export function useShadowUrgesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ShadowUrgesQuery,
    ShadowUrgesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ShadowUrgesQuery,
    ShadowUrgesQueryVariables
  >(ShadowUrgesDocument, baseOptions);
}
export type ShadowUrgesQueryHookResult = ReturnType<typeof useShadowUrgesQuery>;
export type ShadowUrgesLazyQueryHookResult = ReturnType<
  typeof useShadowUrgesLazyQuery
>;
export type ShadowUrgesQueryResult = ApolloReactCommon.QueryResult<
  ShadowUrgesQuery,
  ShadowUrgesQueryVariables
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
export const ShadowDocument = gql`
  query shadow($id: ID!) {
    shadow(id: $id) {
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
      ...Shadow
      sources {
        ...ShadowSource
      }
    }
  }
  ${AuthorFragmentDoc}
  ${ShadowFragmentDoc}
  ${ShadowSourceFragmentDoc}
`;

/**
 * __useShadowQuery__
 *
 * To run a query within a React component, call `useShadowQuery` and pass it any options that fit your needs.
 * When your component renders, `useShadowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShadowQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useShadowQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ShadowQuery,
    ShadowQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ShadowQuery, ShadowQueryVariables>(
    ShadowDocument,
    baseOptions
  );
}
export function useShadowLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ShadowQuery,
    ShadowQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ShadowQuery, ShadowQueryVariables>(
    ShadowDocument,
    baseOptions
  );
}
export type ShadowQueryHookResult = ReturnType<typeof useShadowQuery>;
export type ShadowLazyQueryHookResult = ReturnType<typeof useShadowLazyQuery>;
export type ShadowQueryResult = ApolloReactCommon.QueryResult<
  ShadowQuery,
  ShadowQueryVariables
>;
export const ShadowsPaginatedDocument = gql`
  query shadowsPaginated($query: PaginatedQuery) {
    shadows_paginated(query: $query) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...Shadow
          author {
            ...Author
          }
        }
      }
    }
  }
  ${ShadowFragmentDoc}
  ${AuthorFragmentDoc}
`;

/**
 * __useShadowsPaginatedQuery__
 *
 * To run a query within a React component, call `useShadowsPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useShadowsPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShadowsPaginatedQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useShadowsPaginatedQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ShadowsPaginatedQuery,
    ShadowsPaginatedQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ShadowsPaginatedQuery,
    ShadowsPaginatedQueryVariables
  >(ShadowsPaginatedDocument, baseOptions);
}
export function useShadowsPaginatedLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ShadowsPaginatedQuery,
    ShadowsPaginatedQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ShadowsPaginatedQuery,
    ShadowsPaginatedQueryVariables
  >(ShadowsPaginatedDocument, baseOptions);
}
export type ShadowsPaginatedQueryHookResult = ReturnType<
  typeof useShadowsPaginatedQuery
>;
export type ShadowsPaginatedLazyQueryHookResult = ReturnType<
  typeof useShadowsPaginatedLazyQuery
>;
export type ShadowsPaginatedQueryResult = ApolloReactCommon.QueryResult<
  ShadowsPaginatedQuery,
  ShadowsPaginatedQueryVariables
>;
export const UserShadowsPaginatedDocument = gql`
  query userShadowsPaginated(
    $author_username: String!
    $query: PaginatedQuery
  ) {
    user_shadows_paginated(author_username: $author_username, query: $query) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...Shadow
          author {
            ...Author
          }
        }
      }
    }
  }
  ${ShadowFragmentDoc}
  ${AuthorFragmentDoc}
`;

/**
 * __useUserShadowsPaginatedQuery__
 *
 * To run a query within a React component, call `useUserShadowsPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserShadowsPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserShadowsPaginatedQuery({
 *   variables: {
 *      author_username: // value for 'author_username'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useUserShadowsPaginatedQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    UserShadowsPaginatedQuery,
    UserShadowsPaginatedQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    UserShadowsPaginatedQuery,
    UserShadowsPaginatedQueryVariables
  >(UserShadowsPaginatedDocument, baseOptions);
}
export function useUserShadowsPaginatedLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    UserShadowsPaginatedQuery,
    UserShadowsPaginatedQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    UserShadowsPaginatedQuery,
    UserShadowsPaginatedQueryVariables
  >(UserShadowsPaginatedDocument, baseOptions);
}
export type UserShadowsPaginatedQueryHookResult = ReturnType<
  typeof useUserShadowsPaginatedQuery
>;
export type UserShadowsPaginatedLazyQueryHookResult = ReturnType<
  typeof useUserShadowsPaginatedLazyQuery
>;
export type UserShadowsPaginatedQueryResult = ApolloReactCommon.QueryResult<
  UserShadowsPaginatedQuery,
  UserShadowsPaginatedQueryVariables
>;
export const ShadowUrgesByShadowDocument = gql`
  query shadowUrgesByShadow($shadow_id: ID!) {
    shadow_urges_by_shadow(shadow_id: $shadow_id) {
      ...Shadow
      author {
        ...Author
      }
    }
  }
  ${ShadowFragmentDoc}
  ${AuthorFragmentDoc}
`;

/**
 * __useShadowUrgesByShadowQuery__
 *
 * To run a query within a React component, call `useShadowUrgesByShadowQuery` and pass it any options that fit your needs.
 * When your component renders, `useShadowUrgesByShadowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShadowUrgesByShadowQuery({
 *   variables: {
 *      shadow_id: // value for 'shadow_id'
 *   },
 * });
 */
export function useShadowUrgesByShadowQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ShadowUrgesByShadowQuery,
    ShadowUrgesByShadowQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ShadowUrgesByShadowQuery,
    ShadowUrgesByShadowQueryVariables
  >(ShadowUrgesByShadowDocument, baseOptions);
}
export function useShadowUrgesByShadowLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ShadowUrgesByShadowQuery,
    ShadowUrgesByShadowQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ShadowUrgesByShadowQuery,
    ShadowUrgesByShadowQueryVariables
  >(ShadowUrgesByShadowDocument, baseOptions);
}
export type ShadowUrgesByShadowQueryHookResult = ReturnType<
  typeof useShadowUrgesByShadowQuery
>;
export type ShadowUrgesByShadowLazyQueryHookResult = ReturnType<
  typeof useShadowUrgesByShadowLazyQuery
>;
export type ShadowUrgesByShadowQueryResult = ApolloReactCommon.QueryResult<
  ShadowUrgesByShadowQuery,
  ShadowUrgesByShadowQueryVariables
>;
export const ShadowNextUrgesByShadowDocument = gql`
  query shadowNextUrgesByShadow($shadow_id: ID!) {
    shadow_next_urges_by_shadow(shadow_id: $shadow_id) {
      ...Shadow
      author {
        ...Author
      }
    }
  }
  ${ShadowFragmentDoc}
  ${AuthorFragmentDoc}
`;

/**
 * __useShadowNextUrgesByShadowQuery__
 *
 * To run a query within a React component, call `useShadowNextUrgesByShadowQuery` and pass it any options that fit your needs.
 * When your component renders, `useShadowNextUrgesByShadowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShadowNextUrgesByShadowQuery({
 *   variables: {
 *      shadow_id: // value for 'shadow_id'
 *   },
 * });
 */
export function useShadowNextUrgesByShadowQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ShadowNextUrgesByShadowQuery,
    ShadowNextUrgesByShadowQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ShadowNextUrgesByShadowQuery,
    ShadowNextUrgesByShadowQueryVariables
  >(ShadowNextUrgesByShadowDocument, baseOptions);
}
export function useShadowNextUrgesByShadowLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ShadowNextUrgesByShadowQuery,
    ShadowNextUrgesByShadowQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ShadowNextUrgesByShadowQuery,
    ShadowNextUrgesByShadowQueryVariables
  >(ShadowNextUrgesByShadowDocument, baseOptions);
}
export type ShadowNextUrgesByShadowQueryHookResult = ReturnType<
  typeof useShadowNextUrgesByShadowQuery
>;
export type ShadowNextUrgesByShadowLazyQueryHookResult = ReturnType<
  typeof useShadowNextUrgesByShadowLazyQuery
>;
export type ShadowNextUrgesByShadowQueryResult = ApolloReactCommon.QueryResult<
  ShadowNextUrgesByShadowQuery,
  ShadowNextUrgesByShadowQueryVariables
>;
export const ReviewsPaginatedDocument = gql`
  query reviewsPaginated(
    $type: ReviewMedium
    $type_id: ID
    $query: PaginatedQuery
  ) {
    reviews_paginated(type: $type, type_id: $type_id, query: $query) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...Review
          author {
            ...Author
          }
        }
      }
    }
  }
  ${ReviewFragmentDoc}
  ${AuthorFragmentDoc}
`;

/**
 * __useReviewsPaginatedQuery__
 *
 * To run a query within a React component, call `useReviewsPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsPaginatedQuery({
 *   variables: {
 *      type: // value for 'type'
 *      type_id: // value for 'type_id'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useReviewsPaginatedQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ReviewsPaginatedQuery,
    ReviewsPaginatedQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ReviewsPaginatedQuery,
    ReviewsPaginatedQueryVariables
  >(ReviewsPaginatedDocument, baseOptions);
}
export function useReviewsPaginatedLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ReviewsPaginatedQuery,
    ReviewsPaginatedQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ReviewsPaginatedQuery,
    ReviewsPaginatedQueryVariables
  >(ReviewsPaginatedDocument, baseOptions);
}
export type ReviewsPaginatedQueryHookResult = ReturnType<
  typeof useReviewsPaginatedQuery
>;
export type ReviewsPaginatedLazyQueryHookResult = ReturnType<
  typeof useReviewsPaginatedLazyQuery
>;
export type ReviewsPaginatedQueryResult = ApolloReactCommon.QueryResult<
  ReviewsPaginatedQuery,
  ReviewsPaginatedQueryVariables
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
export const FansTotalDocument = gql`
  query fansTotal($owner_uid: String!) {
    fans_total(owner_uid: $owner_uid)
  }
`;

/**
 * __useFansTotalQuery__
 *
 * To run a query within a React component, call `useFansTotalQuery` and pass it any options that fit your needs.
 * When your component renders, `useFansTotalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFansTotalQuery({
 *   variables: {
 *      owner_uid: // value for 'owner_uid'
 *   },
 * });
 */
export function useFansTotalQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FansTotalQuery,
    FansTotalQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<FansTotalQuery, FansTotalQueryVariables>(
    FansTotalDocument,
    baseOptions
  );
}
export function useFansTotalLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FansTotalQuery,
    FansTotalQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<FansTotalQuery, FansTotalQueryVariables>(
    FansTotalDocument,
    baseOptions
  );
}
export type FansTotalQueryHookResult = ReturnType<typeof useFansTotalQuery>;
export type FansTotalLazyQueryHookResult = ReturnType<
  typeof useFansTotalLazyQuery
>;
export type FansTotalQueryResult = ApolloReactCommon.QueryResult<
  FansTotalQuery,
  FansTotalQueryVariables
>;
export const FollowsTotalDocument = gql`
  query followsTotal($follower_uid: String!) {
    follows_total(follower_uid: $follower_uid)
  }
`;

/**
 * __useFollowsTotalQuery__
 *
 * To run a query within a React component, call `useFollowsTotalQuery` and pass it any options that fit your needs.
 * When your component renders, `useFollowsTotalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFollowsTotalQuery({
 *   variables: {
 *      follower_uid: // value for 'follower_uid'
 *   },
 * });
 */
export function useFollowsTotalQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FollowsTotalQuery,
    FollowsTotalQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    FollowsTotalQuery,
    FollowsTotalQueryVariables
  >(FollowsTotalDocument, baseOptions);
}
export function useFollowsTotalLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FollowsTotalQuery,
    FollowsTotalQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    FollowsTotalQuery,
    FollowsTotalQueryVariables
  >(FollowsTotalDocument, baseOptions);
}
export type FollowsTotalQueryHookResult = ReturnType<
  typeof useFollowsTotalQuery
>;
export type FollowsTotalLazyQueryHookResult = ReturnType<
  typeof useFollowsTotalLazyQuery
>;
export type FollowsTotalQueryResult = ApolloReactCommon.QueryResult<
  FollowsTotalQuery,
  FollowsTotalQueryVariables
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
