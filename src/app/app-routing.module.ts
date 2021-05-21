import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

