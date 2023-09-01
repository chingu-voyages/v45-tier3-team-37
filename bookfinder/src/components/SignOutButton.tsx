import { useClerk } from "@clerk/nextjs";
import { IoIosLogOut } from "react-icons/io";

const SignOutButton = () => {
  const { signOut } = useClerk();

  return (
    <button
      onClick={() => signOut()}
      className="flex max-w-fit items-center gap-2 rounded-md border-2 border-teal-600 p-2 hover:bg-teal-50"
    >
      <IoIosLogOut style={{ fontSize: "1.5rem" }} />
      Sign Out
    </button>
  );
};

export default SignOutButton;
