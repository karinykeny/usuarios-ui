import { Injectable } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User, UserStatus } from 'src/app/model/user'

@Injectable()
export class UserForm {
  dataGroup: FormGroup

  constructor(formBuilder: FormBuilder) {
    this.dataGroup = formBuilder.group({
      login: formBuilder.control("", [Validators.required]),
      name: formBuilder.control(null, [Validators.required]),
      apellido1: formBuilder.control(null, [Validators.required]),
      apellido2: formBuilder.control(null, [Validators.required]),
      password: formBuilder.control(null, [Validators.required]),
      telephone: formBuilder.control(null, [Validators.required]),
      status: formBuilder.control(UserStatus.ACTIVE, [Validators.required]),
    })
  }

  reset() {
    this.dataGroup.reset()
  }

  init(user: User) {
    this.dataGroup.patchValue({
      name: user.name,
      apellido1: user.apellido1,
      apellido2: user.apellido2,
      password: user.password,
      telephone: user.telephone,
      status: user.status,
      login: user.login,
    })
  }

  get value(): User {
    return {
      ...this.dataGroup.value,
    } as User
  }

  get login(): AbstractControl {
    return this.dataGroup.get('login')
  }

  get name(): AbstractControl {
    return this.dataGroup.get('name')
  }

  get apellido1(): AbstractControl {
    return this.dataGroup.get('apellido1')
  }

  get apellido2(): AbstractControl {
    return this.dataGroup.get('apellido2')
  }

  get password(): AbstractControl {
    return this.dataGroup.get('password')
  }

  get telephone(): AbstractControl {
    return this.dataGroup.get('telephone')
  }

  get status(): AbstractControl {
    return this.dataGroup.get('status')
  }
}
