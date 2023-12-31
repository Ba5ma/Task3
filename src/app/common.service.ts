import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
URL = "http://localhost:3000/resto";
regURL = "http://localhost:3000/users";
  constructor(private _http: HttpClient) { 
    }

    getRestList(){
      return this._http.get(this.URL);
  }

  addResto(data:any){
    return this._http.post(this.URL,data);
  }

  updateResto(id:number,data:any){
    return this._http.put(`${this.URL}/${id}`,data)
  }

  getCurrentData(id:number){
    return this._http.get(`${this.URL}/${id}`)
  }

  createUser(data:any){
    return this._http.post(this.regURL, data);
  }

  deleteResto(id:number){
    return this._http.delete(`${this.URL}/${id}`)
  }

  loginUser(email: string, password: string){
    return this._http.post(this.regURL,{
      email: email,
      password: password
    });
  }
  

}