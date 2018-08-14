import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'x-auth'
//   })
// };

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  userData:any;
  
  constructor(private _http:HttpClient) { 
    this.userData={};
  }
  
  Makin
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
