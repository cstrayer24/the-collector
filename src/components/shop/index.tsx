import Image from "next/image";
import images from "../../../imgs/images.png";
import BuyNowBtn from "./BuyNow";

type props = {
  src: string;
  name: string;
  price: string;
  time: string;
  from: string;
};
function ShopComponent({ src, name, price, time, from }: props) {
  return (
    <div className=" h-96   w-96  mt-5 border border-tcWhite rounded-md grid grid-rows-5 ">
      <div className=" flex align-middle row-span-1">
        {" "}
        <Image
          src={src}
          width={200}
          height={400}
          alt="hi"
          className=" p-5 h-28 block"
        />
        <h1 className=" mt-6 block font-bold  text-tcWhite ">name: {name}</h1>
      </div>
      <div className=" row-span-3 flex flex-col ml-5">
        <h1 className="mt-5 block font-bold  text-tcWhite">From: {from}</h1>
        <br />
        <br />
        <h1 className="mt-5 block font-bold  text-tcWhite">
          {" "}
          appears at: {time}
        </h1>
      </div>
      <div className=" w-full justify-end flex">
        <BuyNowBtn price={price} />
      </div>
    </div>
  );
}
export default ShopComponent;
