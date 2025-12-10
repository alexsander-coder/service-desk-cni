import { Routes } from '@angular/router';
import { ListaComponent } from './features/chamados/lista/lista.component';
import { NovoComponent } from './features/chamados/novo/novo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'chamados', pathMatch: 'full' },
  { path: 'chamados', component: ListaComponent },
  { path: 'chamados/novo', component: NovoComponent }
];
