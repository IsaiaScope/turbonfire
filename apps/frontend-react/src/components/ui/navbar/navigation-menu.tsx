import { Link, useRouterState } from "@tanstack/react-router";
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
  MenubarCheckboxItem,
  MenubarGroup,
} from "@shadcn/menubar";
import {
  FaShapes,
  FaScrewdriverWrench,
  FaEarthAmericas,
  FaGamepad,
  FaUtensils,
  FaWeightHanging,
  FaUserAstronaut,
  FaGear,
  FaDice,
  FaSquareShareNodes,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaAt,
  FaDownload,
  FaTwitch,
  FaGlobe,
} from "react-icons/fa6";
// 📝 NOTE: ICONS = https://www.npmjs.com/package/react-icons
import { useCallback, useState } from "react";
import { cn } from "@packages/utilities-on-fire/cn";
import { useTranslation } from "react-i18next";
import { Separator } from "@shadcn/separator";
import { Label } from "@shadcn/label";
import { useMediaQuery } from "react-responsive";
import { MEDIA_QUERIES } from "@/utility/constants/media-queries";
import { ValidRoutes } from "@/utility/providers/router";
import { LinkOnFire } from "@packages/ui-on-fire";
import { LINKS } from "@/utility/constants/links";

type Props = {
  className?: string;
};

