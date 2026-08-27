export type Product = {
  name: string;
  image?: string;
  thumb?: string;
};

export type ProductCategory = {
  title: string;
  subtitle?: string;
  products: Product[];
};

const publicImage = (fileName: string) => `${import.meta.env.BASE_URL}images/${fileName}`;
const publicThumb = (fileName: string) => `${import.meta.env.BASE_URL}images/thumbs/${fileName}`;

export const categories: ProductCategory[] = [
  {
    title: "Empanadas Salgadas",
    products: [
      { name: "Calabresa", image: publicImage("calabresa.png"), thumb: publicThumb("calabresa.png") },
      { name: "Calabresa com Cheddar", image: publicImage("calabresa_com_cheddar.png") },
      { name: "Camarão", image: publicImage("camarao.png") },
      { name: "Carne Bolonhesa", image: publicImage("carne_bolonhesa.png") },
      { name: "Carne ao Molho Branco", image: publicImage("carne_molho_branco.png")  },
      { name: "Frango", image: publicImage("frango.png") },
      { name: "Frango (massa integral)", image: publicImage("frango_integral.png") },
      { name: "Frango com Palmito", image: publicImage("frango_palmito.png") },
      { name: "Frango com Requeijão", image: publicImage("frango_requeijao.png") },
      { name: "Frango com Requeijão (massa integral)", image: publicImage("frango_requeijao_integral.png") },
      { name: "Frango, Milho e Bacon", image: publicImage("frango_milho_bacon.png") },
      { name: "Frango Premium", image: publicImage("frango_premium.png") },
      { name: "Mexicana", image: publicImage("mexicana.png") },
      { name: "Pizza", image: publicImage("pizza.png"), thumb: publicThumb("pizza.png") },
      { name: "Presunto e Queijo", image: publicImage("presunto_queijo.png"), thumb: publicThumb("presunto_queijo.png") },
      { name: "Ricota com Chester e Alho Poró", image: publicImage("ricota_chester_alhoPoro.png"), thumb: publicThumb("ricota_chester_alhoPoro.png") },
      { name: "Ricota com Tomate Seco", image: publicImage("ricota_tomateSeco.png"), thumb: publicThumb("ricota_tomateSeco.png") },
    ],
  },
  {
    title: "Empanadas Vegetarianas",
    products: [
      { name: "Brócolis com Requeijão", image: publicImage("brocolis.png"), thumb: publicThumb("brocolis.png") },
      { name: "Legumes", image: publicImage("legumes.png") },
      { name: "Palmito", image: publicImage("palmito.png"), thumb: publicThumb("palmito.png") },
      { name: "Queijo", image: publicImage("queijo.png"), thumb: publicThumb("queijo.png") },
    ],
  },
  {
    title: "Empanadas Doces",
    products: [
      { name: "Chocolate", image: publicImage("chocolate.png") }
    ],
  },
  {
    title: "Salgados & Petiscos",
    products:  [
      { name: "Coxinha de Frango", image: publicImage("coxinha.png") },
      { name: "Salsicha", image: publicImage("salsicha.png"), thumb: publicThumb("salsicha.jpg") },
      { name: "Doguinho", image: publicImage("doguinho.png") },
      { name: "Pão de Queijo", image: publicImage("pao_de_queijo.png"), thumb: publicThumb("pao_de_queijo.png") },
    ],
  }
];
