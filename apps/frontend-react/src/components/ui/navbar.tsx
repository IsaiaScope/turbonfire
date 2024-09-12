import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@shadcn/menubar";
// 📝 NOTE: ICONS = https://www.npmjs.com/package/react-icons
import { FaHouseFire, FaDice } from "react-icons/fa6";
import { useCallback } from "react";

const NAV_MENU = {
  NAVBAR: {
    MAIN: "apps & games",
    ACCOUNT: "account",
    ABOUT: "about me",
    DOC: "documentation",
  },
  ROUTES: {
    RECIPE: "recipe",
    WEIGHT: "weight",
    RANDOMISER: "randomiser",
  },
  LABELS: {
    HOME: "home",
    GAME: "game",
  },
} as const;

export default function Navbar() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const checkRoute = useCallback(() => {
    if (pathname.startsWith("/recipe")) {
      return NAV_MENU.ROUTES.RECIPE;
    }
    if (pathname.startsWith("/weight")) {
      return NAV_MENU.ROUTES.WEIGHT;
    }
    if (pathname.startsWith("/game/randomiser")) {
      return NAV_MENU.ROUTES.RANDOMISER;
    }
  }, [pathname]);
  console.log(`🧊 ~ pathname: `, pathname);

  return (
    <nav className="flex p-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>{NAV_MENU.NAVBAR.MAIN}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem inset>{NAV_MENU.LABELS.HOME}</MenubarItem>
            <MenubarSeparator />
            <MenubarItem disabled>Apps</MenubarItem>
            <MenubarRadioGroup value={checkRoute()}>
              <Link to={`/"${NAV_MENU.ROUTES.RECIPE}`}>
                <MenubarRadioItem value={NAV_MENU.ROUTES.RECIPE}>
                  <FaHouseFire />
                  {NAV_MENU.ROUTES.RECIPE}
                </MenubarRadioItem>
              </Link>
              <Link to="/weight">
                <MenubarRadioItem value={NAV_MENU.ROUTES.WEIGHT}>
                  <FaHouseFire />
                  {NAV_MENU.ROUTES.WEIGHT}
                </MenubarRadioItem>
              </Link>
              <MenubarSeparator />
              <MenubarItem disabled>Games</MenubarItem>
              <Link to="/game/randomiser">
                <MenubarRadioItem value={NAV_MENU.ROUTES.RANDOMISER}>
                  <MenubarItem>
                    <FaDice />
                    {NAV_MENU.ROUTES.RANDOMISER}
                  </MenubarItem>
                </MenubarRadioItem>
              </Link>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>{NAV_MENU.NAVBAR.ABOUT}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem disabled>Contact me</MenubarItem>
            <MenubarSub>
              <MenubarSubTrigger>social</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>insta</MenubarItem>
                <MenubarItem>facebook</MenubarItem>
                <MenubarItem>github</MenubarItem>
                <MenubarItem>linkedin</MenubarItem>
                <MenubarItem>twitch</MenubarItem>
              </MenubarSubContent>
              <MenubarItem>mail</MenubarItem>
              <MenubarSeparator />
              <MenubarItem disabled>About me</MenubarItem>
              <MenubarItem>Portfolio</MenubarItem>
              <MenubarItem>Download CV</MenubarItem>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>{NAV_MENU.NAVBAR.ACCOUNT}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Profile</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>login</MenubarItem>
            <MenubarItem>Register</MenubarItem>
            <MenubarItem>Logout</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Settings</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>{NAV_MENU.NAVBAR.DOC}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Homepage</MenubarItem>
            <MenubarItem>Common</MenubarItem>
            <MenubarItem>Front end</MenubarItem>
            <MenubarItem>Back end</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
}
