import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { Ng2TableModule } from 'ngx-datatable/ng2-table';

import { AppComponent } from './app.component';
import { ListaRequestComponent } from './components/lista-request/lista-request.component';
import { RequestTableComponent } from './components/request-table/request-table.component';
import { ManageDataComponent } from './components/manage-data/manage-data.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { EntityComponent } from './components/entity/entity.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaRequestComponent,
    RequestTableComponent,
    ManageDataComponent,
    NavigationBarComponent,
    EntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TabsModule.forRoot(),
    Ng2TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
