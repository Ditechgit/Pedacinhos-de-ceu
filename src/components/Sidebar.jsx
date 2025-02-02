import { useState } from "react";
import Logo from "./Logo";
import bar from "../assets/bar.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade do menu

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hidden max-md:flex shadow-lg">
      {/* Botão para abrir/fechar o menu (visível apenas em telas pequenas) */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 right-4 p-2 bg-orange-300 rounded-md z-50 shadow-lg"
      >
        <img src={bar} alt="Logotype project" className="size-8"/>
      </button>

      {/* Menu Lateral (agora à direita) */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-orange-400 text-slate-800 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:translate-x-0 md:relative md:w-auto z-40`}
      >
        <div className="p-4">
          <Logo />
          <ul>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-orange-300 rounded-md">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-orange-300 rounded-md">
                Serviços
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-orange-300 rounded-md">
                Sobre
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-orange-300 rounded-md">
                Dúvidas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;