import { Component,OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';



@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  @Input() studentdata = {name:'',age:0, mark:0};
  constructor(public object: MyserviceService,private router: Router){}
  ngOnInit(): void {
    
  }
  insertstudentdata(): void{
    this.object.insertwebapi(this.studentdata).subscribe((result) =>{
      this.router.navigate(['/alldisply']);
    }, (err) => {
      console.log(err);

    });
    }


}
