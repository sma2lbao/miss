import React from "react";
import { useParams } from "react-router";
import { usePlaylistsPaginatedQuery } from "@/schema";
import { SpecialBox } from "@/components/public/SpecialBox";

export default function Playlists() {
  const { username } = useParams();
  const { data, loading, error } = usePlaylistsPaginatedQuery({
    variables: {
      query: {
        last: 10
      },
      author_username: username
    }
  });
  return (
    <div>
      {data?.playlists_paginated?.edges?.length ? (
        <div></div>
      ) : (
        <SpecialBox loading={loading} error={!!error} />
      )}
    </div>
  );
}
