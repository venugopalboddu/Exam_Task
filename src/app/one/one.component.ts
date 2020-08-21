import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../getapi.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  data:any;
  idData:any;
  emplye: any;
  Table1: boolean = true;
  Table2: boolean = false;
  err: boolean = false;
  err1: boolean = false;
  msg:any;
  jsp:any;
  constructor(private service: GetapiService) { }

  ngOnInit() {
    this.GetData();
  }
  GetData(){
    this.service.GetApiData().subscribe(res=>{
      console.log("Test", res);
      this.data = res;
    });
  }

  //Navigate Route Based on Id of Given Server Data using below Method
  ID(id)
  {
         this.msg = id;
         console.log("Ng", this.msg);
         if(this.msg == undefined){
          this.Table1 = false;
          this.Table2 = false;
          this.err = true;
        }else{
          this.service.GetId(this.msg).subscribe(res=>{
            this.idData = res;
            for(let i in this.idData) {
                this.jsp = this.idData[i].userId;
            }

            console.log("Hello", this.jsp);
               if(this.jsp == this.msg){
                console.log("UserId", this.idData);
                this.Table1 = false;
                this.Table2 = true;
                this.err = false; 
                this.err1 = false;                  
               }else{
                console.log("Invalid UserId");
                this.Table2 = false;
                this.err1 = true;
               }              
          });    
        }
  }
}
