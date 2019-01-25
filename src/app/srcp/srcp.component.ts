import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-srcp',
  templateUrl: './srcp.component.html',
  styleUrls: ['./srcp.component.scss']
})
export class SrcpComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout(e){
    e.preventDefault();
    this.auth.logout()
  }

}
