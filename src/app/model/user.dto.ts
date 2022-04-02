import { UserStatus } from './user';
import { User } from 'src/app/model/user';
export interface UserDto {
  idUsuario?: string
  correoElectronico?: string
  nombre: string
  apellido1: string
  apellido2: string
  contrasenna: string
  telefono: string
  estado: string
}
