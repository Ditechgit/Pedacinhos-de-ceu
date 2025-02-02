import ListItem from "./ListItem";

const FaqSection = () => {
  return (
    <section className="flex flex-col items-center mb-28 px-7 text-orange-100">
      <h2 className="text-4xl mb-20 mt-6 break-words font-bold">
        Duvidas Frequentes:
      </h2>
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        {/* Primeira coluna de perguntas */}
        <div className="grid gap-8 px-7">
          <div>
            <h5 className="font-bold mb-2">O que é uma Landing Page?</h5>
            <p>
              Uma Landing Page, ou página de captura, é uma página criada
              especificamente para conversão, transformando visitantes em
              clientes. Diferente de um site comum, ela tem o objetivo de
              destacar uma oferta específica, como deliciosos cookies
              artesanais.
            </p>
            <p>
              Os exemplos de Landing Pages que trazemos aqui são perfeitos para
              campanhas de Marketing Digital voltadas à venda de cookies e têm
              altas taxas de conversão.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-2">Para que serve uma Landing Page?</h5>
            <p>
              Uma Landing Page serve para apresentar sua oferta de cookies de
              maneira irresistível aos visitantes do seu site. Isso facilita a
              transformação de visitantes em clientes ao capturar informações
              essenciais e incentivá-los a realizar a compra.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-2">
              Quais são os principais elementos de uma Landing Page?
            </h5>
            <p className="mb-2">
              Os principais elementos que uma Landing Page de cookies deve ter
              são:
            </p>
            <ul className="px-6">
              <ListItem>
                Título e subtítulo: Destaque o sabor e a exclusividade dos seus
                cookies.
              </ListItem>
              <ListItem>
                Imagens: Fotos de alta qualidade que despertem o apetite.
              </ListItem>
              <ListItem>
                Descrição da oferta: Explique o que torna seus cookies únicos
                (ingredientes, receitas artesanais, opções veganas, etc.).
              </ListItem>
              <ListItem>
                Formulário: Para coleta de informações de clientes interessados.
              </ListItem>
              <ListItem>
                CTA: Botões chamativos como “Compre Agora” ou “Experimente
                nossos Cookies”.
              </ListItem>
            </ul>
          </div>
        </div>

        {/* Segunda coluna de perguntas */}
        <div className="grid gap-8 px-7">
          <div>
            <h5 className="font-bold mb-2">
              Por que usar nossos exemplos de Landing Pages para vender cookies?
            </h5>
            <p className="mb-2">
              Além de oferecer exemplos adaptáveis para diversos estilos e
              públicos, nosso material inclui dicas de especialistas sobre:
            </p>
            <ul className="px-6">
              <li className="list-disc mb-2">
                Combinações de cores que estimulam o apetite.
              </li>
              <li className="list-disc mb-2">
                Posicionamento estratégico de imagens e CTAs.
              </li>
              <li className="list-disc mb-2">
                Técnicas de copywriting para convencer o cliente a comprar seus
                cookies.
              </li>
            </ul>
          </div>

          <div>
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
              Por que o Pedacinhos de Céu facilita a criação de Landing Pages
              para cookies?
            </h5>
            <p>
              Com mais de 120 templates customizáveis, o Pedacinhos de Céu
              permite que você arraste e solte elementos para criar uma página
              única. Isso significa que você pode criar uma Landing Page
              incrível para os seus cookies sem se preocupar com design ou
              código.
            </p>
            <p>
              Além disso, é fácil acompanhar os resultados e ajustar sua Landing
              Page para aumentar suas vendas de cookies!
            </p>
          </div>
        </div>
      </div>

      {/* Botão de ação */}
      <div className="grid font-bold justify-center mt-10 mb-8">
        <button className="my-2 mx-auto size-full py-px px-2.5 border-2 border-orange-300 rounded-md text-orange-100 hover:bg-orange-300">
          <a href="../public/documento.pdf" download>BAIXE GRÁTIS AGORA</a>
        </button>
      </div>
    </section>
  );
};

export default FaqSection;
