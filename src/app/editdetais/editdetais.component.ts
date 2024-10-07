import { Component,OnInit ,Input} from '@angular/core';
import { MyserviceService,student } from '../myservice.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editdetais',
  templateUrl: './editdetais.component.html',
  styleUrls: ['./editdetais.component.css']
})
export class EditdetaisComponent implements OnInit {
  @Input() sdata :any= {name:'',age:0, mark:0};
  id:number =0;
  constructor(public obj: MyserviceService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    let paramid = this.route.snapshot.paramMap.get("id");
    if (paramid !==null && paramid !==undefined) {
      this.id=+paramid;
    }
    this.obj.getdatawithid(this.id).subscribe((data:{}) => {
      this.sdata = data;
    });
     

      } 
      updatedata(): void{
        this.obj.editdata(this.id, this.sdata).subscribe((result) =>{
          this.router.navigate(['/alldisply']);
        }, (err) => {
          console.log(err);
    
        });
        }
   
  
  
   

}

