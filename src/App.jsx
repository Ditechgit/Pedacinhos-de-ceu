import Cookie from "./components/Cookie";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="m-0 p-0 flex flex-col items-center justify-center">
      <header className="flex inset-0">
          <section className="flex flex-col">
            <Logo />
            <p className="text-xl">eBook Gratis</p>
            <h2 className="text-4xl">Receitas de Cookie: 34 ideias para qualquer negócio</h2>
            <p className="text-xl">
              Confira dezenas de receitas sobre cookies, com taxa de sucesso de
              até 95% + dicas de especialistas sobre vendas e organização de
              finanças
            </p>
            <div>
              <button className="text-base">Baixe Grátis o eBook</button>
              <p>Acesse o eBook para Black Friday, promções e negócios variados</p>
            </div>
          </section>
          <section className="">
            <Cookie />
          </section>
      </header>
      <main className="flex">
          <section> {/*Aqui fica a primeira parte depois do header*/}
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

          <section> {/*Aqui fica a segunda parte depois do header*/}

          </section>

          <section> {/*Aqui fica a terceira parte depois do header*/}

          </section>
      </main>
      <footer className="flex">
        <h4>Copyright &copy; 2025 Pedacinhos de Céu - Política de Privacidade</h4>
      </footer>
    </div>
  );
}

export default App;
