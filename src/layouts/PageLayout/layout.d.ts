export interface LayoutBase {
  children: React.ReactNode;
  className?: String;
}

export interface FullScreenLayoutProps extends LayoutBase {}

export interface BodyScreenLayoutProps extends LayoutBase {}

export interface ContentScreenLayoutProps extends LayoutBase {
  width?: any;
}

export interface AiderScreenLayoutProps extends LayoutBase {}
