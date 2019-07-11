import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestModel } from '../models/request.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseUrl = 'https://avantica-mdce.firebaseio.com';

  constructor( private http: HttpClient ) { }

  getListRequest(requestType: string) {
    let url = ''
    switch (requestType) {
      case 'All':
        url = `${ this.baseUrl }/request.json`;
        break;    
      default:
          url = `${ this.baseUrl }/request.json?orderBy="status"&equalTo="${ requestType }"`;
        break;
    }
    return this.http.get(url)
            .pipe(
              map( this.formatData ),
              delay(0)
            );
  }

  formatData( requestObj: object ) {

    const listRequest: RequestModel[] = [];
    Object.keys( requestObj ).forEach( key => {
      const request: RequestModel = requestObj[key];
      request.id = key;
      listRequest.push( request );
    });

    return listRequest;

  }
}
