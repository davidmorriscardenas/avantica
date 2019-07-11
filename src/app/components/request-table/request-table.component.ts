import { Component, OnInit, Input } from '@angular/core';
import { RequestModel } from '../../models/request.model';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.css']
})
export class RequestTableComponent implements OnInit {
  @Input() title: string = '';
  @Input() requestList: RequestModel[] = [];
  @Input() loading = false;

  constructor() { }

  ngOnInit() {
  }

}
