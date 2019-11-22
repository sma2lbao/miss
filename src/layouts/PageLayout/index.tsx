import * as React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout(props: PageLayoutProps) {
  return <div>{props.children}</div>;
}

export { default as FullScreen } from "./components/FullScreen";
export { default as BodyScreen } from "./components/BodyScreen";
export { default as ContentScreen } from "./components/ContentScreen";
export { default as AiderScreen } from "./components/AiderScreen";
