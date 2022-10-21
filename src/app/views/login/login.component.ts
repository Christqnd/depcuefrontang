import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../models/login.interface';
import { data } from 'jquery';
import { Router } from '@angular/router';
import { ResponseI } from 'app/models/response.interface';
import { ResponseBadI } from 'app/models/responsebad.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api: ApiService, private router: Router) { }

  errorStatus: boolean = false;
  errorMsj: any = "";

  ngOnInit(): void {

    this.checkLocalStorage();
  }

  checkLocalStorage() {
    if (localStorage.getItem("token")) {
      let validation=this.api.validateToken();
      var response=JSON.stringify(validation);
      console.log(response);
      if(response=='OK'){ 
        this.router.navigate(['dashboard']);
      }else{
        localStorage.removeItem("token");
        this.router.navigate(['login']);
      }
    }
  }

  onlogin(form: LoginI) {
    this.api.loginByUser(form).subscribe(data => {
      console.log(data);
      let dataResponse: Object = data;
      if (dataResponse != null) {
        const resp = dataResponse as ResponseI;
        localStorage.setItem("token", resp.token)
        this.router.navigate(['dashboard']);
      } else {
        const resp = dataResponse as ResponseBadI;
        this.errorStatus = true;
        this.errorMsj = "Error de credenciales";
      }
    }
    );
  }
}
