import * as faker from "faker";

export default {
  Shadow: {
    id: faker.random.number(100),
    title: faker.commerce.productName()
  }
};
