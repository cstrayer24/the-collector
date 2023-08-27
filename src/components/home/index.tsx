"use client";
import { useEffect, useState } from "react";
import NavBar from "../nav";
import ShopComponent from "../shop";
import HomeLayout from "./HomeLayout";
import { Prisma } from "@prisma/client";
function HomeComponent() {
  const [itemsArr, setItemsArr] = useState([]) as any;
  useEffect(() => {
    (async () => {
      const req = await fetch("/api/get-front-page-items");

      setItemsArr(await req.json());
    })();
  }, []);
  return (
    <div className=" h-screen bg-tc-darkblue overflow-x-hidden">
      <NavBar />

      <HomeLayout>
        {itemsArr.map((item: Prisma.ItemCreateManyInput, i: number) => {
          return (
            <ShopComponent
              src={item.src}
              price={item.price}
              time={item.timeStamp}
              name={item.name}
              from={item.from}
              key={i}
            />
          );
        })}
      </HomeLayout>
    </div>
  );
}
export default HomeComponent;
