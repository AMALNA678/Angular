import { Component ,OnInit} from '@angular/core';
import { MyserviceService,student } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayall',
  templateUrl: './displayall.component.html',
  styleUrls: ['./displayall.component.css']
})
export class DisplayallComponent implements OnInit{
  Getdata:student[]=[];
  constructor(public objectservice: MyserviceService,private router: Router){}
  ngOnInit(): void {
    this.getalldetails();
  }
  getalldetails(): void{
    this.objectservice.getalldata().subscribe((resp:any) =>{
     this.Getdata = resp;
    });

      
  
  }
  delete(id:number): void{
    this.objectservice.deletedata(id)
    .subscribe(()=>{
      this.getalldetails();
    },(err)=>{
      console.log(err);
    }
  );
  }

}
