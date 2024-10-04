import { ValidRoutes } from "@/utility/providers/router";
import { cn } from "@packages/utilities-on-fire/cn";
import { Link } from "@tanstack/react-router";
import { IconType } from "react-icons/lib";
import { Label } from "@shadcn/label";

type Prop = {
  id: string;
  label: string;
  to: ValidRoutes;
  Icon: IconType;
  linkProps?: Omit<React.ComponentProps<typeof Link>, "to">;
  iconProps?: React.ComponentProps<IconType>;
  labelProps?: React.ComponentProps<typeof Label>;
};

export default function LinkTurbonfire({
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
      className={cn(
        "group flex w-1/4 flex-col items-center px-1",
        linkProps?.className,
      )}
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
          "max-w-full truncate text-base font-bold text-card group-[&.active]:text-primary",
          labelProps?.className,
        )}
        htmlFor={id}
      >
        {label}
      </Label>
    </Link>
  );
}
