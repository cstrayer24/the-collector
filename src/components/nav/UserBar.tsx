import Image from "next/image";
import logo from "../../../imgs/logo-noBg.png";
import ActionHub from "./ActionHub";
import Link from "next/link";
function UserBar() {
  return (
    <div className="flex flex-row justify-between w-screen">
      {/*todo change to logo*/}
      <div className=" bg-tc-lightblue rounded-md ml-5 mt-4">
        <Image
          placeholder="empty"
          alt="the collector logo"
          className=" h-10 w-40"
          src={logo}
          width={200}
          height={100}
        />
      </div>
      <Link href={"/"}>
        <h1 className=" text-center mt-3 text-white font-bold text-3xl">
          The collector
        </h1>
      </Link>

      <div className="">
        <ActionHub />
      </div>
    </div>
  );
}
export default UserBar;
