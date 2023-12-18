import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url=" http://localhost:3000/Users/"
  constructor(private http:HttpClient) { }
  getMethod(){
     return this.http.get(this.url)
  }
  addMethod(user:any){
    return this.http.post(this.url,user)
  }
  updateMethod(name:any){
    const url=`${this.url}/${name.id}`
    return this.http.put(url,name)
  }



  deleteMethod(id:number){
    const url=`${this.url}/${id}`
    return this.http.delete(url)
  }

}
