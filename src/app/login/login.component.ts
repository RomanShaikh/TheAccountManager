import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _http:HttpClient) { }

  ngOnInit() {
  }

  login(obj:any){
    console.log(obj);
    this._http.post(`http://localhost:3000/user/login`,obj)
    .subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
  });
}

}
