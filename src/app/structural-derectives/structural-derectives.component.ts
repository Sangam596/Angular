import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-derectives',
  templateUrl: './structural-derectives.component.html',
  styleUrls: ['./structural-derectives.component.css']
})
export class StructuralDerectivesComponent implements OnInit {

  public code=false;
  public directive= false;
  public color="red";
  public names=["sangam","basav","shiv","raj"];
  constructor() { }

  ngOnInit(): void {
  }

}
