import { Component,OnInit } from '@angular/core';
import { MyserviceService,student } from '../myservice.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailsdisplay',
  templateUrl: './detailsdisplay.component.html',
  styleUrls: ['./detailsdisplay.component.css']
})
export class DetailsdisplayComponent implements OnInit {
  stdata: student | undefined;
  id:number =0;

  constructor(public obj: MyserviceService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    var paramid = this.route.snapshot.paramMap.get("id");
    if (paramid !==null && paramid !==undefined) {
      this.id=+paramid;
    }
    this.obj.getdatawithid(this.id).subscribe(
      (data: student) => this.stdata = {...data }
      
    );
    
  }

}
