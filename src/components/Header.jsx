import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex max-md:hidden justify-around items-center flex-wrap p-5">
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;
