const Navbar = () => {
  const navItems = ["Home", "Serviços", "Sobre", "Dúvidas"];

  return (
    <nav>
      <ul className="flex text-orange-200 max-md: flex-none">
        {navItems.map((item, index) => (
          <li key={index} className="ml-2.5 hover:text-orange-300">
            <a className="block p-2.5" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;