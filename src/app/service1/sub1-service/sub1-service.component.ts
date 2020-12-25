import { DetailsService } from './../../details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub1-service',
  templateUrl: './sub1-service.component.html',
  styleUrls: ['./sub1-service.component.css']
})
export class Sub1ServiceComponent implements OnInit {

 public service:any=[];
  constructor(private serve:DetailsService) {}

  ngOnInit(): void {
    this.service=this.serve.getService();
  }

}
