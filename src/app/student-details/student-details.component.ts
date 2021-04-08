import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  id:any;
  studentDetails:any={};

  constructor(private _StudentsService:StudentsService,private _ActivatedRoute:ActivatedRoute) { 
    this.id=_ActivatedRoute.snapshot.paramMap.get("id");
   _StudentsService.getStudentDetails(this.id).subscribe((data)=>{
     this.studentDetails=data.data;
     console.log(this.studentDetails);
   })
  }

  ngOnInit(): void {
  }

}
