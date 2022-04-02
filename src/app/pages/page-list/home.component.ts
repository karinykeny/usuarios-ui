import { UserService } from "./../../services/user.service";
import { User } from "src/app/model/user";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { ModalConfirmComponent } from "src/app/components/modal-confirm/modal-confirm.component";
import { Router } from "@angular/router";
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";
import { ResultMessageComponent } from "src/app/components/result-message/result-message.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  dataSource = new MatTableDataSource<User>();
  title = "Confirma exclusão?";
  mesage =
    "Confirma exclusão do registro selecionado? Esta operação não pode ser desfeita";
  displayedColumns: string[] = [
    "name",
    "apellido1",
    "apellido2",
    "status",
    "login",
    "acao",
  ];

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.getList();
  }
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getList() {
    this.userService.getUserList().subscribe((result) => {
      this.dataSource = new MatTableDataSource<User>(result);
    });
  }

  getModal(user: User): void {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      width: "400px",
      data: { message: this.mesage, title: this.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.removeUser(user);
      }
    });
  }

  removeUser(user: User) {
    this.userService
      .deleteUser(user.login)
      .pipe(
        catchError((error) => {
          this.getError("Erro!", error.error.message);
          return of();
        })
      )
      .subscribe(() => {
        this.getSuccess("Operação realizada com sucesso.");
      });
  }

  getError(title: string, error: string) {
    this.dialog.open(ResultMessageComponent, {
      data: { title: title, message: error },
    });
  }

  getSuccess(sucess: string) {
    const dialog = this.dialog.open(ResultMessageComponent, {
      data: { title: "Sucesso!", message: sucess },
    });

    dialog.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }

  redirectEdit(user: User) {
    this.router.navigateByUrl(`/usuario/edit/${user.login}`);
  }

  redirectView(user: User) {
    this.router.navigateByUrl(`/usuario/${user.login}`);
  }
}
