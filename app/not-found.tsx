import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center p-4">
      <div className="bento-card max-w-md w-full p-8 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary mx-auto flex items-center justify-center border border-primary/20">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <div>
          <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest block mb-1">
            Error 404
          </span>
          <h1 className="text-2xl font-black text-foreground tracking-tight mb-2">
            Página No Encontrada
          </h1>
          <p className="text-sm text-muted-foreground">
            La página que buscas no existe o ha sido movida a otra ubicación.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-medium text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 shadow-md shadow-primary/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio</span>
        </Link>
      </div>
    </div>
  );
}
