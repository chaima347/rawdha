import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildrenListeComponent } from './children-liste/children-liste.component'; 
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EventListComponent } from './event-list/event-list.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityComponent } from './activity/activity.component';
import { EventComponent } from './event/event.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenListeComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    EventListComponent,
    ActivityListComponent,
    ActivityComponent,
    EventComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
