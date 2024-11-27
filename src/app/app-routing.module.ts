import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenListeComponent } from './children-liste/children-liste.component';
import { HomeComponent } from './home/home.component';
import { EventListComponent } from './event-list/event-list.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
{path : 'children',component: ChildrenListeComponent},
{path :'home', component: HomeComponent},
{path: 'events', component :EventListComponent},
{path :'activities', component:ActivityListComponent},
{path : 'child',component: ChildComponent},
{path : '',redirectTo : 'children' , pathMatch : 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
