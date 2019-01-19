import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template:  `
  <div class="jumbotron text-center">
  <h1>404 Error!</h1>
  <p>PAGE NOT FOUND</p>
  </div>
`,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
