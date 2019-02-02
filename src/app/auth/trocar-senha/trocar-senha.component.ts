import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {MessageService} from "../../srcp/bootstrap/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trocar-senha',
  templateUrl: './trocar-senha.component.html',
  styleUrls: ['./trocar-senha.component.scss']
})
export class TrocarSenhaComponent implements OnInit {

  dataPass = {
    id:null,
    name:'',
    email:'',
    password:'',
    passwordConfirm:'',
    remember_token:''
  }



  constructor(
      private authService: AuthService,
      private messageService: MessageService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  trocarSenha(){
    this.authService.update(this.dataPass)
        .subscribe((data) => {
            this.messageService.messagePass = 'Senha Alterado com Sucesso!';
            this.router.navigate(['/login']);
        });
  }


}
