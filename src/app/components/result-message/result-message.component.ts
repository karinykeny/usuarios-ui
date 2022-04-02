import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-result-message",
  templateUrl: "./result-message.component.html",
  styleUrls: ["./result-message.component.scss"],
})
export class ResultMessageComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }
  ) {}
}
