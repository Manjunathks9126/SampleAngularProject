import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoozComponentComponent } from './fooz-component/fooz-component.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FoozComponentComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [

    RouterModule.forRoot(appRoutes),
    BrowserModule

  ],
  providers: [],
  bootstrap: [
   AppComponent
  ]
})
export class AppModule { }
