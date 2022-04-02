import { Router } from "@angular/router";
import { User } from "./model/user";
import { UserService } from "./services/user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Usuário CRUD";
  newUser = "Novo Usuário";

  constructor(private router: Router) {}

  createUser() {
    this.router.navigateByUrl("/usuario/novo");
  }
}
