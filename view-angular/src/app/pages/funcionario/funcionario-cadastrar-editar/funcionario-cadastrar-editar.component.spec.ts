import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioCadastrarEditarComponent } from './funcionario-cadastrar-editar.component';

describe('FuncionarioCadastrarEditarComponent', () => {
  let component: FuncionarioCadastrarEditarComponent;
  let fixture: ComponentFixture<FuncionarioCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioCadastrarEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
