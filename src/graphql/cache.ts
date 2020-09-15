import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import {
  DEFAULT_USER_AVATAR,
  DEFAULT_USER_NICKNAME,
  DEFAULT_USER_DESCRIPTION
} from "@/common/constants/default.constant";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    User: {
      fields: {
        avatar: {
          read(avatar = DEFAULT_USER_AVATAR) {
            return avatar ? avatar : DEFAULT_USER_AVATAR;
          }
        },
        nickname: {
          read(_) {
            return _ ? _ : DEFAULT_USER_NICKNAME;
          }
        },
        description: {
          read(_) {
            return _ ? _ : DEFAULT_USER_DESCRIPTION;
          }
        }
      }
    },
    Character: {
      fields: {
        avatar: {
          read(avatar = DEFAULT_USER_AVATAR) {
            return avatar ? avatar : DEFAULT_USER_AVATAR;
          }
        }
      }
    },
    PlatformAuthWay: {
      fields: {
        http_domain: {
          read() {
            return httpDomainVar();
          }
        }
      }
    }
  }
});

export const httpDomainVar: ReactiveVar<string> = makeVar<string>(
  process.env.REACT_APP_HTTP_DOMAIN_URL || ""
);
