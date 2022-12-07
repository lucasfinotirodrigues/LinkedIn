import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  signupView: boolean = false

  constructor(private data: DataService) {}

  toggleSignUpView () {
    this.signupView = !this.signupView
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  mostrarsenha = false

  mostrar(){
    this.mostrarsenha  = !this.mostrarsenha
  }
}
