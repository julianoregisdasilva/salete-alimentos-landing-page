import calabresaAsset from "@/assets/calabresa.png.asset.json";
import calabresaCheddarAsset from "@/assets/calabresa_com_cheddar.png.asset.json";
import camaraoAsset from "@/assets/camarao.png.asset.json";
import carneBolonhesaAsset from "@/assets/carne_bolonhesa.png.asset.json";

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
      { name: "Calabresa", image: calabresaAsset.url },
      { name: "Calabresa com Cheddar", image: calabresaCheddarAsset.url },
      { name: "Camarão", image: camaraoAsset.url },
      { name: "Carne Bolonhesa", image: carneBolonhesaAsset.url },
      { name: "Carne ao Molho Branco" },
      { name: "Frango" },
      { name: "Frango (massa integral)" },
      { name: "Frango com Palmito" },
      { name: "Frango com Requeijão" },
      { name: "Frango com Requeijão (massa integral)" },
      { name: "Frango, Milho e Bacon" },
      { name: "Frango Premium" },
      { name: "Mexicana" },
      { name: "Pizza" },
      { name: "Presunto e Queijo" },
      { name: "Ricota com Chester e Alho Poró" },
      { name: "Ricota com Tomate Seco" },
    ],
  },
  {
    title: "Empanadas Vegetarianas",
    products: [
      { name: "Brócolis com Requeijão" },
      { name: "Legumes" },
      { name: "Palmito" },
      { name: "Queijo" },
    ],
  },
  {
    title: "Empanadas Doces",
    products: [{ name: "Chocolate" }],
  },
  {
    title: "Salgados & Petiscos",
    products: [
      { name: "Coxinha de Frango" },
      { name: "Salsicha" },
      { name: "Doguinho" },
      { name: "Pão de Queijo" },
    ],
  },
];