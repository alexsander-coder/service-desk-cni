import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ChamadosService, Chamado } from '../../../core/services/chamados.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, TableModule],
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
}
