import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDadosComponent } from './cadastrar-dados.component';

describe('CadastrarDadosComponent', () => {
  let component: CadastrarDadosComponent;
  let fixture: ComponentFixture<CadastrarDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarDadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
