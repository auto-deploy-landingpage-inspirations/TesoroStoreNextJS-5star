import Widgets from "./widgets";
import Copyright from "./copyright";
import { footer } from "./data";
const { widgets, payment } = footer;

const Footer: React.FC = () => (
  <footer className="border-b-4 border-heading pt-12 md:pt-11 lg:pt-24 3xl:pt-20 2xl:pt-2 text-white mt-10" style={{backgroundColor: '#7066e0'}}>
    <div className="h-10"></div>
    <Widgets widgets={widgets} />
    <Copyright payment={payment} />
  </footer>
);

export default Footer;
