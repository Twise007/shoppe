import { toast } from "react-toastify";
import image1 from "../assets/image1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";

const heroBanner = [
  {
    id: 1,
    image: image1,
    link: "goldbighoop",
    price: 68.80,
    title: "gold big hoops",
  },
  {
    id: 2,
    image: img2,
    link: "hairpin",
    price: 30.00,
    title: "hair pin",
  },
  {
    id: 3,
    image: img3,
    link: "plainnecklace",
    price: 19.00,
    title: "plain necklace",
  },
  {
    id: 4,
    image: img4,
    link: "kaedehairpin",
    price: 30.00,
    title: "kaede hair pin set of 3",
  },
];

const productArray = [
  {
    id: 1,
    image: img7,
    link: "liraearrings",
    price: 20.00,
    title: "lira earrings",
  },
  {
    id: 2,
    image: img2,
    link: "hairpin",
    price: 30.00,
    title: "hair pin",
  },
  {
    id: 3,
    image: img3,
    link: "plainnecklace",
    price: 19.00,
    title: "plain necklace",
  },
  {
    id: 4,
    image: img4,
    link: "kaedehairpin",
    price: 30.00,
    title: "kaede hair pin set of 3",
  },
  {
    id: 5,
    image: img5,
    link: "halearrings",
    price: 29.00,
    title: "hal earrings",
  },
  {
    id: 6,
    image: img6,
    link: "yukiset3",
    price: 29.00,
    title: "yuki hair pin set of 3",
  },
];

function getProductData(id) {
  let productData = productArray.find((product) => product.id === id);
  if (productData === undefined) {
    toast("Product data does not exist for ID: " + id)
    return undefined
  }
  return productData
}

export { heroBanner, productArray, getProductData };
