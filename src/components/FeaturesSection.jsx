import Img1 from "./Img1";
import Check1 from "./Check1";

const FeaturesSection = () => {
  return (
    <section>
      <div className="grid grid-cols-2 max-md:grid-cols-1 items-center my-0 mx-auto p-7 mt-12 mb-12 max-w-max self-center bg-gradient-to-r max-md:from-orange-200 max-md:to-orange-200 from-transparent to-orange-200 to-50% rounded-md py-28">
        {/* Parte da imagem */}
        <div>
          <Img1 />
        </div>

        {/* Parte da lista de recursos */}
        <div className="my-0 mx-auto text-slate-800">
          <h4 className="mb-4 text-lg">O que você vai ver:</h4>
          <ul>
            <li className="flex mb-2 text-lg">
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

      {/* Botão de ação */}
      <div className="grid font-bold justify-center -mt-32 mb-8">
        <button className="my-2 mx-auto size-full py-px px-2.5 border-2 border-orange-300 rounded-md text-slate-800 hover:bg-orange-300">
          <a
            href="../public/documento.pdf"
            download="documento.pdf"
            type="application/pdf"
            target="_blank"
          >
            BAIXE GRÁTIS AGORA
          </a>
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection;
