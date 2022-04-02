import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";
import { catchError } from "rxjs/operators";
import { ResultMessageComponent } from "src/app/components/result-message/result-message.component";
import { User } from "src/app/model/user";
import { UserForm } from "src/app/model/user.form";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  title: string = "Cadastro de Usuário";
  user: User = new User()
  id: string;

  constructor(
    public userForm: UserForm,
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog,
    private activateRoute: ActivatedRoute
  ) {
    this.activateRoute.params.forEach((params) => {
      if (params.idUsuario) {
        this.id = params.idUsuario;
      }
    });
  }

  ngOnInit() {
    if (this.id) {
      this.getUser(this.id);
    } else {
      this.userForm.init(this.user);
    }
  }

  resert() {
    this.userForm.reset();
  }

  submitForm() {
    this.user = this.userForm.value;
    this.id ? this.alterUser() : this.saveUser();
  }

  alterUser() {
    this.userService
      .alterUser(this.user)
      .pipe(
        catchError((error) => {
          this.getError(error.error.message);
          return of();
        })
      )
      .subscribe(() => this.getSuccess("Usuário alterado com sucesso"));
  }

  saveUser() {
    this.userService
      .seveUser(this.user)
      .pipe(
        catchError((error) => {
          this.getError(error.error.message);
          return of();
        })
      )
      .subscribe(() => this.getSuccess("Usuário criado com sucesso"));
  }

  getHome() {
    this.router.navigate([""]);
  }

  getError(error: string) {
    this.dialog.open(ResultMessageComponent, {
      data: { title: "Erro!", message: error },
    });
  }

  getSuccess(sucess: string) {
    const dialog = this.dialog.open(ResultMessageComponent, {
      data: { title: "Sucesso!", message: sucess },
    });

    dialog.afterClosed().subscribe(() => {
      this.getHome()
    });
  }

  getUser(id: string) {
    this.userService.getUserById(id).subscribe((result) => {
      this.userForm.init(result);
    });
  }
}
