import * as faker from "faker";

export default {
  // User: {
  //   uid: () => faker.random.uuid(),
  //   username: () => faker.internet.userName(),
  //   email: () => faker.internet.email(),
  //   nickname: () => faker.name.firstName(),
  //   avatar: () => faker.image.avatar(),
  //   mobile: () => faker.phone.phoneNumber(),
  //   address: () => faker.address.streetAddress(),
  //   description: () => faker.lorem.lines(2),
  //   create_at: () => faker.date.recent(3),
  // },
  Query: {
    current_topic: () => {
      console.log("current_topic");
      return {
        title: "title",
        description: "description",
        top_movies: [],
        top_movie: null
      };
    },
    user_urges: () => {
      return [
        {
          nickname: null,
          avatar: null,
          username: "sma2lbao080",
          uid: "046bef3a-8bd1-4343-b0db-2a78c23eb9b3",
          description: null
        }
      ];
    }
  }
};
