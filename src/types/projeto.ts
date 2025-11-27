/**
 * Tipos relacionados aos projetos/blog
 */

export interface Projeto {
  id: string;
  titulo: string;
  imagem: string;
  imagens?: string[];
  resumo: string;
  conteudo: string;
}
