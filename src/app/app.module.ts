import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlugComponent } from './screens/plug/plug.component';
import { ViewComponent } from './screens/view/view.component';
import { ChangeEllComponent } from './components/change-ell/change-ell.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlugComponent,
    ViewComponent,
    ChangeEllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
