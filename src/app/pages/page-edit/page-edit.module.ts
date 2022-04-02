import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "src/app/components/components.module";
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
} from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { UserFormComponent } from "./user-form.component";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from "@angular/platform-browser/animations";
import { UserService } from "src/app/services/user.service";
import { UserForm } from 'src/app/model/user.form';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [UserFormComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCardModule,
    NgxMaskModule,

  ],
  providers: [UserForm, UserService],
})
export class PageEditModule {}
