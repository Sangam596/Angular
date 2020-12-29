import { EnrollmentService } from './../../enrollment.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  topics = ["Angular", "React", "Vue"];
  userModel = new User("Sangamesh", "sangameshbaluti@gmail.com", 9742800920, "default", "morning", true);
public topicHasError = true;
submitted = false;

  constructor(private _enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }
  validateTopic(value: string){
    if (value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }
  onSubmit() {
    this.submitted = true;
   this._enrollmentService.enroll(this.userModel)
   .subscribe(
     date => console.log('success!', date),
     error => console.log('Error!', error)  
   );
  }


}
