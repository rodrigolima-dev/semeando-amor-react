import { useQuery } from "@tanstack/react-query";
import { 
  buscarTodosProjetos, 
  buscarProjetoPorId, 
  buscarProjetosDestaque 
} from "@/services/projetosService";

/**
 * Hooks customizados para gerenciamento de projetos
 * Utiliza React Query para cache e gerenciamento de estado
 */

/**
 * Hook para buscar todos os projetos
 */
export const useTodosProjetos = () => {
  return useQuery({
    queryKey: ["projetos"],
    queryFn: buscarTodosProjetos,
  });
};

/**
 * Hook para buscar um projeto específico
 */
export const useProjeto = (id: string) => {
  return useQuery({
    queryKey: ["projeto", id],
    queryFn: () => buscarProjetoPorId(id),
    enabled: !!id,
  });
};

/**
 * Hook para buscar projetos em destaque (home)
 */
export const useProjetosDestaque = (limite?: number) => {
  return useQuery({
    queryKey: ["projetos-destaque", limite],
    queryFn: () => buscarProjetosDestaque(limite),
  });
};
