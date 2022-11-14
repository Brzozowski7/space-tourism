import bgHomeMobile from "../../images/background-home-mobile.jpg";
import bgHomeTablet from "../../images/background-home-tablet.jpg";
import bgHomeDesktop from "../../images/background-home-desktop.jpg";
import bgDestinationMobile from "../../images/background-destination-mobile.jpg";
import bgDestinationTablet from "../../images/background-destination-tablet.jpg";
import bgDestinationDesktop from "../../images/background-destination-desktop.jpg";
import { SubPages } from "./guessBgImage.const";

export const guessBgImage = (
  subpage: string,
  isMobile: boolean,
  isTablet: boolean
) => {
  switch (subpage) {
    case SubPages.HOME:
      if (isMobile) {
        return bgHomeMobile;
      } else if (isTablet) {
        return bgHomeTablet;
      } else return bgHomeDesktop;
    case SubPages.DESTINATION:
      if (isMobile) {
        return bgDestinationMobile;
      } else if (isTablet) {
        return bgDestinationTablet;
      } else return bgDestinationDesktop;
  }
};

export default guessBgImage;