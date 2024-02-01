import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import service3 from "../../../images/icons/service3.png";

import { v4 as uuidv4 } from "uuid";

export const services = [
  {
    id: uuidv4(),
    image: service1,
    title: "Web & Mobile design",
    desc: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product",
  },
  {
    id: uuidv4(),
    image: service2,
    title: "Graphic design",
    desc: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
  },
  {
    id: uuidv4(),
    image: service3,
    title: "Web development",
    desc: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
  },
];
