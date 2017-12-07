import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
  <h1>Inventory Search</h1>
    <p>
      Use this tool to find inventory at other Toyita dealers.
    </p>
    <button>Get Started</button>
  `,
  styles: []
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
