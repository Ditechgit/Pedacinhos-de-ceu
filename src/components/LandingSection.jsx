import Check from "./Check"; // Certifique-se de importar o componente Check

const LandingSection = () => {
  return (
    <section className="grid grid-cols-2 px-7 max-md:grid-cols-1">
      {/* Primeira parte: Descrição */}
      <div className="grid content-center items-end px-7 text-orange-100">
        <h2 className="text-4xl mb-2.5 mt-6 break-words">
          Exemplos de Landing Pages para impulsionar sua estratégia com cookies
          irresistíveis:
        </h2>
        <ul className="mb-14 break-words mt-8">
          <li className="flex mb-2 text-lg">
            <Check />
            Varejo: Mostre uma seleção irresistível de cookies com fotos
            tentadoras, preços atrativos e botões de (Comprar Agora).
          </li>
          <li className="flex mb-2 text-lg">
            <Check />
            Serviços personalizados: Ofereça cookies sob encomenda para eventos,
            com depoimentos e um cálculo de pedidos fácil.
          </li>
          <li className="flex mb-2 text-lg">
            <Check />
            Promoções sazonais: Destaque ofertas especiais para datas
            comemorativas com contagem regressiva e descontos exclusivos.
          </li>
        </ul>
      </div>

      {/* Segunda parte: Formulário */}
      <div className="grid border my-0 mx-auto p-7 mt-12 mb-12 max-w-md self-center bg-orange-200 rounded-md text-slate-800">
        <div>
          <h3 className="text-2xl font-bold">Seu acesso é grátis e rápido!</h3>
        </div>
        <div className="mb-4">
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
            <div className="grid font-bold">
              <button className="my-2 mx-auto py-px px-2.5 border-2 border-orange-300 rounded-md hover:bg-orange-300">
                <a href="../public/documento.pdf" download>
                  BAIXE GRÁTIS AGORA
                </a>
              </button>
            </div>
          </form>
        </div>
        <div className="my-2.5">
          <p className="text-sm mt-2">
            Ao preencher o formulário, concordo * em receber comunicações de
            acordo com meus interesses.
          </p>
          <p className="text-sm mt-2">
            Ao informar meus dados, eu concordo com a Política de privacidade.
          </p>
          <p className="text-sm mt-2">
            *Você pode alterar suas permissões de comunicação a qualquer tempo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
