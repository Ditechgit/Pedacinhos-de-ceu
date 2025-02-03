const Navbar = () => {
  // Array de objetos com os itens e seus respectivos IDs
  const navItems = [
    { name: "Home", id: "MainSection" },
    { name: "Serviços", id: "LandingSection" },
    { name: "Sobre", id: "FeaturesSection" },
    { name: "Dúvidas", id: "FaqSection" },
  ];

  return (
    <nav>
      <ul className="flex text-orange-200 max-md:flex-none">
        {navItems.map((item, index) => (
          <li key={index} className="ml-2.5 hover:text-orange-300">
            <a
              className="block p-2.5"
              href={`#${item.id}`} // Link para o ID da seção
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;