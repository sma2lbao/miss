import * as React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout(props: PageLayoutProps) {
  return <div>{props.children}</div>;
}

export { FullScreen, BodyScreen, ContentScreen, AiderScreen } from "./modules";
