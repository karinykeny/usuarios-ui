import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ResultMessageComponent } from './result-message/result-message.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    ModalConfirmComponent,
    ResultMessageComponent,
  ],
  entryComponents: [ResultMessageComponent, ModalConfirmComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class ComponentsModule { }
