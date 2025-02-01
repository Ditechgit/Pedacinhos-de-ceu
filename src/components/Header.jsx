import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex justify-around items-center flex-wrap p-5">
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;
