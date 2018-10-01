import { Injectable } from '@angular/core';
import { Noticia } from './noticia.model';

/**
 * Serviço que encapsula e implementa as funcionalidades de acesso a dados de notícias.
 */
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  /**
   * A lista de notícias
   */
  lista: Array<Noticia> = [];

  /**
   * O atributo de controle para o gerador de identificadores de notícias (sequência)
   */
  private proximoId = 1;

  constructor() {
    this.cadastrar(new Noticia(null, 'Os seis atos do jogo de equipe da Mercedes que tirou vitória de Bottas e beneficiou Hamilton',
      'Confira o passo a passo da polêmica ordem ao finlandês, o que deu ao companheiro a oitava vitória no campeonato deste ano e a liderança ainda mais folgada na classificação geral.',
      `O Grande Prêmio da Rússia ficará marcado na história da Fórmula 1 como mais um em que as ordens de equipe decidiram um vencedor. No caso, a decisão do chefe da Mercedes, Toto Wolff, em mandar Valtteri Bottas abrir passagem para Lewis Hamilton ocorreu ainda na 25ª de 53 voltas. Naquele momento, o finlandês era o terceiro colocado, logo à frente do inglês, só que Max Verstappen e Kimi Raikkonen, que ocupavam os dois primeiros lugares, ainda teriam de fazer a troca de pneus obrigatória. Ou seja, na prática, a manobra valeu a vitória a Hamilton.
      
      Com o triunfo em Sochi, o inglês abriu uma grande vantagem de 50 pontos sobre Sebastian Vettel na liderança do campeonato, faltando cinco corridas para o fim da temporada. Só que o prejuízo para a imagem da Mercedes foi ainda maior do que sete pontos adicionais conseguidos por Hamilton com o jogo de equipe.`,
      'GloboEsporte.com', null,
      '2018-09-30', false, 'assets/f1.jpg'));
    this.cadastrar(new Noticia(null, 'Passa de 800 o número de mortos na Indonésia devastada por terremoto e tsunami',
      'Número de mortos pode subir, pois há dezenas de desaparecidos e mais de 500 feridos - muitos em estado grave.',
      `O número de mortos nos terremotos e no tsunami que atingiram a ilha indonésia de Sulawesi dobrou e chegou a 832 em um balanço divulgado neste domingo (30). Porém, esse número pode subir, pois 29 pessoas seguem desaparecidas e mais de 500 estão feridas - muitas em estado grave.

Estima-se que 350 mil pessoas tenham sido afetadas pelo terremoto ou pelo tsunami, sendo que 16.732 estão desabrigados ou deslocados desde sexta-feira (28).

A maioria das vítimas foi registrada em Palu, cidade com cerca de 350 mil habitantes na costa oeste da ilha, de acordo com a Agência Nacional de Gestão de Desastres (BNPB, sigla em indonésio). Onze pessoas morreram na vizinha Donggala.

O porta-voz da BNPB, Sutopo Purwo Nugroho, afirmou que um enterro em massa será realizado na cidade de Palu, por questões de segurança sanitária.
`, 'G1', null, '2018-09-30 04:09:00', true, 'assets/destroi.jpg'));
    this.cadastrar(new Noticia(null, 'Morre, aos 89 anos, a cantora Angela Maria',
      'Ela estava internada há 34 dias em hospital de São Paulo',
      `RIO - A cantora Angela Maria, de 89 anos, morreu, na noite deste sábado, após 34 dias internada num hospital particular de São Paulo. A causa da morte ainda não foi divulgada. O velório da artista está acontecendo desde às 10h deste domingo, no Cemitério Congonhas, em Vila Sofia, São Paulo.

    Eleita uma das rainhas do rádio, Angela foi uma das cantoras mais famosas do Brasil nos anos 1950 e 1960. Ela tinha 70 anos de carreira. O empresário da artista, Thiago Marques Luiz, postou, em sua página do Facebook, uma foto ao lado dela e escreveu sobre sua importância no mundo da música.`,
      'O GLOBO', null,
      '2018-09-30 02:08:00', false, 'assets/angelamaria.jpg'));
    this.cadastrar(new Noticia(null, 'No Congresso, 85% dos políticos disputam a eleição de 2018',
      'O GLOBO lança ‘Painel da Reeleição’, gráfico interativo que mede desempenho dos candidatos a ficar em Brasília',
      `BRASÍLIA - No próximo domingo, 85% dos parlamentares tentarão conquistar votos suficientes para permanecer no Congresso Nacional. Nesse grupo, estão os que almejam a reeleição, mas também quem deseja trocar de Casa, ou seja, senadores que concorrem à Câmara e deputados que tentam uma vaga no Senado. Para auxiliar os eleitores na avaliação de quem hoje ocupa um mandato no Legislativo Federal, o site do GLOBO lança neste domingo, um gráfico interativo com dados sobre a atuação de cada um dos congressistas e como se posicionaram em votações importantes dos últimos quatro anos.
    
    Enquanto 41 deputados disputam uma eleição majoritária ao Senado, seis senadores traçam o caminho oposto: desistiram da reeleição e vão tentar uma vaga na Câmara. Três deles estão envolvidos em escândalos de corrupção. Desgastados pela Lava-Jato, Aécio Neves (PSDB-MG) e Gleisi Hoffmann (PT-PR) afirmam que o objetivo é fortalecer as bancadas de seus partidos na Câmara. No Senado desde 1987 e também alvo de denúncias de corrupção, José Agripino (DEM-RN) desistiu de permanecer no cargo em troca de apoio à chapa de Carlos Eduardo Alves (PDT) no Rio Grande do Norte.`,
      'Marlen Couto', null,
      '2018-09-30 04:30:00', false, 'assets/congresso-nacional.jpg'));
  }

  /**
   * Cadastra uma notícia na lista (banco de dados de notícias).
   * 
   * Ao cadastrar uma notícia, o atributo `id` recebe o próximo número da sequência,
   * com base no atributo `proximoId`.
   * 
   * @param noticia A notícia a ser cadastrada
   * @returns A notícia cadastrada, com novo valor para o atributo `id`
   */
  public cadastrar(noticia: Noticia): Noticia {
    noticia.id = this.proximoId;
    this.proximoId++;
    this.lista.push(noticia);
    return noticia;
  }

  /**
   * Retorna todas as notícias.
   * 
   * @returns Lista de todas as notícias
   */
  public todas() {
    return this.lista;
  }

  /**
   * Retorna apenas as notícias publicadas.
   * 
   * Utiliza os métodos da classe {@link Array}: 
   * 
   * * `filter()`: para encontrar apenas as notícias publicadas, usando o método 
   * [`estahPublicada()`]{@link Noticia#estahPublicada} da classe {@link Noticia}
   * * `sort()`: para ordenar as notícias de forma decrescente pela data
   * 
   * @param q A quantidade notícias para retornar (padrão = `null`, para retornar todas as notícias)
   * @param excluirDestaque Indica se deve ou não excluir a notícia de destaque da lista (padrão = `true`)
   * @returns Lista das notícias publicadas
   */
  public publicadas(q: number = null, excluirDestaque: boolean = false) {
    let noticias = this.lista.filter(n => n.estahPublicada());
    if (excluirDestaque) {
      noticias = noticias.filter(n => !n.destaque);
    }
    noticias = noticias.sort((a: Noticia, b: Noticia) => {
      if (b.data < a.data) {
        return -1;
      } else if (b.data > a.data) {
        return 1;
      } else {
        return 0;
      }
    });
    if (q) {
      noticias = noticias.slice(0, q);
    }
    return noticias;
  }

  /**
   * Encontra e retorna uma notícia com base no identificador.
   * 
   * @param id O identificador da notícia
   * @returns A notícia encontrada
   */
  public encontrar(id: number): Noticia {
    return this.lista.find(n => n.id === id);
  }

  /**
   * Encontra e retorna a notícia de destaque.
   * 
   * @returns A notícia encontrada
   */
  public noticiaDestaque(): Noticia {
    return this.lista.find(n => n.destaque === true);
  }

}
