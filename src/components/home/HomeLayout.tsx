function HomeLayout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className=" h-full w-screen grid grid-cols-3 gap-0">
      <div className=" h-full w-full bg-tc-darkblue"></div>
      <div className=" h-full w-full max-w-7xl  bg-tc-lightblue grid grid-flow-row justify-center gap-10">
        {children}
      </div>
      <div className=" h-full w-full bg-tc-darkblue"></div>
    </div>
  );
}
export default HomeLayout;
