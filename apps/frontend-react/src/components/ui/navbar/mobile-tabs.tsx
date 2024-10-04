import { cn } from "@packages/utilities-on-fire/cn";
import {
  FaShapes,
  FaScrewdriverWrench,
  FaCode,
  FaPuzzlePiece,
} from "react-icons/fa6";
import { Separator } from "@shadcn/separator";
import LinkTurbonfire from "@ui/link-turbonfire";
import { useTranslation } from "react-i18next";

type Props = {
  className?: string;
};

export default function MobileTabs({ className }: Props) {
  const { t } = useTranslation(["common"]);
  // 📝 NOTE: decorative set role to 'none' when true  or 'separator' when false
  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 flex items-center bg-card-foreground px-2 py-2 shadow-[0px_-1px_2px_1px] shadow-primary",
        className,
      )}
    >
      <LinkTurbonfire
        id={`id-${t("app", { count: 2 })}`}
        label={t("app", { count: 2 })}
        to="/apps"
        Icon={FaShapes}
      />
      <Separator orientation="vertical" decorative className="h-9" />
      <LinkTurbonfire
        id={`id-${t("game", { count: 1 })}`}
        label={t("game", { count: 1 })}
        to="/games"
        Icon={FaPuzzlePiece}
      />
      <Separator orientation="vertical" decorative className="h-9" />
      <LinkTurbonfire
        id={`id-${t("profile")}`}
        label={t("profile")}
        to="/profile"
        Icon={FaScrewdriverWrench}
      />
      <Separator orientation="vertical" decorative className="h-9" />
      <LinkTurbonfire
        id={`id-${t("about")}`}
        label={t("about")}
        to="/about"
        Icon={FaCode}
      />
    </nav>
  );
}
