import Link from "next/link";

function ShopPageTop({ imgUrl }: { imgUrl: string }) {
  return (
    <div
      className="w-screen h-72  bg-top bg-cover "
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <Link href={"/"} className=" p-4 border-tc-pink border-solid block">
        <h1 className=" text-center text-white font-bold text-3xl">
          {" "}
          The collector
        </h1>
      </Link>
    </div>
  );
}
export default ShopPageTop;
