import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { EntityService } from '../../services/entity.service'
import { EntityModel } from '../../models/entity.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {
  @Input() entity: EntityModel = null;
  @Output() refreshList = new EventEmitter();
  isEditable: boolean = false;

  constructor( private entityService: EntityService ) { }

  ngOnInit() {

  }

  onEditEntity() {
    this.isEditable = true;
  }

  onSaveEntity() {
    let request: Observable<any>;

    request = this.entityService.updateEntity(this.entity);

    request.subscribe( response => {
      this.isEditable = false;    
      this.triggerRefreshList();    
      Swal.fire({
        title: this.entity.name,
        text: 'Se actualizó correctamente',
        type: 'success'
      });
    });
  }


  triggerRefreshList() {
    this.refreshList.emit();
  }  
}
