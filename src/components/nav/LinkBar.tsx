import NavItem from "./NavItem";

function LinkBar() {
  const franchises = ["Marvel", "DC", "Harry potter", "Star Wars"];
  return (
    <div className=" w-screen h-15 bg-tc-darkblue  mt-5 mx-3">
      <nav className=" w-screen h-full  flex justify-around flex-row  mt-5">
        {franchises.map((f) => {
          return <NavItem name={f} />;
        })}
      </nav>
    </div>
  );
}
export default LinkBar;
