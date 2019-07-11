import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../services/entity.service'
import { EntityModel } from '../../models/entity.model';

@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.css']
})
export class ManageDataComponent implements OnInit {

  entityList: EntityModel[] = [];
  entityId: string = '';
  entity: EntityModel = null;

  constructor( private entityService: EntityService ) { }

  ngOnInit() {
    this.getListEntity();
  }

  getListEntity() {
    this.entityService.getListEntity()
      .subscribe( response => {
        this.entityList = response;
      });
  }

  getEntity() {
    this.entityService.getEntity(this.entityId)
      .subscribe( (response: EntityModel) => {
        this.entity = response;
        this.entity.id = this.entityId;
      });
  }

  onSelectEntity(id: string): void {
    this.entityId = id;
    this.getEntity();
  }

  onRefreshList(event: any) {
    this.getListEntity();
  }
}
