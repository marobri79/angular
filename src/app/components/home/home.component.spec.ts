import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente debe ser creado', () => {
    expect(component).toBeTruthy();
  });

  it('Debe tener un titulo h5 que sea Bienvenido a la tienda', () => {
    expect(component.mensajeBienvenida).toBe('Bienvenido a la tienda');
    const h5 = fixture.debugElement.query(By.css('h5')).nativeElement;
    expect(h5.innerHTML).toBe('Bienvenido a la tienda');
  });

});
