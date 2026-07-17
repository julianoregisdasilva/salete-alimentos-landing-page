export type Product = {
  name: string;
  image?: string;
};

export type ProductCategory = {
  title: string;
  subtitle?: string;
  products: Product[];
};

export const categories: ProductCategory[] = [
  {
    title: "Empanadas Salgadas",
    products: [
      { name: "Calabresa", image: "images/calabresa.png" },
      { name: "Calabresa com Cheddar", image: "images/calabresa_com_cheddar.png" },
      { name: "Camarão", image: "images/camarao.png" },
      { name: "Carne Bolonhesa", image: "images/carne_bolonhesa.png" },
      { name: "Carne ao Molho Branco", image: "images/carne_molho_branco.png"  },
      { name: "Frango", image: "images/frango.png" },
      { name: "Frango (massa integral)", image: "images/frango_integral.png" },
      { name: "Frango com Palmito", image: "images/frango_palmito.png" },
      { name: "Frango com Requeijão", image: "images/frango_requeijao.png" },
      { name: "Frango com Requeijão (massa integral)", image: "images/frango_requeijao_integral.png" },
      { name: "Frango, Milho e Bacon", image: "images/frango_milho_bacon.png" },
      { name: "Frango Premium", image: "images/frango_premium.png" },
      { name: "Mexicana", image: "images/mexicana.png" },
      { name: "Pizza", image: "images/pizza.png" },
      { name: "Presunto e Queijo", image: "images/presunto_queijo.png" },
      { name: "Ricota com Chester e Alho Poró", image: "images/ricota_chester_alhoPoro.png" },
      { name: "Ricota com Tomate Seco", image: "images/ricota_tomateSeco.png" },
    ],
  },
  {
    title: "Empanadas Vegetarianas",
    products: [
      { name: "Brócolis com Requeijão", image: "images/brocolis.png" },
      { name: "Legumes", image: "images/legumes.png" },
      { name: "Palmito", image: "images/palmito.png" },
      { name: "Queijo", image: "images/queijo.png" },
    ],
  },
  {
    title: "Empanadas Doces",
    products: [{ name: "Chocolate", image: "images/chocolate.png" }],
  },
  {
    title: "Salgados & Petiscos",
    products: [
      { name: "Coxinha de Frango", image: "images/coxinha.png" },
      { name: "Salsicha", image: "images/salsicha.png" },
      { name: "Doguinho", image: "images/doguinho.png" },
      { name: "Pão de Queijo", image: "images/pao_de_queijo.png" },
    ],
  },
  {
    title: "Videos",
    videos: [
      { name: "Vídeo1", url: "videos/video1.mp4"},
      { name: "Vídeo2", url: "videos/video2.mp4"},
    ]
];
