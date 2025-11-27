import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Componente Botao
 * Botão reutilizável com variantes de estilo
 */

export type VarianteBotao = "primario" | "secundario" | "outline" | "ghost";
export type TamanhoBotao = "sm" | "md" | "lg";

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: VarianteBotao;
  tamanho?: TamanhoBotao;
  carregando?: boolean;
}

const variantesEstilo: Record<VarianteBotao, string> = {
  primario: `
    bg-primaria text-primaria-foreground 
    hover:bg-primaria-escura hover:shadow-lg hover:-translate-y-0.5
    shadow-suave
  `,
  secundario: `
    bg-secundaria text-secundaria-foreground 
    hover:bg-secundaria-escura hover:shadow-lg hover:-translate-y-0.5
  `,
  outline: `
    border-2 border-primaria text-primaria bg-transparent
    hover:bg-primaria hover:text-primaria-foreground
  `,
  ghost: `
    text-primaria bg-transparent
    hover:bg-primaria/10
  `,
};

const tamanhosEstilo: Record<TamanhoBotao, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Botao = forwardRef<HTMLButtonElement, BotaoProps>(
  (
    {
      className,
      variante = "primario",
      tamanho = "md",
      carregando = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || carregando}
        className={cn(
          // Estilos base
          "inline-flex items-center justify-center gap-2",
          "font-corpo font-semibold rounded-lg",
          "transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-primaria/50 focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
          // Variante
          variantesEstilo[variante],
          // Tamanho
          tamanhosEstilo[tamanho],
          className
        )}
        {...props}
      >
        {carregando && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Botao.displayName = "Botao";

export default Botao;
