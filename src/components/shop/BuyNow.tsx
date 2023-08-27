function BuyNowBtn({ price }: { price: string }) {
  return (
    <div className=" rounded-md border-tc-lightpurple border-2 hover:shadow-2xl hover:shadow-tc-pink cursor-pointer mr-4 mb-4">
      <button className=" text-tcWhite font-bold bg-tc-lightblue p-3 align-middle">
        Buy now for {price}
      </button>
    </div>
  );
}
export default BuyNowBtn;
