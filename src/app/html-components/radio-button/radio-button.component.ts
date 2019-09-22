import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  @Input() label: string;
  @Input() name: string;
  @Input() id: string;

  @Output() valueChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  click() {
    const element = document.getElementById(this.id);
    element.click();
    this.emitValueChange();
  }

  emitValueChange() {
    this.valueChanged.emit({ value: this.label });
  }

}
