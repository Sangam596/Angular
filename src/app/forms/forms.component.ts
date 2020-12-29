import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  topics=["Angular","React","Node"];
  userModel=new User('Sangam','sangameshbaluti@gmail.com',9742800920,'default','morning',true);
  topicHasError=true;


   constructor() { }

  ngOnInit(): void {
  }
  validateTopic(value: any)
  {
           if(value==='default'){
            this.topicHasError=true;
          }
        else{
            this.topicHasError=false;
          }
}

}
