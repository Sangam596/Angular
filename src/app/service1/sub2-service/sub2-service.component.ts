import { DetailsService } from './../../details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub2-service',
  templateUrl: './sub2-service.component.html',
  styleUrls: ['./sub2-service.component.css']
})
export class Sub2ServiceComponent implements OnInit {

  constructor(private serve : DetailsService) { }
  public service :any=[];
  ngOnInit(): void {
    this.service=this.serve.getService();
  }

}
