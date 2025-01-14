import Cookie from "./components/Cookie";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="m-0 p-0 box-border">
      <header className="flex justify-around items-center">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex gap-20">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="grid grid-cols-2 justify-self-center">
        <section className="">
          <div className="">
            <p className="">eBook Gratis</p>
            <h2 className="">
              Receitas de Cookie: 34 ideias para qualquer negócio
            </h2>
            <p className="">
              Confira dezenas de receitas sobre cookies, com taxa de sucesso de
              até 95% + dicas de especialistas sobre vendas e organização de
              finanças
            </p>
          </div>
          <div>
            <button className="">Baixe Grátis o eBook</button>
            <p>
              Acesse o eBook para Black Friday, promções e negócios variados
            </p>
          </div>
        </section>
        <section className="">
          <Cookie />
        </section>
        <section>
          {" "}
          {/*Aqui fica a primeira parte depois do header*/}
          <div>
            <h2>Aqui terá um subtitulo para enfase do produto</h2>
            <ul>
              <li>Primeira Ideia Introdutoria</li>
              <li>Segunda Ideia Introdutoria</li>
              <li>Terceira Ideia Introdutoria</li>
            </ul>
          </div>
          <div>
            <h2>Aqui vai ficar o formulario da pagina</h2>
          </div>
        </section>

        <section> {/*Aqui fica a segunda parte depois do header*/}</section>

        <section> {/*Aqui fica a terceira parte depois do header*/}</section>
      </main>
      <footer className="">
        <h4>
          Copyright &copy; 2025 Pedacinhos de Céu - Política de Privacidade
        </h4>
      </footer>
    </div>
  );
}

export default App;
