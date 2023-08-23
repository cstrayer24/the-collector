import { ctx } from "../../contexts/userCtx";
import { useContext } from "react";
function LoggedInComponent() {
  const userCtx = useContext(ctx);
  const userObj = userCtx.userObj;
  return (
    <div className="flex mr-5 mt-5 gap-5 flex-row-reverse">
      <div className=" text-tcWhite font-bold rounded-md border-tcWhite border p-5 ">
        <h2>hello {userObj.name}</h2>
      </div>

      <div className=" text-tcWhite font-bold rounded-md border-tcWhite border p-5  hover:bg-tcWhite/50 cursor-pointer">
        <h2>post a listing ?</h2>
      </div>
    </div>
  );
}
export default LoggedInComponent;
