import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './project-one/contact.component';
import { HoneComponent } from './project-one/home.component';
import { NotFoundComponent } from './project-one/not-found.component';
import { AboutComponent } from './project-one/about.component';
import { AppRoutingModule }     from './app-routing.module';
import { CourseListComponent } from './exe-two/components/course-list.component';
import { CourseService } from './exe-two/services/course.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HoneComponent,
    NotFoundComponent,
    AboutComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})

export class AppModule { }
