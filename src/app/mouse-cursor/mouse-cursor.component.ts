import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.scss'],
})
export class MouseCursorComponent implements OnInit {
  x = 0;
  y = 0;

  constructor() {}

  ngOnInit(): void {}

  updateCoords(event: MouseEvent) {
    this.x = event.offsetX;
    this.y = event.offsetY;
  }
}
