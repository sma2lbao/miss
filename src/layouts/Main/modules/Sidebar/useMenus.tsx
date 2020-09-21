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

const MovieMenus: MenuProps = {
  id: 2000,
  icon: <Movie />,
  label: "Movie",
  value: "movie",
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

const menus: MenuProps[] = [HomeMenus, MovieMenus, UserMenus];

export const useMenus = () => {
  const { path } = useRouteMatch();
  const [pid, setPid] = React.useState<number | undefined>(1000);
  const [cid, setCid] = React.useState<number | undefined>(1001);
  React.useEffect(() => {
    if (path === "/") {
      setPid(1000);
      setCid(1001);
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

    setPid(curParentMenu?.id);
    setCid(curChildMenu?.id);
  }, [path]);

  return {
    menus,
    pid,
    cid
    // setPid,
    // setCid,
  };
};

export default useMenus;
