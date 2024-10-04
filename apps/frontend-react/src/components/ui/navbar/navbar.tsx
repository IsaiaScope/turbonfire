import { MEDIA_QUERIES } from "@/utility/constants/media-queries";
import MobileTabs from "@ui/navbar/mobile-tabs";
import NavigationMenu from "@ui/navbar/navigation-menu";
import { useMediaQuery } from "react-responsive";

// 📝 NOTE: https://www.npmjs.com/package/react-responsive
export default function Navbar() {
  const isBiggerThanSmall = useMediaQuery({
    minWidth: MEDIA_QUERIES.SMALL,
  });
  return <>{isBiggerThanSmall ? <NavigationMenu /> : <MobileTabs />}</>;
}
