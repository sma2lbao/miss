import * as React from "react";
import { Home, Movie, Person, HourglassEmpty } from "@material-ui/icons";
import { HOME, MOVIE_HOME } from "@/common/constants/route.constant";
import { useRouteMatch } from "react-router";

export interface MenuProps {
  id: number;

  icon: React.ReactElement;

  label: string;

  value?: string;

  path?: string;

  disabled?: boolean;

  children?: Omit<MenuProps, "children">[];
}

const HomeMenus: MenuProps = {
  id: 1000,
  icon: <Home />,
  label: "Home",
  children: [
    {
      id: 1001,
      icon: <HourglassEmpty />,
      label: "Home",
      path: HOME
    },
    {
      id: 1002,
      icon: <HourglassEmpty />,
      label: "History Topics",
      path: "/topics",
      disabled: true
    }
  ]
};

const ShadowMenus: MenuProps = {
  id: 2000,
  icon: <Movie />,
  label: "Shadow",
  value: "shadow",
  path: MOVIE_HOME
  // children: [],
};

const UserMenus: MenuProps = {
  id: 3000,
  icon: <Person />,
  label: "My",
  value: "user",
  path: "",
  children: [
    {
      id: 3001,
      icon: <HourglassEmpty />,
      label: "My Homepage",
      value: "personal",
      path: "/personal"
    },
    {
      id: 3002,
      icon: <HourglassEmpty />,
      label: "Setting",
      value: "setting",
      path: "/setting",
      disabled: true
    }
  ]
};

const menus: MenuProps[] = [HomeMenus, ShadowMenus, UserMenus];

export const useMenus = () => {
  const { path } = useRouteMatch();
  const [parent, setParent] = React.useState<MenuProps | undefined>();
  const [child, setChild] = React.useState<
    Omit<MenuProps, "children"> | undefined
  >();
  React.useEffect(() => {
    if (path === "/") {
      setParent(menus[0]);
      setChild(menus[0].children ? menus[0].children[0] : undefined);
      return;
    }
    let curParentMenu: MenuProps | undefined = undefined;
    let curChildMenu: Omit<MenuProps, "children"> | undefined = undefined;
    for (let i = 0; i < menus.length; i++) {
      const parent = menus[i];
      const child = parent?.children?.find(child => child.path === path);
      if (child) {
        curParentMenu = parent;
        curChildMenu = child;
        break;
      } else if (parent.path && path === parent.path) {
        curParentMenu = parent;
        break;
      }
    }
    setParent(curParentMenu);
    setChild(curChildMenu);
  }, [path]);

  return {
    menus,
    parent,
    child,
    pid: parent?.id,
    cid: child?.id
  };
};

export default useMenus;
