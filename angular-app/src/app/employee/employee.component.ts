import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  template: `
    <p>
      employee works!
    </p>
  `,
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
