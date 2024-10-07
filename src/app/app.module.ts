import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { InsertComponent } from './insert/insert.component';
import { DisplayallComponent } from './displayall/displayall.component';
import { DetailsdisplayComponent } from './detailsdisplay/detailsdisplay.component';
import { EditdetaisComponent } from './editdetais/editdetais.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    DisplayallComponent,
    DetailsdisplayComponent,
    EditdetaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
