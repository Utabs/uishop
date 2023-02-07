import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ApiRequestsService} from "../../service/api-requests.service";
import {HttpParams} from "@angular/common/http";
import {parseJson} from "@angular/cli/src/utilities/json-file";

@Injectable({
  providedIn: 'root'
})
export class PersonService implements OnInit{

  private loggedInStatus :string='';

  constructor(private apiService: ApiRequestsService) {
    console.log("PersonService construct")
  }

  ngOnInit(): void {
  }



  getPerson(){
    this.loadPerson()
    console.log("getPerson 0"+this.loggedInStatus)
    return this.loggedInStatus
  }

  addPerson(person:string){
    console.log("addPerson"+this.loggedInStatus)
    this.loggedInStatus=JSON.parse(person  );
    this.savePerson();
  }
  savePerson(){
    localStorage.setItem('loggedIn_person',JSON.stringify(this.loggedInStatus))
  }
  loadPerson(){
    this.loggedInStatus=localStorage.getItem('loggedIn_person')||''
    return this.loggedInStatus
  }

  clearPerson(){
    localStorage.removeItem('loggedIn_person');
    this.loadPerson()
  }
  //
  // setLoggedIn(val: boolean, data: any) {
  //   this.loggedInStatus = '{"isLoggedIn" : ' + val + ',"data":' + JSON.stringify(data) + '}';
  //   localStorage.setItem('loggedIn_person', this.loggedInStatus)
  //
  // }
  //
  // getLoggedInData() {
  //   console.log("getLoggedInData : "+localStorage.getItem('loggedIn_person') )
  //   return JSON.parse(localStorage.getItem('loggedIn_person') || 'null')
  // }
  //
  // get isLoggedIn() {
  //   const loggedInObj = JSON.parse(localStorage.getItem('loggedIn_person') || 'null')
  //   if (loggedInObj === null)
  //     return false
  //   else
  //     return JSON.parse(loggedInObj?.isLoggedIn || JSON.parse(this.getLoggedInData())?.isLoggedIn)
  // }


  addNewPerson(person: Object): Observable<any> {
    return this.apiService.post("/api/person", person)
  }


  getPersonByCode(personCode: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("username", personCode);
    return this.apiService.get("/api/person/", queryParams)
  }


}
