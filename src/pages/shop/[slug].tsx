import ShopPageComp from "@/components/ShopPageComps";
import prisma from "@/lib/prismaClient";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { [key: string]: string };

  const franchise = await prisma.franchise.findFirst({
    where: {
      name: slug.split("-").join(" "),
    },
  });
  const items = await prisma.item.findMany({
    where: {
      franchise: slug.split("-").join(" "),
    },
  });
  const shopData = { franchise, items };
  return { props: { shopData } };
};

function Page({ shopData }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(shopData);
  const { franchise, items } = shopData;
  return <ShopPageComp items={items} franchise={franchise} />;
}
export default Page;
