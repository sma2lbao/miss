export interface BaseOptions {
  icon: {
    large: {
      fontSize: React.CSSProperties["fontSize"];
    };
  };
}

export default {
  icon: {
    large: {
      fontSize: 120
    }
  }
} as Partial<BaseOptions>;
