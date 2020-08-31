declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "test" | "mock" | "production";
  }
}
