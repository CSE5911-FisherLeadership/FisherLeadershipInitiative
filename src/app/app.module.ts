import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
