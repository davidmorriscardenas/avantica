import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityModel } from '../models/entity.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EntityService {

  private baseUrl = 'https://avantica-mdce.firebaseio.com';

  constructor( private http: HttpClient ) { }

  getListEntity() {
    let url = `${ this.baseUrl }/entity.json`;
    return this.http.get(url)
            .pipe(
              map( this.formatData ),
              delay(0)
            );
  }

  getEntity(id: string) {
    let url = `${ this.baseUrl }/entity/${ id }.json`;
    return this.http.get(url);
  }

  updateEntity( entity: EntityModel ) {
    const entityTemp = {
      ...entity
    };
    delete entityTemp.id;
    return this.http.put(`${ this.baseUrl }/entity/${ entity.id }.json`, entityTemp);
  }  

  formatData( requestObj: object ) {

    const entityList: EntityModel[] = [];
    Object.keys( requestObj ).forEach( key => {
      const entity: EntityModel = requestObj[key];
      entity.id = key;
      entityList.push( entity );
    });

    return entityList;

  }
}
