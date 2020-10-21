export interface BaseOptions {
  icon: {
    large: {
      fontSize: React.CSSProperties["fontSize"];
    };
    medium: {
      fontSize: React.CSSProperties["fontSize"];
    };
    small: {
      fontSize: React.CSSProperties["fontSize"];
    };
  };
}

export default {
  icon: {
    large: {
      fontSize: 120
    },
    medium: {
      fontSize: 80
    },
    small: {
      fontSize: 60
    }
  }
} as Partial<BaseOptions>;
