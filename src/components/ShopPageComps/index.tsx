import { Prisma } from "@prisma/client";
import ShopPageTop from "./Top";
import exp from "constants";
import "@/app/globals.css";
import HomeLayout from "../home/HomeLayout";
import ShopComponent from "../shop";
import LinkBar from "../nav/LinkBar";
function ShopPageComp({
  franchise,
  items,
}: {
  franchise: Prisma.franchiseCreateInput;
  items: Prisma.ItemCreateInput[];
}) {
  return (
    <div className=" bg-tc-darkblue">
      <ShopPageTop imgUrl={franchise.banner} />

      <div className=" mb-[10rem]">
        <LinkBar />
      </div>
      <HomeLayout>
        {items.map((v, index) => {
          return (
            <ShopComponent
              src={v.src}
              name={v.name}
              time={v.timeStamp}
              price={v.price}
              from={v.from}
              key={index}
            />
          );
        })}
      </HomeLayout>
    </div>
  );
}
export default ShopPageComp;
