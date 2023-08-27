import LinkBar from "./LinkBar";
import UserBar from "./UserBar";

function NavBar() {
  return (
    <div className=" bg-tc-darkblue h-36 w-screen mb-56">
      <UserBar />
      <LinkBar />
    </div>
  );
}
export default NavBar;
