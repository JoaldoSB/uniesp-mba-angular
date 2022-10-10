import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { FuncionarioCadastrarEditarComponent } from './pages/funcionario/funcionario-cadastrar-editar/funcionario-cadastrar-editar.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';

const routes: Routes = [
  { path: 'funcionario', component: FuncionarioComponent},
  { path: 'funcionario/cadastrar', component: FuncionarioCadastrarEditarComponent},
  { path: 'funcionario/editar/:id', component: FuncionarioCadastrarEditarComponent, canActivate:[AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
