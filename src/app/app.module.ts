import { RouteModule } from './route/route.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AhriComponent } from './ahri/ahri.component';
import { VioletComponent } from './violet/violet.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AhriComponent,
    VioletComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
