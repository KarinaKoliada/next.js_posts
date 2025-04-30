import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center p-5 gap-5 text-2xl">
      <Link className="border p-3 rounded-2xl hover:bg-emerald-800" href="/">Home</Link>
      <Link className="border p-3 rounded-2xl hover:bg-emerald-800" href="/posts">Posts</Link>
    </div>
  );
};

export default Navbar;
