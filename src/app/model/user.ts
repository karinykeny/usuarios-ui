import { UserDto } from './user.dto';
export class User {
  login: string;
  name: string;
  apellido1: string;
  apellido2: string;
  password: string;
  telephone: string;
  status: UserStatus;

  constructor(userDto?: UserDto) {
    if(userDto) {
      this.login = userDto.idUsuario ? userDto.idUsuario : userDto.correoElectronico;
      this.name = userDto.nombre;
      this.apellido1 = userDto.apellido1;
      this.apellido2 = userDto.apellido2;
      this.password = userDto.contrasenna;
      this.telephone = userDto.telefono;
      this.status = this.getStatus(userDto.estado);
    }
  }

  getStatus(status: string): UserStatus {
    switch(status) {
      case 'activo':
        return UserStatus.ACTIVE;
      case 'inactivo':
        return UserStatus.INACTIVE
    }
  }
}

export enum UserStatus {
  ACTIVE = 'Ativo',
  INACTIVE = 'Inativo'
}
