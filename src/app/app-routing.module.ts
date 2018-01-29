import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './project-one/contact.component';
import { HoneComponent } from './project-one/home.component';
import { NotFoundComponent } from './project-one/not-found.component';
import { AboutComponent } from './project-one/about.component';

const appRoutes: Routes = [
  { path: '',          component: HoneComponent },
  { path: 'contact',   component: ContactComponent },
  { path: 'about',     component: AboutComponent },
  { path: 'about/web', component: AboutComponent },
  { path: '**',        component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
