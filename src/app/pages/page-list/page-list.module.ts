import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { UserService } from "src/app/services/user.service";
import {
  MatCardModule,
  MatPaginatorModule,
  MatTableModule,
} from "@angular/material";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from "@angular/platform-browser/animations";
import { ComponentsModule } from "src/app/components/components.module";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCardModule,
    ComponentsModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
  ],
  providers: [UserService],
})
export class PageListModule {}
