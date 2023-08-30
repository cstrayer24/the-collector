import Link from "next/link";
import Image from "next/image";
import logo from "../../../imgs/Collector.png";
function ShopPageTop({ imgUrl }: { imgUrl: string }) {
  return (
    <div className="w-screen h-72  bg-top bg-cover flex justify-center ">
      <Link
        href={"/"}
        className=" p-4 border-tc-pink border-solid block relative right-4 "
      >
        <Image
          placeholder="empty"
          alt="the collector logo"
          className=" h-20 rounded-md w-40 "
          src={logo}
          width={200}
          height={100}
        />
      </Link>
    </div>
  );
}
export default ShopPageTop;
