import {
  Link,
  Navigate,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@shadcn/menubar";
// 📝 NOTE: ICONS = https://www.npmjs.com/package/react-icons
import { FaHouseFire, FaDice } from "react-icons/fa6";
import { useCallback } from "react";
import { cn } from "@cn";

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

type Props = {
  className?: string;
};

export default function NavigationMenu({ className }: Props) {
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

  return (
    <nav className={cn("fixed flex w-full justify-center pt-8", className)}>
      <Menubar className="h-auto">
        <MenubarMenu>
          <MenubarTrigger className="text-3xl py-2 px-6">
            {NAV_MENU.NAVBAR.MAIN}
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem inset>
              <MenubarLabel>{NAV_MENU.LABELS.HOME}</MenubarLabel>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem disabled>Apps</MenubarItem>
            <MenubarRadioGroup value={checkRoute()}>
              <Link to="/recipe">
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
            <Link to="/profile">
              <MenubarItem>
                <FaHouseFire />
                Profile
              </MenubarItem>
            </Link>
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
