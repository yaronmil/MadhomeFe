import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor() { }
  navLinks = [
    { path: 'Graph', label: 'גרפים', icon: 'bar_chart' },
    { path: 'Tables', label: 'טבלאות', icon: 'table_chart' },
    { path: 'Reports', label: 'דוחות', icon: 'list' }
  ];
  ngOnInit() {
  }

}

