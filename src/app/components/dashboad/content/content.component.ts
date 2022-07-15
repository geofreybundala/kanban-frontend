import { ApiService } from './../../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  List: any =[];
  @Input() listDetails = { name: '', }
  constructor(private apiservice :ApiService) { }

  ngOnInit(): void {
    // this.apiservice.findAll('list').subscribe((data: any) =>{
    //   this.List = data;
    // })
    console.log(this.apiservice.findAll('list'));
    this.List = this.apiservice.findAll('list');
  }

  addList() : void{
 this.apiservice.create('list',this.listDetails).subscribe((data:any)=>{
      console.log(data);
    });
  }

}
