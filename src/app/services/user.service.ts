import { UserDto } from "./../model/user.dto";
import { API_USUARIO_BASE } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User, UserStatus } from "../model/user";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserList(): Observable<Array<User>> {
    return this.http.get(API_USUARIO_BASE).pipe(
      map((result: Array<UserDto>) => result.map(dto => new User(dto))))
  }

  getUserById(id: string): Observable<User> {
    return this.http.get(`${API_USUARIO_BASE}${id}`)
      .pipe(map((result: UserDto) => new User(result)));
  }

  seveUser(user: User): Observable<User> {
    return this.http
      .post(API_USUARIO_BASE, this.convertToUserDTO(user))
      .pipe(map((result: UserDto) => new User(result)));
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${API_USUARIO_BASE}${id}`);
  }

  alterUser(user: User): Observable<User> {
    return this.http
      .put(API_USUARIO_BASE, this.convertToUserDTO(user))
      .pipe(map((result: UserDto) => new User(result)));
  }


  convertToUserDTO(user?: User): UserDto {
    const dto = {} as UserDto

    dto.nombre = user.name
    dto.apellido1 = user.apellido1
    dto.apellido2 = user.apellido2
    dto.idUsuario = user.login,
    dto.contrasenna = user.password
    dto.telefono = user.telephone
    dto.correoElectronico = user.login
    dto.estado = this.getStatus(user.status)

    return dto
  }

  getStatus(status: string): string {
    switch(status) {
      case UserStatus.ACTIVE:
        return 'activo'
      case UserStatus.INACTIVE:
        return 'inactivo'
    }
  }
}
