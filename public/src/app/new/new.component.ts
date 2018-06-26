import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet: any;
  msg: any;
  exist: any;

  constructor(
    private _taskService: TasksService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.msg = false;
    this.exist = false;

  }

  addNew(newPet:NgForm){
    console.log(newPet.value)
    let Obs = this._taskService.addPet(newPet.value);
    Obs.subscribe(data => {
      if (data['Status'] == true){
        console.log(data['Status'])
        console.log("successfully added", data)
        this._router.navigate(['/pets']);
        newPet.reset();
      } else {
        console.log(data)
        this.exist = data['err']
        this.msg = data['Error']
      } 
    })
  }
}
