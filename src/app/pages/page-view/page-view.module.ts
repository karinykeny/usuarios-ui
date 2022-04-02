import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view.component';
import { UserService } from 'src/app/services/user.service';
import { MatCardModule, MatDialogModule, MatInputModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { TelephonePipe } from 'src/app/pipes/telephone.pipe';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [UserViewComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatListModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    PipesModule,
  ],
  providers: [UserService, TelephonePipe]
})
export class PageViewModule { }
