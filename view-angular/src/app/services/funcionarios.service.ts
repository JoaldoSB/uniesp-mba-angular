import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFuncionario } from '../interfaces/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  api = environment.api;
  endpoint = 'funcionarios';

  constructor(private http: HttpClient) { }

  cadastrarEditar(funcionario: IFuncionario){
    if(funcionario.id){
      return this.http.put(`${this.api}/${this.endpoint}/${funcionario.id}`, funcionario);
    } else{
      return this.http.post(`${this.api}/${this.endpoint}`,funcionario);
    }
  }

  remover(id:number){
    return this.http.delete(`${this.api}/${this.endpoint}/${id}`);
  }

  listarTodos(){
    return this.http.get<IFuncionario[]>(`${this.api}/${this.endpoint}`)
  }

  buscarPorId(id: number):Observable<IFuncionario>{
    return this.http.get<IFuncionario>(`${this.api}/${this.endpoint}/${id}`);
  }

}
