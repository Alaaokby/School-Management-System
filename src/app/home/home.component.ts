import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
students: any[] = [];
currentTutorial=null;

page= 1;
count = 0;
pageSize = 3;
pageSizes = [3, 6, 9,12];

 
 


 
 


  constructor(private _StudentsService:StudentsService) { 
//     this._StudentsService.getStudents(1,6).subscribe((data)=>{
//       this.students=data.data;
// console.log(data);
//     })

  
  }
  ngOnInit(): void {
    this.retrieveTutorials();

  }

  getRequestParams( page: number, pageSize: number):any{
    let params:any={};

    if (page) {
      params['page']= page;
    }

    if (pageSize) {
      params['per_page']= pageSize;
    }

    return params;
  }

  retrieveTutorials(): void {
    const params = this.getRequestParams( this.page, this.pageSize);

    this._StudentsService.getStudents(params)
      .subscribe(
        response => {
          const { data, total } = response;
          this.students = data;
          this.count = total;
          console.log(response);
          
          console.log(this.students);
          console.log(this.count);
          
          console.log(params)

        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveTutorials();
  }

  handlePageSizeChange(event:any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTutorials();
  }





}
