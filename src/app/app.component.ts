import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  name: string;
  register: Register;

  public helloWorld(): string {
    return 'Hello World..!';
  }

  ngOnInit() {
    this.name = 'Vijaya Babu';
  }

  Save(register: Register): Register {
    register.name = `${register.name}a babu`;
    this.register = register;
    return this.register;
  }
}
