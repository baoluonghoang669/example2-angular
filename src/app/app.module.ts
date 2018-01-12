import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './project-one/main.component';
import { ContactComponent } from './project-one/contact.component';
import { HoneComponent } from './project-one/home.component';

const appRoutes: Routes = [
  { path: '', component: HoneComponent },
  { path: 'contact',  component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactComponent,
    HoneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
