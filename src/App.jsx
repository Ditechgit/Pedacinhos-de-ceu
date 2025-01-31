import Cookie from "./components/Cookie";
import Img1 from "./components/Img1";
import Logo from "./components/Logo";
import Check from "./components/Check";
import Check1 from "./components/Check1";

function App() {
  return (
    <div className="m-0 p-0 box-border list-none font-serif">
      <header className="flex justify-around items-center flex-wrap p-5">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex ">
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
      <main className="grid grid-cols-1 gap-5 max-w-7xl my-0 mx-auto items-center">
        <section className="grid grid-cols-2 max-md:grid-cols-1 justify-center max-md:bg-orange-200 bg-gradient-to-r from-orange-200 from-50% rounded-md text-slate-800 ">
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
            <div className="grid justify-center mt-8 mb-16 p-7 ">
              <button className="my-2 mx-auto border-2 border-orange-300 rounded-md hover:bg-orange-300">
                <a className="block p-2.5 my-2.5 font-bold" href="#">
                  Baixe Grátis o eBook
                </a>
              </button>
              <p className="mt-4">
                Acesse o eBook para Black Friday, promoções e negócios variados.
              </p>
            </div>
          </div>
          <div className="grid my-0 mx-auto items-center ">
            <Cookie />
          </div>
        </section>

        <section className="grid grid-cols-2 px-7 max-md:grid-cols-1">
          {/*Aqui fica a primeira parte depois do header*/}
          <div className="grid content-center items-end px-7">
            <h2 className="text-4xl mb-2.5 mt-6 break-words">
              Exemplos de Landing Pages para impulsionar sua estratégia com
              cookies irresistíveis:
            </h2>
            <ul className="mb-14 break-words mt-8">
              <li className="flex mb-2 text-lg">
                <Check />
                Varejo: Mostre uma seleção irresistível de cookies com fotos
                tentadoras, preços atrativos e botões de (Comprar Agora).
              </li>
              <li className="flex mb-2 text-lg">
                <Check />
                Serviços personalizados: Ofereça cookies sob encomenda para
                eventos, com depoimentos e um cálculo de pedidos fácil.
              </li>
              <li className="flex mb-2 text-lg">
                <Check />
                Promoções sazonais: Destaque ofertas especiais para datas
                comemorativas com contagem regressiva e descontos exclusivos.
              </li>
            </ul>
          </div>

          <div className="grid border my-0 mx-auto p-7 mt-12 mb-12 max-w-md self-center bg-orange-200 rounded-md text-slate-800">
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
                      className="border-2 border-slate-100 rounded-md px-2 mb-4"
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
                      className="border-2 border-slate-100 rounded-md px-2 mb-4"
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
                      className="border-2 border-slate-100 rounded-md px-2 mb-4"
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
                      className="border-2 border-slate-100 rounded-md px-2 mb-4"
                      type="text"
                      name="captcha"
                      placeholder="1 + 7 = ? *"
                      required="required"
                    />
                  </div>
                </div>
                <div className="grid font-bold ">
                  <button className="my-2 mx-auto py-px px-2.5 border-2 border-orange-300 rounded-md hover:bg-orange-300">
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
                Ao informar meus dados, eu concordo com a Política de
                privacidade.
              </p>
              <p className="text-sm mt-2  ">
                *Você pode alterar suas permissões de comunicação a qualquer
                tempo.
              </p>
            </div>
          </div>
        </section>

        <section className="">
          <div className="grid grid-cols-2 max-md:grid-cols-1 items-center my-0 mx-auto p-7 mt-12 mb-12 max-w-max self-center  bg-gradient-to-r max-md:from-orange-200 max-md:to-orange-200 from-white to-orange-200 to-50% rounded-md py-28">
            {/*Aqui fica a segunda parte depois do header*/}
            <div className="">
              <Img1 />
            </div>
            {/*Aqui fica a terceira parte depois do header*/}
            <div className="my-0 mx-auto text-slate-800 ">
              <h4 className="mb-4 text-lg">O que você vai ver:</h4>
              <ul>
                <li className="flex mb-2 text-lg ">
                  <Check1 />
                  34 Exemplos de Landing Pages para vender cookies irresistíveis
                </li>
                <li className="flex mb-2 text-lg">
                  <Check1 />
                  Ferramentas para criar Landing Pages de doces eficazes
                </li>
                <li className="flex mb-2 text-lg">
                  <Check1 />
                  Layout ✔️ Estratégia ✔️ Distribuição ✔️ focados no mundo dos
                  cookies
                </li>
                <li className="flex mb-2 text-lg">
                  <Check1 />
                  Dicas de cores, textos e vídeos para destacar seus produtos
                </li>
                <li className="flex mb-2 text-lg">
                  <Check1 />
                  Modelos de Landing Pages adaptados para varejo, eventos e
                  promoções sazonais!
                </li>
              </ul>
            </div>
          </div>

          <div className="grid font-bold justify-center -mt-32 mb-8">
            <button className="my-2 mx-auto size-full py-px px-2.5 border-2 border-orange-300 rounded-md text-slate-800 hover:bg-orange-300 ">
              BAIXE GRÁTIS AGORA
            </button>
          </div>
        </section>

        <section className="flex flex-col items-center mb-28 px-7">
          <h2 className="text-4xl mb-20 mt-6 break-words font-bold">
            Duvidas Frequentes:
          </h2>
          <div className="grid grid-cols-2 max-md:grid-cols-1">
            <div className="grid gap-8 px-7">
              <div className="">
                <h5 className="font-bold mb-2">O que é uma Landing Page?</h5>
                <p>
                  Uma Landing Page, ou página de captura, é uma página criada
                  especificamente para conversão, transformando visitantes em
                  clientes. Diferente de um site comum, ela tem o objetivo de
                  destacar uma oferta específica, como deliciosos cookies
                  artesanais.
                </p>
                <p>
                  Os exemplos de Landing Pages que trazemos aqui são perfeitos
                  para campanhas de Marketing Digital voltadas à venda de
                  cookies e têm altas taxas de conversão.
                </p>
              </div>

              <div className="">
                <h5 className="font-bold mb-2">
                  Para que serve uma Landing Page?
                </h5>
                <p>
                  Uma Landing Page serve para apresentar sua oferta de cookies
                  de maneira irresistível aos visitantes do seu site. Isso
                  facilita a transformação de visitantes em clientes ao capturar
                  informações essenciais e incentivá-los a realizar a compra.
                </p>
              </div>

              <div className="">
                <h5 className="font-bold mb-2">
                  Quais são os principais elementos de uma Landing Page?
                </h5>
                <p className="mb-2">
                  Os principais elementos que uma Landing Page de cookies deve
                  ter são:
                </p>
                <ul className="px-6">
                  <li className="list-disc mb-2">
                    Título e subtítulo: Destaque o sabor e a exclusividade dos
                    seus cookies.
                  </li>
                  <li className="list-disc mb-2">
                    Imagens: Fotos de alta qualidade que despertem o apetite.
                  </li>
                  <li className="list-disc mb-2">
                    Descrição da oferta: Explique o que torna seus cookies
                    únicos (ingredientes, receitas artesanais, opções veganas,
                    etc.).
                  </li>
                  <li className="list-disc mb-2">
                    Formulário: Para coleta de informações de clientes
                    interessados.
                  </li>
                  <li className="list-disc mb-2">
                    CTA: Botões chamativos como “Compre Agora” ou “Experimente
                    nossos Cookies”.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid gap-8 px-7">
              <div className="">
                <h5 className="font-bold mb-2">
                  Por que usar nossos exemplos de Landing Pages para vender
                  cookies?
                </h5>
                <p className="mb-2">
                  Além de oferecer exemplos adaptáveis para diversos estilos e
                  públicos, nosso material inclui dicas de especialistas sobre:
                </p>
                <ul className="px-6">
                  <li className="list-disc mb-2">Combinações de cores que estimulam o apetite.</li>
                  <li className="list-disc mb-2">Posicionamento estratégico de imagens e CTAs.</li>
                  <li className="list-disc mb-2">
                    Técnicas de copywriting para convencer o cliente a comprar
                    seus cookies.
                  </li>
                </ul>
              </div>

              <div className="">
                <h5 className="font-bold mb-2">
                  Como criar uma Landing Page para venda de cookies?
                </h5>
                <p>
                  Você pode economizar tempo e aumentar sua produtividade usando
                  ferramentas que tornam a criação de Landing Pages simples e
                  rápida. Com o Pedacinhos de Céu, você pode criar Landing Pages
                  encantadoras em poucos minutos para destacar seus cookies.
                </p>
              </div>

              <div>
                <h5 className="font-bold mb-2">
                  Por que o Pedacinhos de Céu facilita a criação de Landing
                  Pages para cookies?
                </h5>
                <p>
                  Com mais de 120 templates customizáveis, o Pedacinhos de Céu
                  permite que você arraste e solte elementos para criar uma
                  página única. Isso significa que você pode criar uma Landing
                  Page incrível para os seus cookies sem se preocupar com design
                  ou código.
                </p>
                <p>
                  Além disso, é fácil acompanhar os resultados e ajustar sua
                  Landing Page para aumentar suas vendas de cookies!
                </p>
              </div>
            </div>
          </div>
          <div className="grid font-bold justify-center mt-10 mb-8">
            <button className="my-2 mx-auto size-full py-px px-2.5 border-2 border-orange-300 rounded-md text-slate-800 hover:bg-orange-300 ">
              BAIXE GRÁTIS AGORA
            </button>
          </div>
        </section>
      </main>
      <footer className="flex justify-center p-7 bg-orange-200 text-slate-800">
        <h4>
          Copyright &copy; 2025 Pedacinhos de Céu - Política de Privacidade
        </h4>
      </footer>
    </div>
  );
}

export default App;
