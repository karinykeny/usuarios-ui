import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TelephonePipe } from "./telephone.pipe";

@NgModule({
  declarations: [TelephonePipe],
  imports: [CommonModule],
  exports: [TelephonePipe],
})
export class PipesModule {}
