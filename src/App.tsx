import { useState } from "react";
import { Instagram, Leaf, MessageCircle, X } from "lucide-react";
import { categories, type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";

const WHATSAPP_URL = "https://wa.me/5548984440456";
const INSTAGRAM_URL = "https://www.instagram.com/salete.alimentos/";

export default function App() {
  const [lightbox, setLightbox] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brand-red-dark/60 blur-3xl" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-16 text-center md:py-24">
          <img src="images/logo.png" alt="Salete Alimentos" className="h-40 w-auto md:h-52" />
          <h1 className="mt-8 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
            Mais de 30 anos de história em Floripa
          </h1>
          <p className="mt-4 max-w-xl text-lg font-medium text-primary-foreground/90">
            Tradição, qualidade e muito sabor em cada empanada.
          </p>
          <a
            href="#catalogo"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-secondary-foreground transition-transform hover:scale-105"
          >
            Conheça nossos produtos
          </a>
        </div>
      </header>

      <div className="bg-brand-yellow py-3">
        <p className="mx-auto flex max-w-4xl items-center justify-center gap-2 px-4 text-center text-sm font-extrabold uppercase tracking-wide text-secondary-foreground">
          <Leaf className="h-4 w-4 shrink-0" aria-hidden="true" />
          Nossos produtos não contêm conservantes
        </p>
      </div>

      <section
        id="catalogo"
        className="relativ bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/madeira-background.jpeg)` }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow" aria-hidden="true" />
        <main className="relative mx-auto max-w-6xl px-3 py-14 md:px-4 md:py-20">
          <Reveal>
            <h2 className="text-center text-5xl font-semibold text-brand-yellow md:text-6xl">
              Nosso Catálogo
            </h2>
            <p className="mx-auto mt-3 max-w-2xl px-2 text-center text-xl text-white md:text-2xl">
              Feitos artesanalmente, com ingredientes selecionados e sem conservantes.
            </p>
          </Reveal>

          {categories.map((category) => (
            <section key={category.title} className="mt-12">
              <Reveal>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                  <div className="h-1 flex-1 rounded-full bg-brand-yellow/60" />
                </div>
              </Reveal>
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {category.products.map((product, i) => (
                  <Reveal key={product.name} delay={(i % 4) * 70} className="h-full">
                    <ProductCard product={product} onOpen={setLightbox} />
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </main>
      </section>

      <section className="bg-brand-cream py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold text-primary md:text-4xl">
              Por dentro da Salete
            </h2>
          </Reveal>
          <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
            {[{url:'/salete-alimentos-landing-page/videos/video1.mp4'},
              {url:'/salete-alimentos-landing-page/videos/video2.mp4'}].map((v, i) => (
              <Reveal key={v.url} delay={i * 80}>
                <video
                  src={v.url}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-[9/16] w-full rounded-2xl bg-black object-cover shadow-lg"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold md:text-4xl">Fale com a gente</h2>
            <p className="mx-auto mt-3 max-w-md text-primary-foreground/90">
              Faça seu pedido ou tire suas dúvidas pelos nossos canais.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-yellow px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-secondary-foreground transition-transform hover:scale-105 sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/60 px-7 py-3 text-sm font-extrabold uppercase tracking-wide transition-colors hover:bg-primary-foreground/10 sm:w-auto"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
                @salete.alimentos
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-brand-red-dark py-6 text-center text-sm text-primary-foreground/80">
        <p>© {new Date().getFullYear()} Salete Alimentos · Florianópolis, SC</p>
      </footer>

      {lightbox?.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.name}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>
          <figure className="max-h-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.image}
              alt={`Empanada de ${lightbox.name}`}
              className="max-h-[80vh] w-auto rounded-2xl"
            />
            <figcaption className="mt-3 text-center font-display text-xl font-semibold text-white">
              {lightbox.name}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
