import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/page-list/home.component";
import { UserFormComponent } from "./pages/page-edit/user-form.component";
import { UserViewComponent } from "./pages/page-view/user-view.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "usuario/novo", component: UserFormComponent },
  { path: "usuario/:idUsuario", component: UserViewComponent },
  { path: "usuario/edit/:idUsuario", component: UserFormComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
