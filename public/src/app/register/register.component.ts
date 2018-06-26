import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
const session = require('express-session');

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class RegisterComponent implements OnInit {
  id: any;
  pet: any;

  constructor(
    private _taskService: TasksService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }
  register(form:NgForm){
    this._taskService.register(form).subscribe(res => {
      this.pet = res['data'];
      console.log("show", res)
    })
  }
}
