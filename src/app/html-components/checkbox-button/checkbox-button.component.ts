import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-button',
  templateUrl: './checkbox-button.component.html',
  styleUrls: ['./checkbox-button.component.scss']
})
export class CheckboxButtonComponent implements OnInit {

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
