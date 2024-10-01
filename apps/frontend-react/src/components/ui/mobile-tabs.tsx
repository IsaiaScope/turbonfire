import { ValidRoutes } from "@/utility/providers/router";
import { cn } from "@cn";
import { Link } from "@tanstack/react-router";
import {
  FaShapes,
  FaGamepad,
  FaScrewdriverWrench,
  FaCode,
  FaEarthAmericas,
  FaPuzzlePiece,
} from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { Label } from "@shadcn/label";
import { Separator } from "../shadcn/separator";

type Prop = {
  id: string;
  label: string;
  to: ValidRoutes;
  Icon: IconType;
  linkProps?: Omit<React.ComponentProps<typeof Link>, "to">;
  iconProps?: React.ComponentProps<IconType>;
  labelProps?: React.ComponentProps<typeof Label>;
};

function LinkOnFire({
  id,
  label,
  to,
  Icon,
  iconProps,
  labelProps,
  linkProps,
}: Prop) {
  return (
    <Link
      id={id}
      to={to}
      {...linkProps}
      className={cn("group flex flex-col items-center", linkProps?.className)}
    >
      <Icon
        {...{ size: 32, ...iconProps }}
        className={cn(
          "mb-1 text-card group-[&.active]:text-primary",
          iconProps?.className,
        )}
      />
      <Label
        {...labelProps}
        className={cn(
          "text-base font-bold text-card group-[&.active]:text-primary",
          labelProps?.className,
        )}
        htmlFor={id}
      >
        {label}
      </Label>
    </Link>
  );
}

type Props = {
  className?: string;
};

export default function MobileTabs({ className }: Props) {
  // 📝 NOTE: decorative set role to 'none' when true  or 'separator' when false
  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 flex items-center justify-between bg-card-foreground px-6 py-2 shadow-[0px_-1px_2px_1px] shadow-primary",
        className,
      )}
    >
      <LinkOnFire id="home" label="Home" to="/home" Icon={FaShapes} />

      <Separator orientation="vertical" decorative className="h-9" />
      <LinkOnFire
        id="games"
        label="Games"
        to="/game/randomiser"
        Icon={FaPuzzlePiece}
      />
      <Separator orientation="vertical" decorative className="h-9" />
      <LinkOnFire
        id="tools"
        label="Tools"
        to="/profile"
        Icon={FaScrewdriverWrench}
      />
      <Separator orientation="vertical" decorative className="h-9" />
      <LinkOnFire id="about" label="About" to="/about" Icon={FaCode} />
    </nav>
  );
}
