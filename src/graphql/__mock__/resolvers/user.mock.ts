import * as faker from "faker";

export default {
  User: {
    uid: faker.random.uuid()
    // username: faker.internet.userName,
    // email: faker.internet.email,
    // nickname: faker.name.firstName,
    // avatar: faker.image.avatar,
    // mobile: faker.phone.phoneNumber(),
    // address: faker.address.streetAddress,
    // description: faker.lorem.lines(2),
    // create_at: faker.date.recent(3),
  }
};
