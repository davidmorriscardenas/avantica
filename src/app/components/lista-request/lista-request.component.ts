import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service'
import { RequestModel } from '../../models/request.model';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-lista-request',
  templateUrl: './lista-request.component.html',
  styleUrls: ['./lista-request.component.css']
})
export class ListaRequestComponent implements OnInit {

  tabSelected : string = 'All'
  requestList: RequestModel[] = [];
  loading = false;

  constructor( private requestService: RequestService ) { }

  ngOnInit() {
    this.getListRequest();
  }

  getListRequest() {
    this.loading = true;
    this.requestService.getListRequest(this.tabSelected)
      .subscribe( response => {
        this.requestList = response;
        this.loading = false;        
      });
  }

  onSelectTab(data: TabDirective): void {
    this.tabSelected = data.heading;
    this.getListRequest();
  }
}
