import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiProvider {

  urlApi: string = 'http://localhost:8000/'

  constructor(public http: HttpClient) {
  }

  get(endpoint: string, params?: any, reqOpts?: any):Observable<any>
  {
      reqOpts = {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              // 'Authorization': 'Token ' + params.token
          },
          params: new HttpParams()
      };
      return this.http.get(this.urlApi + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any):Observable<any>
  {
      reqOpts = {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          }
      };
      // if (body.token) {
      //     reqOpts.headers['Authorization'] = 'Token ' + body.token;
      //     delete body.token;
      // }
      return this.http.post(this.urlApi + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any):Observable<any>
  {
      return this.http.put(this.urlApi + endpoint, body, reqOpts);
  }

  delete (endpoint: string, reqOpts?: any):Observable<any>
  {
      if (reqOpts.token) {
          reqOpts = {
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  // 'Authorization': 'Token ' + reqOpts.token
              }
          };
      }
      return this.http.delete(this.urlApi + endpoint, reqOpts);
  }

  patch (endpoint: string, body: any, reqOpts?: any):Observable<any>
  {
      return this.http.put(this.urlApi + endpoint, body, reqOpts);
  }

}
