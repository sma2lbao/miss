export interface LayoutOptions {
  size: {
    parent: {
      width: React.CSSProperties["width"];
    };
  };
}

export default {
  size: {
    parent: {
      width: 80
    }
  }
} as Partial<LayoutOptions>;
