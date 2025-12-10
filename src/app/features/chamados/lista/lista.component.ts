import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ChamadosService, Chamado } from '../../../core/services/chamados.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RouterModule,
  ],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  chamados: Chamado[] = [];

  constructor(private chamadosService: ChamadosService) { }

  ngOnInit(): void {
    this.chamadosService.getChamados().subscribe(data => {
      this.chamados = data;
    });
  }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     const labels = document.querySelectorAll('.p-dropdown-label');

  //     labels.forEach(el => {
  //       el.setAttribute('role', 'textbox');
  //       el.setAttribute('aria-haspopup', 'listbox');
  //       el.setAttribute('aria-expanded', 'false');
  //       el.setAttribute('aria-label', 'Selecionar quantidade de linhas');
  //     });
  //   }, 100);
  // }

}
