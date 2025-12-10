import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { ChamadosService } from '../../../core/services/chamados.service';

@Component({
  selector: 'app-novo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    ButtonModule
  ],
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

  feedback = '';

  constructor(
    private chamadosService: ChamadosService,
    private router: Router
  ) { }

  salvar() {
    if (!this.titulo.trim() || !this.descricao.trim() || !this.categoria) {
      this.feedback = 'Todos os campos são obrigatórios.';
      return;
    }

    this.chamadosService.addChamado({
      titulo: this.titulo,
      descricao: this.descricao,
      categoria: this.categoria
    });

    this.feedback = 'Chamado criado com sucesso!';

    setTimeout(() => {
      this.router.navigate(['/chamados']);
    }, 1200);
  }
}
