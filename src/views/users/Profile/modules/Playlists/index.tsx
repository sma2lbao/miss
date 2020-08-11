import React from "react";
import { useParams } from "react-router";
import { usePlaylistsPaginatedQuery } from "@/schema";

export default function Playlists() {
  const { username } = useParams();
  const { data } = usePlaylistsPaginatedQuery({
    variables: {
      query: {
        last: 10
      },
      author_username: username
    }
  });
  console.log(data);
  return <div></div>;
}
