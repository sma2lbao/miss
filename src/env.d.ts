declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_ENV: "development" | "test" | "mock" | "production";
  }
}