export default function NavigationMenu({ className }: Props) {
  const { t } = useTranslation(["common", "games"]);
  const [size, setSize] = useState(24);

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  useMediaQuery(
    {
      minWidth: MEDIA_QUERIES.LARGE,
    },
    undefined,
    (isBiggerThanLarge: boolean) => {
      isBiggerThanLarge ? setSize(30) : setSize(24);
    },
  );

  const checkRoute = useCallback((): ValidRoutes | undefined => {
    if (pathname.startsWith("/apps/recipes")) {
      return "/apps/recipes";
    }
    if (pathname.startsWith("/apps/weight")) {
      return "/apps/weight";
    }
    if (pathname.startsWith("/games/randomiser")) {
      return "/games/randomiser";
    }
    if (pathname.startsWith("/settings")) {
      return "/settings";
    }
    if (pathname.startsWith("/profile")) {
      return "/profile";
    }
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed left-1/2 w-full -translate-x-1/2 px-4 pt-5 md:w-auto md:min-w-max lg:px-0 lg:pt-8",
        className,
      )}
    >
      <Menubar className="grid h-auto grid-cols-4 p-2">
        <MenubarMenu>
          <MenubarTrigger>
            <FaShapes
              size={size}
              className="min-w-8 cursor-pointer lg:min-w-10"
            />
            <Label className="mr-auto cursor-pointer truncate px-2 py-2 text-2xl font-bold capitalize lg:px-4 lg:text-3xl">
              {t("app", { count: 2 })}
            </Label>
            <Separator
              orientation="vertical"
              decorative
              className="ml-2 h-10 bg-foreground lg:ml-3 lg:w-1"
            />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup className="p-3" value={checkRoute()}>
              <Link to="/apps/recipes">
                <MenubarRadioItem value={"/apps/recipes"}>
                  <FaUtensils
                    size={size - 3}
                    className="min-w-7 cursor-pointer lg:min-w-9"
                  />
                  <MenubarLabel className="ml-2 mr-4 text-xl capitalize lg:text-2xl">
                    {t("recipe", { count: 1 })}
                  </MenubarLabel>
                </MenubarRadioItem>
              </Link>
              <Link to="/apps/weight">
                <MenubarRadioItem value={"/apps/weight"}>
                  <FaWeightHanging
                    size={size - 3}
                    className="min-w-7 cursor-pointer lg:min-w-9"
                  />
                  <MenubarLabel className="ml-2 mr-4 text-xl capitalize lg:text-2xl">
                    {t("weight")}
                  </MenubarLabel>
                </MenubarRadioItem>
              </Link>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <FaGamepad
              size={size}
              className="min-w-8 cursor-pointer lg:min-w-10"
            />
            <Label className="mr-auto cursor-pointer truncate px-2 py-2 text-2xl font-bold capitalize lg:px-4 lg:text-3xl">
              {t("game", { count: 1 })}
            </Label>
            <Separator
              orientation="vertical"
              decorative
              className="ml-2 h-10 bg-foreground lg:ml-3 lg:w-1"
            />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup className="p-3" value={checkRoute()}>
              <Link to="/games/randomiser">
                <MenubarRadioItem value={"/games/randomiser"}>
                  <FaDice
                    size={size - 3}
                    className="min-w-7 cursor-pointer lg:min-w-9"
                  />
                  <MenubarLabel className="ml-2 mr-4 text-xl capitalize lg:text-2xl">
                    {t("games:randomizer")}
                  </MenubarLabel>
                </MenubarRadioItem>
              </Link>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <FaScrewdriverWrench
              size={size}
              className="min-w-8 cursor-pointer lg:min-w-10"
            />
            <Label className="mr-auto cursor-pointer truncate px-2 py-2 text-2xl font-bold capitalize lg:px-4 lg:text-3xl">
              {t("profile")}
            </Label>
            <Separator
              orientation="vertical"
              decorative
              className="ml-2 h-10 bg-foreground lg:ml-3 lg:w-1"
            />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup className="p-3" value={checkRoute()}>
              <Link to="/profile">
                <MenubarRadioItem value={"/profile"}>
                  <FaUserAstronaut
                    size={size - 3}
                    className="min-w-7 cursor-pointer lg:min-w-9"
                  />
                  <MenubarLabel className="ml-2 mr-4 text-xl capitalize lg:text-2xl">
                    {t("profile")}
                  </MenubarLabel>
                </MenubarRadioItem>
              </Link>
              <MenubarSeparator className="my-4" />
              <MenubarCheckboxItem checked disabled>
                <Link to="/">
                  <MenubarLabel className="ml-2 mr-4 text-xl capitalize lg:text-2xl">
                    {t("sign in")}
                  </MenubarLabel>
                </Link>
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked disabled>
                <Link to="/">
                  <MenubarLabel className="ml-2 mr-4 text-xl capitalize lg:text-2xl">
                    {t("sign out")}
                  </MenubarLabel>
                </Link>
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked disabled>
                <Link to="/">
                  <MenubarLabel className="ml-2 mr-4 text-xl capitalize lg:text-2xl">
                    {t("sign up")}
                  </MenubarLabel>
                </Link>
              </MenubarCheckboxItem>
              <MenubarSeparator className="my-4" />
              <Link to="/settings">
                <MenubarRadioItem value={"/settings"}>
                  <FaGear
                    size={size - 3}
                    className="min-w-7 cursor-pointer lg:min-w-9"
                  />
                  <MenubarLabel className="ml-2 mr-4 text-xl capitalize lg:text-2xl">
                    {t("settings")}
                  </MenubarLabel>
                </MenubarRadioItem>
              </Link>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <FaEarthAmericas
              size={size}
              className="min-w-8 cursor-pointer lg:min-w-10"
            />
            <Label className="mr-auto cursor-pointer truncate px-2 py-2 text-2xl font-bold capitalize lg:px-4 lg:text-3xl">
              {t("about")}
            </Label>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarGroup className="p-3">
              <MenubarItem disabled>
                <MenubarLabel className="text-lg capitalize lg:text-xl">
                  {t("contact me")}
                </MenubarLabel>
              </MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>
                  <FaSquareShareNodes
                    size={size - 3}
                    className="min-w-7 cursor-pointer lg:min-w-9"
                  />
                  <MenubarLabel className="ml-2 mr-4 text-xl capitalize lg:text-2xl">
                    {t("social network", { count: 5 })}
                  </MenubarLabel>
                </MenubarSubTrigger>
                <MenubarSubContent className="p-3" sideOffset={16}>
                  <LinkOnFire href={LINKS.INSTAGRAM}>
                    <MenubarItem>
                      <FaInstagram
                        size={size - 3}
                        className="min-w-7 cursor-pointer lg:min-w-9"
                      />
                      <MenubarLabel className="ml-2 mr-4 text-xl lg:text-2xl">
                        {t("instagram")}
                      </MenubarLabel>
                    </MenubarItem>
                  </LinkOnFire>
                  <LinkOnFire href={LINKS.LINKEDIN}>
                    <MenubarItem>
                      <FaLinkedin
                        size={size - 3}
                        className="min-w-7 cursor-pointer lg:min-w-9"
                      />
                      <MenubarLabel className="ml-2 mr-4 text-xl lg:text-2xl">
                        {t("linkedin")}
                      </MenubarLabel>
                    </MenubarItem>
                  </LinkOnFire>
                  <LinkOnFire href={LINKS.GITHUB}>
                    <MenubarItem>
                      <FaGithub
                        size={size - 3}
                        className="min-w-7 cursor-pointer lg:min-w-9"
                      />
                      <MenubarLabel className="ml-2 mr-4 text-xl lg:text-2xl">
                        {t("github")}
                      </MenubarLabel>
                    </MenubarItem>
                  </LinkOnFire>
                  <LinkOnFire href={LINKS.TWITCH}>
                    <MenubarItem>
                      <FaTwitch
                        size={size - 3}
                        className="min-w-7 cursor-pointer lg:min-w-9"
                      />
                      <MenubarLabel className="ml-2 mr-4 text-xl lg:text-2xl">
                        {t("twitch")}
                      </MenubarLabel>
                    </MenubarItem>
                  </LinkOnFire>
                </MenubarSubContent>
                <MenubarItem>
                  <FaAt
                    size={size - 3}
                    className="min-w-7 cursor-pointer lg:min-w-9"
                  />
                  <MenubarLabel className="ml-2 mr-4 text-xl capitalize lg:text-2xl">
                    {t("email")}
                  </MenubarLabel>
                </MenubarItem>
                <MenubarSeparator className="my-4" />
                <MenubarItem disabled>
                  <MenubarLabel className="text-lg capitalize lg:text-xl">
                    {t("about", { context: "me" })}
                  </MenubarLabel>
                </MenubarItem>
                <MenubarItem>
                  <FaDownload
                    size={size - 3}
                    className="min-w-7 cursor-pointer lg:min-w-9"
                  />
                  <MenubarLabel className="ml-2 mr-4 text-xl capitalize lg:text-2xl">
                    {t("curriculum vitae")}
                  </MenubarLabel>
                </MenubarItem>
                <MenubarItem disabled>
                  <FaGlobe
                    size={size - 3}
                    className="min-w-7 cursor-pointer lg:min-w-9"
                  />
                  <MenubarLabel className="ml-2 mr-4 text-xl capitalize lg:text-2xl">
                    {t("portfolio")}
                  </MenubarLabel>
                </MenubarItem>
              </MenubarSub>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
}
