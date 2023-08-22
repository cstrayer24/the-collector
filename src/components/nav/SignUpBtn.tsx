function SignUpBtn({ onclick }: { onclick: any }) {
  return (
    <div className=" rounded-md border-tc-lightpurple border-2 hover:shadow-2xl hover:shadow-tc-pink">
      <button
        onClick={() => onclick()}
        className=" text-tcWhite font-bold bg-tc-lightblue p-3"
      >
        Sign Up
      </button>
    </div>
  );
}
export default SignUpBtn;
