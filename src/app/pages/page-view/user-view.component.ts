import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/model/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-view",
  templateUrl: "./user-view.component.html",
  styleUrls: ["./user-view.component.scss"],
})
export class UserViewComponent implements OnInit {
  user: User;
  id: string;

  constructor(private userService: UserService, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.forEach(params => {
      if(params.idUsuario) {
        this.id = params.idUsuario
      }
    })
  }
  ngOnInit(): void {
    if(!this.user) {
      this.getUser(this.id);
    }
  }

  getUser(id: string) {
    return this.userService
      .getUserById(id)
      .subscribe((result) => (this.user = result));
  }
}
