import { Component, OnInit } from '@angular/core';
import {TasksService} from './tasks.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  


  constructor(private _taskService: TasksService,
    private _route: ActivatedRoute,
    private _router: Router){ }
  ngOnInit(){
   
  }
  
    

   
}
