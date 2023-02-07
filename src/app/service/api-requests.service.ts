import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserInfoService} from "./user-info-service";
import {Observable} from "rxjs";
import {AppConfig} from "../AppConfig";





@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {


  constructor(
    private userInfoService:UserInfoService,
    private appConfig: AppConfig,
    private http: HttpClient) {
  }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    let token = this.userInfoService.getStoredToken();
    headers = headers.append('Content-Type', 'application/json');
    if (token !== null) {
      headers = headers.append("Authorization", token);
    }
    return headers;
  }

  get(url: string, urlParams?: HttpParams): Observable<Object> {
    return this.http.get(this.appConfig.baseApiPath + url, {headers: this.getHeaders(), params: urlParams}) ;
  }

  post(url: string, body: Object): Observable<any> {
    return this.http.post(this.appConfig.baseApiPath + url, JSON.stringify(body), {headers: this.getHeaders()}) ;
  }

  put(url: string, body: Object): Observable<any> {
    console.log(url)
    console.log(body)
    return this.http.put(this.appConfig.baseApiPath + url, JSON.stringify(body), {headers: this.getHeaders()}) ;
  }

  delete(url: string): Observable<any> {
    return this.http.delete(this.appConfig.baseApiPath + url, {headers: this.getHeaders()}) ;
  }



}
