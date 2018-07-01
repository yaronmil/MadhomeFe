import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor() { }
  navLinks = [
    { path: 'Graph', label: 'גרפים' },
    { path: 'Tables', label: 'טבלאות' },
    { path: 'Reports', label: 'דוחות' }
  ];
  ngOnInit() {
  }

}

