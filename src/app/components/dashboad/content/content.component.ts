import { ApiService } from './../../../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private apiservice :ApiService) { }

  ngOnInit(): void {
    this.apiservice.get('list').subscribe((data: any) =>{
      console.log(data);
    })
  }

}
