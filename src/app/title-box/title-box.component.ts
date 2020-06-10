import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss'],
})
export class TitleBoxComponent implements OnInit {
  @Input() title = 'Ich bin ein Titel 🤷‍♂️';
  @Output() titleClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.titleClicked.emit('Grüß Gott 🧐');
  }
}
