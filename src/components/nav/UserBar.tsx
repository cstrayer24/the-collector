import Image from "next/image";
import logo from "../../../imgs/Collector.png";
import ActionHub from "./ActionHub";
import Link from "next/link";
function UserBar() {
  return (
    <div className="flex flex-row justify-between w-screen mb-24">
      {/*todo change to logo*/}
      <div className=" rounded-md ml-5 mt-4"></div>
      <Link
        href={"/"}
        className=" p-4 border-tc-pink border-solid block relative left-[5rem]"
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

      <div className="">
        <ActionHub />
      </div>
    </div>
  );
}
export default UserBar;
