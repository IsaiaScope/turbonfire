import MobileTabs from "@ui/mobile-tabs";
import NavigationMenu from "@ui/navigation-menu";

// 📝 NOTE: Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px)
// md	768px	@media (min-width: 768px)
// lg	1024px	@media (min-width: 1024px)
// xl	1280px	@media (min-width: 1280px)
// 2xl	1536px	@media (min-width: 1536px)

export default function Navbar() {
  return (
    <>
      <NavigationMenu className="hidden sm:block sm:p-2" />
      <MobileTabs className="sm:hidden" />
    </>
  );
}
