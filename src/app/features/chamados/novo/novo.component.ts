import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { Router, RouterModule } from '@angular/router';   // IMPORTANTE
import { ChamadosService } from '../../../core/services/chamados.service';

@Component({
  selector: 'app-novo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,       // <--- ESSENCIAL PARA FUNCIONAR O routerLink
    CardModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    DividerModule,
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent {

  titulo = '';
  descricao = '';
  categoria = '';

  categorias = [
    { label: 'Suporte', value: 'Suporte' },
    { label: 'Infraestrutura', value: 'Infraestrutura' },
    { label: 'Rede', value: 'Rede' },
    { label: 'Sistemas', value: 'Sistemas' }
  ];

  constructor(
    private chamadosService: ChamadosService,
    private router: Router,
    private messageService: MessageService
  ) { }

  salvar() {
    if (!this.titulo.trim() || !this.descricao.trim() || !this.categoria) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Campos obrigatórios',
        detail: 'Todos os campos devem ser preenchidos.'
      });
      return;
    }

    this.chamadosService.addChamado({
      titulo: this.titulo,
      descricao: this.descricao,
      categoria: this.categoria
    });

    this.messageService.add({
      severity: 'success',
      summary: 'Chamado criado!',
      detail: 'O chamado foi registrado com sucesso.'
    });

    setTimeout(() => {
      this.router.navigate(['/chamados']);
    }, 1500);
  }
}
