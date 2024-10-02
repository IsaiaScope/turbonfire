import MobileTabs from "@ui/navbar/mobile-tabs";
import NavigationMenu from "@ui/navbar/navigation-menu";
import { useMediaQuery } from "react-responsive";
// 📝 NOTE: Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px)
// md	768px	@media (min-width: 768px)
// lg	1024px	@media (min-width: 1024px)
// xl	1280px	@media (min-width: 1280px)
// 2xl	1536px	@media (min-width: 1536px)

// 📝 NOTE: https://www.npmjs.com/package/react-responsive
export default function Navbar() {
  const isBiggerThanSmallScreen = useMediaQuery({
    query: "(min-width: 640px)",
  });
  return <>{isBiggerThanSmallScreen ? <NavigationMenu /> : <MobileTabs />}</>;
}
