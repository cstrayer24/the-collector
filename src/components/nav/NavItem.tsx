import Link from "next/link";
import { FC } from "react";

type props = {
  name: string;
};

const NavItem: FC<props> = ({ name }) => {
  return (
    <Link
      href={`/shop/${name.split(" ").join("-")}`}
      className=" p-8 w-56 hover:bg-tc-darkpurple text-center hover:rounded-md hover:border hover:border-tcWhite font-bold text-xl text-tcWhite mr-4"
    >
      {name}
    </Link>
  );
};
export default NavItem;
