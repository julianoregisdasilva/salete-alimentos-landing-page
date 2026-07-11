import { UtensilsCrossed } from "lucide-react";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  onOpen: (product: Product) => void;
};

export function ProductCard({ product, onOpen }: ProductCardProps) {
  const clickable = Boolean(product.image);

  return (
    <button
      type="button"
      onClick={() => clickable && onOpen(product)}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-shadow ${
        clickable ? "cursor-zoom-in hover:shadow-lg" : "cursor-default"
      }`}
      aria-label={clickable ? `Ver ${product.name} em tamanho maior` : product.name}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream">
        {product.image ? (
          <img
            src={product.image}
            alt={`Empanada de ${product.name}`}
            loading="lazy"
            className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <UtensilsCrossed className="h-8 w-8 opacity-40" aria-hidden="true" />
            <span className="text-xs font-medium opacity-60">Foto em breve</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 items-center px-4 py-3">
        <h3 className="font-sans text-sm font-bold leading-snug text-foreground">
          {product.name}
        </h3>
      </div>
    </button>
  );
}