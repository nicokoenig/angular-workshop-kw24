import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
})
export class InfoBoxComponent implements OnInit {
  isHidden = false;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isHidden = !this.isHidden;
  }
}
