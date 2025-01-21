import Cookie from "./components/Cookie";
import Img1 from "./components/Img1";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="m-0 p-0 box-border list-none">
      <header className="flex justify-around items-center flex-wrap p-5 ">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex">
            <li className="ml-2.5">
              <a className="block p-2.5" href="#">
                Home
              </a>
            </li>
            <li className="ml-2.5">
              <a className="block p-2.5" href="#">
                Serviços
              </a>
            </li>
            <li className="ml-2.5">
              <a className="block p-2.5" href="#">
                Sobre
              </a>
            </li>
            <li className="ml-2.5">
              <a className="block p-2.5" href="#">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="grid grid-cols-2 gap-5 max-w-7xl my-0 mx-auto items-center">
        <section className="grid justify-center bg-gradient-to-r from-slate-500 rounded-md ">
          <div className="my-8 px-7">
            <p className="mt-4 text-xl">eBook Grátis</p>
            <h1 className="text-4xl">
              Receitas de Cookie: 34 ideias para qualquer negócio
            </h1>
            <p className="mt-4 text-xl">
              Confira dezenas de receitas sobre cookies, com taxa de sucesso de
              até 95% + dicas de especialistas sobre vendas e organização de
              finanças
            </p>
          </div>
          <div className="grid justify-center mt-8 mb-16 p-7 ">
            <button className="border-2 border-slate-950 rounded-md">
              <a className="block p-2.5 my-2.5" href="#">
                Baixe Grátis o eBook
              </a>
            </button>
            <p className="mt-4">
              Acesse o eBook para Black Friday, promoções e negócios variados.
            </p>
          </div>
        </section>
        <section className="grid justify-center">
          <Cookie />
        </section>
        <section className="grid justify-center px-7">
          {/*Aqui fica a primeira parte depois do header*/}
          <div className="grid">
            <h2 className="text-4xl mb-2.5 mt-6 break-words">
              Aqui terá um subtitulo para enfase do produto
            </h2>
            <ul className="mt-6 mb-14 break-words">
              <li className="mb-2 pl-6 text-lg">Primeira Ideia Introdutoria</li>
              <li className="mb-2 pl-6 text-lg">Segunda Ideia Introdutoria</li>
              <li className="mb-2 pl-6 text-lg">Terceira Ideia Introdutoria</li>
            </ul>
          </div>
        </section>
        <section className="grid border my-0 mx-auto items-center p-7 mt-12 mb-12 max-w-md self-center bg-slate-500 rounded-md">
          <div>
            <h3 className="text-2xl font-bold">
              Seu acesso é grátis e rápido!
            </h3>
          </div>
          <div>
            <p>Preencha em segundos</p>
          </div>
          <div>
            <form action="">
              <div>
                <div className="grid">
                  <label className="mb-1" htmlFor="">
                    Nome*
                  </label>
                  <input
                    className="border-2 border-black rounded-md px-2 mb-4"
                    type="text"
                    name="name"
                    placeholder="Nome *"
                    required="required"
                  />
                </div>
                <div className="grid">
                  <label className="mb-1" htmlFor="">
                    Email*
                  </label>
                  <input
                    className="border-2 border-black rounded-md px-2 mb-4"
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required="required"
                  />
                </div>
                <div className="grid">
                  <label className="mb-1" htmlFor="">
                    Empresa*
                  </label>
                  <input
                    className="border-2 border-black rounded-md px-2 mb-4"
                    type="text"
                    name="company"
                    placeholder="Empresa *"
                    required="required"
                  />
                </div>
                <div className="grid">
                  <label className="mb-1" htmlFor="">
                    1 + 7 = ?
                  </label>
                  <input
                    className="border-2 border-black rounded-md px-2 mb-4"
                    type="text"
                    name="captcha"
                    placeholder="1 + 7 = ? *"
                    required="required"
                  />
                </div>
              </div>
              <div className="grid font-bold ">
                <button className="mt-4 py-px px-2.5 border-2 border-black rounded-md">
                  BAIXE GRÁTIS AGORA
                </button>
              </div>
            </form>
          </div>
          <div className="my-2.5 ">
            <p className="text-sm mt-2">
              Ao preencher o formulário, concordo * em receber comunicações de
              acordo com meus interesses.
            </p>
            <p className="text-sm mt-2">
              Ao informar meus dados, eu concordo com a Política de privacidade.
            </p>
            <p className="text-sm mt-2  ">
              *Você pode alterar suas permissões de comunicação a qualquer
              tempo.
            </p>
          </div>
        </section>

        <section className="grid border my-0 mx-auto items-center p-7 mt-12 mb-12 max-w-md self-center bg-slate-500 rounded-md">
          {/*Aqui fica a segunda parte depois do header*/}
          <div>
            <Img1 />
          </div>
        </section>

        <section className="grid border my-0 mx-auto items-center p-7 mt-12 mb-12 max-w-md self-center bg-slate-500 rounded-md">
          {/*Aqui fica a terceira parte depois do header*/}
          <div className="text-white">
            <h4>O que você vai ver:</h4>
          </div>
        </section>
      </main>
      <footer className="flex justify-center p-7 bg-slate-500 text-white">
        <h4>
          Copyright &copy; 2025 Pedacinhos de Céu - Política de Privacidade
        </h4>
      </footer>
    </div>
  );
}

export default App;
