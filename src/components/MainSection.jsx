import Cookie from './Cookie'; // Certifique-se de importar o componente Cookie

const MainSection = () => {
  return (
    <section id="MainSection" className="grid grid-cols-2 max-md:grid-cols-1 justify-center max-md:bg-orange-200 bg-gradient-to-r from-orange-200 from-50% rounded-md text-slate-800">
      <div className="my-8 px-7">
        <p className="mt-4 text-xl">eBook Grátis</p>
        <h1 className="text-4xl">
          Receitas de Cookie: 34 ideias para qualquer negócio
        </h1>
        <p className="mt-4 text-xl">
          Confira dezenas de receitas sobre cookies, com taxa de sucesso de até
          95% + dicas de especialistas sobre vendas e organização de finanças
        </p>
        <div className="grid justify-center mt-8 mb-16 p-7">
          <button className="my-2 mx-auto border-2 border-orange-300 rounded-md hover:bg-orange-300">
            <a className="block p-2.5 my-2.5 font-bold" href="/documento.png"
                download="documento.png"
                type="application/png"
                target="_blank">
              BAIXE GRÁTIS O E-BOOK
            </a>
          </button>
          <p className="mt-4">
            Acesse o eBook para Black Friday, promoções e negócios variados.
          </p>
        </div>
      </div>
      <div className="grid my-0 mx-auto items-center">
        <Cookie />
      </div>
    </section>
  );
};

export default MainSection;