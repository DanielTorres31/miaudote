import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  @Input() label: string;
  @Input() name: string;
  @Input() id: string;

  constructor() { }

  ngOnInit() {
  }

  click() {
    const element = document.getElementById(this.id);
    element.click();
  }

}
