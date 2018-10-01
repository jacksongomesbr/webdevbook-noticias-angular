/**
 * Classe Noticia.
 */
export class Noticia {
    /**
     * O identificador da notícia
     */
    id: number;

    /**
     * O título da notícia
     */
    titulo: string;

    /**
     * O resumo da notícia
     */
    resumo: string;

    /**
     * O conteúdo da notícia
     */
    conteudo: string;

    /**
     * O nome do autor da notícia
     */
    autor: string;

    /**
     * O e-mail do autor da notícia
     */
    emailDoAutor: string;

    /**
     * A data da notícia
     */
    data: Date;

    /**
     * O indicador de notícia destaque
     */
    destaque: Boolean = false;

    /**
     * A url da foto da notícia
     */
    fotoUrl: string;

    /**
     * Construtor da classe. O código trata o valor do parâmetro `data` da seguinte forma:
     * 
     * a) se estiver definido, então:
     *   * se for do tipo string, então usa o construtor de `Date` para criar um objeto `Date`
     *   * senão, atribui diretamente
     * 
     * b) senão, atribui null
     *
     * @param id O identificador da notícia
     * @param titulo O título da notícia
     * @param resumo O resumo da notícia
     * @param conteudo O conteúdo da notícia
     * @param autor O nome do autor da notícia
     * @param emailDoAutor O e-mail do autor da notícia
     * @param data A data da publicação da notícia
     * @param destaque O indicador de notícia destaque
     * @param fotoUrl A url da foto da notícia
     */
    constructor(id: number, titulo: string, resumo: string, conteudo: string, autor: string, emailDoAutor: string,
        data: Date|string, destaque: Boolean = false, fotoUrl: string = null) {
        this.id = id;
        this.titulo = titulo;
        this.resumo = resumo;
        this.conteudo = conteudo;
        this.autor = autor;
        this.emailDoAutor = emailDoAutor;
        if (data) {
            if (typeof data === 'string') {
                this.data = new Date(data);
            } else {
                this.data = data;
            }
        } else {
            this.data = null;
        }
        this.destaque = destaque;
        this.fotoUrl = fotoUrl;
    }

    /**
     * Consulta a situação da notícia para verificar se está publicada:
     *
     * a) se a data [de publicação] não está definida, então a notícia não está publicada;
     * b) se a data [de publicação] é maior que a data atual, então a notícia não está publicada;
     * c) se a data [de publicação] é menor ou igual que a data atual, então a notícia está publicada.
     *
     * @returns boolean True indica que a notícia está publicada, False cc.
     */
    estahPublicada(): boolean {
        // checa se a data está definida
        if (!this.data) {
            return false;
        }
        // checa se a data é maior que a data atual
        const dataAtual = new Date();
        if (this.data > dataAtual) {
            return false;
        }
        // casos esgotados, notícia publicada
        return true;
    }
}
