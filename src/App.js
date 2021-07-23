import "./styles.css";
import Footer from "./Footer";
import { desktopFooter, mobileFooter } from "./mockData";

export default () => {
  return <Footer desktopFooter={desktopFooter} mobileFooter={mobileFooter} />;
};
