import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './project-one/contact.component';
import { HoneComponent } from './project-one/home.component';
import { NotFoundComponent } from './project-one/not-found.component';
import { AboutComponent } from './project-one/about.component';
import { CourseListComponent } from './exe-two/components/course-list.component';
import { CourseDetailComponent } from './exe-two/components/course-detail.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full'},
  { path: 'home',         component: HoneComponent },
  { path: 'courses',      component: CourseListComponent },
  { path: 'course/:id',   component: CourseDetailComponent },
  { path: 'contact',      component: ContactComponent },
  { path: 'about',        component: AboutComponent },
  { path: 'about/web',    component: AboutComponent },
  { path: '**',           component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
