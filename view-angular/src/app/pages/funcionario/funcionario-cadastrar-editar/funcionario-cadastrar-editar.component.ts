import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFuncionario } from 'src/app/interfaces/funcionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcionario-cadastrar-editar',
  templateUrl: './funcionario-cadastrar-editar.component.html',
  styleUrls: ['./funcionario-cadastrar-editar.component.css']
})
export class FuncionarioCadastrarEditarComponent implements OnInit {

  emptyFuncionario: IFuncionario = {
    id: 0,
    name: '',
    cpf: '',
    email: '',
    obs: '',
    ativo: true
  }

  formFuncionario: FormGroup = this.preencheFormGroup(this.emptyFuncionario);

  constructor(
    private funcionariosService: FuncionariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.funcionariosService.buscarPorId(id).subscribe((result: IFuncionario) => {
        this.formFuncionario = this.preencheFormGroup(result);
      }, error => {
        console.error(error);
      });
    }
  }

  preencheFormGroup(funcionario: IFuncionario): FormGroup {
    return new FormGroup({
      id: new FormControl(funcionario.id ? funcionario.id : null),
      name: new FormControl(funcionario.name, Validators.required),
      cpf: new FormControl(funcionario.cpf, Validators.required),
      email: new FormControl(funcionario.email, [
        Validators.required,
        Validators.email,
      ]),
      observacoes: new FormControl(funcionario.obs),
      ativo: new FormControl(funcionario.ativo),
    });
  }

  enviar() {
    const funcionario: IFuncionario = this.formFuncionario.value;
    this.funcionariosService.cadastrarEditar(funcionario).subscribe((result) => {
      Swal.fire(
        'Sucesso',
        `${this.estaEditando() ? 'Editado' : 'Cadastrado'} com sucesso!`, 'success');
      this.router.navigate(['/funcionario']);
    });
  }
  estaEditando(){
    return !!this.formFuncionario.get('id')?.value;
  }
}
