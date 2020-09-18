import React from "react";
import { useParams } from "react-router";
import { usePlaylistsPaginatedQuery } from "@/schema";
import { SpecialBox } from "@/components/public/SpecialBox";
// import { Playlist } from "@/components/app/Playlist";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

export default function Playlists() {
  const { username } = useParams();
  const { data, loading, error } = usePlaylistsPaginatedQuery({
    variables: {
      query: {
        last: 8
      },
      author_username: username
    }
  });
  return (
    <div>
      {data?.playlists_paginated?.edges?.length ? (
        <List>
          {data.playlists_paginated.edges.map((playlist, idx) => {
            return (
              <ListItem key={idx}>
                <ListItemIcon>
                  <PlayCircleFilledIcon />
                </ListItemIcon>
                <ListItemText
                  primary={playlist.node.title}
                  secondary={playlist.node.create_at}
                />
              </ListItem>
            );
          })}
        </List>
      ) : (
        <SpecialBox
          loading={loading}
          error={!!error}
          placeholder={!data?.playlists_paginated?.edges?.length}
          placeholderTitle={"No Playlist Here."}
        />
      )}
    </div>
  );
}
