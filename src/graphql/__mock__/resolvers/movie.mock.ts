import * as faker from "faker";

export default {
  Movie: {
    id: faker.random.number(100),
    title: faker.commerce.productName()
  }
};
