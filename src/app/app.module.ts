import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { FormComponent } from './form/form.component';
import { FormDateService } from './form/form.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FormDateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
