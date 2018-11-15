import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Register } from 'src/models/register';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it(`helloWorld() function`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = <AppComponent>fixture.debugElement.componentInstance;
    const result = app.helloWorld();
    expect(result).toEqual('Hello World..!');
  }));

  it(`ngOnInit() function`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = <AppComponent>fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.name).toEqual('Vijaya Babu');
  }));

  it(`Save() function`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = <AppComponent>fixture.debugElement.componentInstance;
    const register = app.Save(new Register('vijay', 'vijay@gmail.com', true, '9966586830', true));
    // expect(result).toEqual(true);
    expect(register.name).toEqual('vijaya babu');
    // expect('').toBe(Register);
  }));
  /*
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to testCase!');
  }));
  */
});
