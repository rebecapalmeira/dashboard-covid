
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DadosModule, DadosService } from './dados';
import { DashboardCovidModule } from './dashboard-covid';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    DadosModule,
    DashboardCovidModule
  ],

  providers: [
    DadosService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
