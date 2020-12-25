import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public ename="Angular";
  public name1="Sangam";
  user=()=> "Hello "+this.name1;
  public localhosturl=window.location.href;

  public myid="testid";
  public isdisabled="true";

  public successclass="text-success";
  public hasError=false;
  public isspecial=true;
  public messageclass={
    "text-success":!this.hasError,
        "text-danger":this.hasError,
        "text-special":this.isspecial
  }

  public highlightcolor="purple";
  public titlestyles={
    color:"blue",
    fontStyle:"italic"
  }
  public greeting="";
  onClick(event: any)
  {
   console.log(event);
   this.greeting=' Welcome to Event-Binding';
  }
  logmessage(value: any)
  {
     console.log(value);

  }

  public name="";
  constructor() { }

  ngOnInit(): void {
  }


}
