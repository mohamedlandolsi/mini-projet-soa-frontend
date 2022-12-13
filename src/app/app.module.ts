import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { AddSmartphoneComponent } from './add-smartphone/add-smartphone.component';
import { FormsModule } from '@angular/forms';
import { UpdateSmartphoneComponent } from './update-smartphone/update-smartphone.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParModelComponent } from './recherche-par-model/recherche-par-model.component';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartphonesComponent,
    AddSmartphoneComponent,
    UpdateSmartphoneComponent,
    RechercheParMarqueComponent,
    RechercheParModelComponent,
    ListeMarquesComponent,
    UpdateMarqueComponent,
    LoginComponent,
    ForbiddenComponent
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
