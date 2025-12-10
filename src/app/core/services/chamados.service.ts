import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Chamado {
  id: number;
  titulo: string;
  descricao: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChamadosService {

  // mock inicial
  private chamadosMock: Chamado[] = [
    { id: 1, titulo: 'Erro no login', descricao: 'Usuário não consegue acessar o sistema', categoria: 'Suporte' },
    { id: 2, titulo: 'Impressora parada', descricao: 'Equipamento não responde na rede', categoria: 'Infraestrutura' },
    { id: 3, titulo: 'Sistema lento', descricao: 'Aplicação apresenta lentidão ao gerar relatórios', categoria: 'Sistemas' },
    { id: 4, titulo: 'Falha no Wi-Fi', descricao: 'Ponto de acesso do 3º andar não está distribuindo IP', categoria: 'Rede' },
    { id: 5, titulo: 'Erro ao gerar PDF', descricao: 'Usuário reporta falha ao exportar relatório para PDF', categoria: 'Sistemas' },
    { id: 6, titulo: 'Troca de senha', descricao: 'Solicitação de redefinição de senha do Windows', categoria: 'Suporte' },
    { id: 7, titulo: 'Queda de rede', descricao: 'Equipamentos da sala 204 perderam conexão com a internet', categoria: 'Rede' },
    { id: 8, titulo: 'Atualização de software', descricao: 'Atualizar antivírus para última versão liberada', categoria: 'Infraestrutura' },
    { id: 9, titulo: 'Monitor piscando', descricao: 'Monitor apresenta falhas ao abrir múltiplas janelas', categoria: 'Infraestrutura' },
    { id: 10, titulo: 'Erro 500 ao salvar dados', descricao: 'Sistema retorna erro interno ao salvar contrato', categoria: 'Sistemas' },

    { id: 11, titulo: 'Acesso bloqueado', descricao: 'Conta do usuário bloqueada após tentativas incorretas', categoria: 'Suporte' },
    { id: 12, titulo: 'Configuração de e-mail', descricao: 'Novo colaborador precisa configurar e-mail corporativo', categoria: 'Suporte' },
    { id: 13, titulo: 'Switch aquecendo', descricao: 'Switch do rack 2 apresenta temperatura acima do normal', categoria: 'Rede' },
    { id: 14, titulo: 'VPN não conecta', descricao: 'Usuário externo não consegue estabelecer conexão VPN', categoria: 'Rede' },
    { id: 15, titulo: 'Instalação de impressora', descricao: 'Solicitação de instalação de impressora na sala do financeiro', categoria: 'Infraestrutura' },

    { id: 16, titulo: 'Erro no dashboard', descricao: 'Gráficos do dashboard não carregam corretamente', categoria: 'Sistemas' },
    { id: 17, titulo: 'Notebook travando', descricao: 'Equipamento congela ao abrir planilhas pesadas', categoria: 'Infraestrutura' },
    { id: 18, titulo: 'Permissão negada', descricao: 'Usuário sem permissão para acessar módulo de clientes', categoria: 'Sistemas' },
    { id: 19, titulo: 'Mouse sem funcionar', descricao: 'Mouse do usuário não responde mesmo após troca de porta USB', categoria: 'Infraestrutura' },
    { id: 20, titulo: 'Rede instável', descricao: 'Perda de pacotes entre matriz e filial', categoria: 'Rede' },

    { id: 21, titulo: 'Erro ao anexar arquivos', descricao: 'Sistema impede anexar arquivos acima de 5MB', categoria: 'Sistemas' },
    { id: 22, titulo: 'Teclado com teclas falhando', descricao: 'Teclas da fileira superior não respondem corretamente', categoria: 'Infraestrutura' },
    { id: 23, titulo: 'Falha no backup', descricao: 'Backup automático não foi executado na última madrugada', categoria: 'Sistemas' },
    { id: 24, titulo: 'Acesso remoto', descricao: 'Colaborador necessita acesso remoto temporário', categoria: 'Suporte' },
    { id: 25, titulo: 'Cabo de rede danificado', descricao: 'Cabo do ponto RJ45 da sala 105 precisa ser substituído', categoria: 'Rede' }
  ];


  // metodo para emitir atualizações
  private chamadosSubject = new BehaviorSubject<Chamado[]>(this.chamadosMock);

  chamados$ = this.chamadosSubject.asObservable();

  constructor() { }

  getChamados() {
    return this.chamados$;
  }

  addChamado(chamado: Omit<Chamado, 'id'>) {
    const novoChamado: Chamado = {
      id: this.chamadosMock.length + 1,
      ...chamado
    };

    this.chamadosMock.push(novoChamado);
    this.chamadosSubject.next(this.chamadosMock);
  }
}
