import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold ">Digital Marketing Energy</h1>
      <Navbar />
    </header>
  );
};

export default Header;
