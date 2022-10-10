import { Component, OnInit } from '@angular/core';
import { IFuncionario } from 'src/app/interfaces/funcionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  constructor(private FuncionarioService: FuncionariosService) { }

  funcionarios: IFuncionario[] = [];

  ngOnInit(): void {
    this.listarTodosFuncionarios();
  }

  listarTodosFuncionarios(){
    this.FuncionarioService.listarTodos().subscribe((result: IFuncionario[]) => {
      this.funcionarios = result;
    });
  }

  confirmar(id: number){
    Swal.fire({
      title: 'Você está certo disso?',
      text: "Tem certeza que deseja remover este funcionario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#30B5d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.FuncionarioService.remover(id).subscribe(result => {
          Swal.fire({
            title: 'Operação Finalizada!',
            text: "Funcionario removido com sucesso",
            icon: 'success',
          });
          this.listarTodosFuncionarios();
        }, error => {
          console.error(error);
        });
      }
    })
  }
}
