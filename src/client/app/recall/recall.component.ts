import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recall',
  template: `<h1>Current Recalls</h1>
  <p>Keep track of the current recall campaigns</p>
    <img style='max-width:100%; ' src="/assets/recalls.png">
  `,
  styles: []
})
export class RecallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
