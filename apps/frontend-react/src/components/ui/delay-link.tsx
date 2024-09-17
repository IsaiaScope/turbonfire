import useSetTimeout from "@/utility/hooks/useTimeout";
import { ValidRoutes } from "@/utility/providers/router";
import { usePageTransitionStore } from "@/utility/store/page-transition-state";
import { Link, useNavigate } from "@tanstack/react-router";

type Props = {
  children: React.ReactNode;
  to: ValidRoutes;
  delay?: number;
} & Omit<React.ComponentProps<typeof Link>, "to" | "onClick">;

export default function DelayLink(props: Props) {
  const navigate = useNavigate();

  const { to, children, delay = 1000 } = props;

  const { set } = useSetTimeout(() => {
    navigate({ to });
    stop();
  }, delay);

  const { start, stop } = usePageTransitionStore();

  const onDelayClick = (event: React.MouseEvent<"a">) => {
    event.preventDefault();
    start();
    set();
  };

  return (
    <Link {...props} onClick={onDelayClick}>
      {children}
    </Link>
  );
}
