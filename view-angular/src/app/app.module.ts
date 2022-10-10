import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuncionarioCadastrarEditarComponent } from './pages/funcionario/funcionario-cadastrar-editar/funcionario-cadastrar-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FuncionarioComponent,
    FuncionarioCadastrarEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
