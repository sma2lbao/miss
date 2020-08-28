import UserResolver from "./user.mock";
import CharacterResolver from "./character.mock";

export const resolvers = {
  ...UserResolver,
  ...CharacterResolver
};
