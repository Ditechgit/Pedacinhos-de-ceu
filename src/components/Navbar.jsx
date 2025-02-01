

function Navbar() {
  return (
    <nav>
      <ul className="flex text-orange-200">
        <li className="ml-2.5 hover:text-orange-300">
          <a className="block p-2.5" href="#">
            Home
          </a>
        </li>
        <li className="ml-2.5 hover:text-orange-300">
          <a className="block p-2.5" href="#">
            Serviços
          </a>
        </li>
        <li className="ml-2.5 hover:text-orange-300">
          <a className="block p-2.5" href="#">
            Sobre
          </a>
        </li>
        <li className="ml-2.5 hover:text-orange-300">
          <a className="block p-2.5" href="#">
            Dúvidas
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
