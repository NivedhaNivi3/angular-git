import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  value=true;
  namefor=['1','2','3'];
  colorswitch="green";
  constructor() { }

  ngOnInit(): void {
  }

}
