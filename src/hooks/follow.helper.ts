import * as React from "react";
import {
  useIsFollowingLazyQuery,
  useCreateFollowMutation,
  useRemoveFollowMutation
} from "@/schema";
import { useAuth } from "@/hooks";
import { useSnackbar } from "notistack";

export interface IFollowProps {
  owner_uid: string;
}

export const useFollowHelper = (props: IFollowProps) => {
  const { owner_uid } = props;
  const { enqueueSnackbar } = useSnackbar();
  const { hasLogged } = useAuth();
  const [following, setFollowing] = React.useState<boolean>(false);

  const [isFollowing] = useIsFollowingLazyQuery({
    onCompleted(data) {
      setFollowing(data.is_following);
    }
  });

  React.useEffect(() => {
    if (owner_uid && hasLogged) {
      isFollowing({
        variables: {
          owner_uid
        }
      });
    }
  }, [hasLogged, isFollowing, owner_uid]);

  const [createFollow] = useCreateFollowMutation({
    onCompleted() {
      enqueueSnackbar("关注成功");
    }
  });
  const [removeFollow] = useRemoveFollowMutation({
    onCompleted() {
      enqueueSnackbar("取消成功");
    }
  });

  const toggleFollow = () => {
    if (owner_uid) {
      if (following) {
        removeFollow({
          variables: {
            follow: {
              owner_uid
            }
          }
        });
      } else {
        createFollow({
          variables: {
            follow: {
              owner_uid: owner_uid
            }
          }
        });
      }
    }
  };
  return {
    following,
    toggleFollow
  };
};
