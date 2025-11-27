import { Projeto } from "@/types/projeto";
import projetosData from "@/data/projetos.json";

/**
 * Serviço de Projetos
 * Gerencia a busca e manipulação dos dados de projetos
 * Pode ser facilmente substituído por uma API real no futuro
 */

// Simula um pequeno delay para parecer uma chamada de API
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Busca todos os projetos
 */
export const buscarTodosProjetos = async (): Promise<Projeto[]> => {
  await delay(100);
  return projetosData as Projeto[];
};

/**
 * Busca um projeto específico pelo ID
 */
export const buscarProjetoPorId = async (id: string): Promise<Projeto | null> => {
  await delay(100);
  const projetos = projetosData as Projeto[];
  const projeto = projetos.find(p => p.id === id);
  return projeto || null;
};

/**
 * Busca projetos com limite (para exibição na home)
 */
export const buscarProjetosDestaque = async (limite: number = 3): Promise<Projeto[]> => {
  await delay(100);
  const projetos = projetosData as Projeto[];
  return projetos.slice(0, limite);
};
