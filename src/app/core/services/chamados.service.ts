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
    { id: 2, titulo: 'Impressora parada', descricao: 'Equipamento não responde na rede', categoria: 'Infraestrutura' }
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
