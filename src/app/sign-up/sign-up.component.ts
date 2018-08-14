import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

 
  
  constructor(private _http:HttpClient) { 

  }

  ngOnInit() {
  }

  signup(obj:any){
    console.log(obj);
    this._http.post(`http://localhost:3000/user/signup`,obj)
    .subscribe(res => {
      console.log(res);
    }, err => {
  });
  }
}
