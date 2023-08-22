import SignUpBtn from "./SignUpBtn";
import SigninBtn from "./SigninBtn";

function LoggedOutComponent() {
  return (
    <div className=" flex gap-5 mt-5 mr-5">
      <SigninBtn
        onclick={() => {
          console.log("hi");
        }}
      />
      <SignUpBtn
        onclick={() => {
          console.log("hi");
        }}
      />
    </div>
  );
}
export default LoggedOutComponent;
