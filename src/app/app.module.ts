import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { CreateCustomerComponentComponent } from './create-customer-component/create-customer-component.component';

//Import service
import { ItemservicesService } from './itemservices.service'
import { DomainPipe } from './domain.pipe';
import { ItemDetailsComponent } from './item-details/item-details.component';

//Routing
import {routing} from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe,
    ItemDetailsComponent,
    CreateCustomerComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    JsonpModule,
    routing
  ],
  providers: [ItemservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }