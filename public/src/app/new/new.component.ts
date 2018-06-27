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
  foods: any;
 

  constructor(
    private _taskService: TasksService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.msg = false;
    this.showDish();
  }

  logout(){
    this._taskService.logout().subscribe(res => {
      if(res['Login'] == false){
        this._router.navigate(['/']);
      }
    })
  }

  addNew(newDish:NgForm){
    console.log(newDish.value)
    this._taskService.addDish(newDish.value).subscribe(data => {
      if (data['Status'] == true){
        console.log(data['Status'])
        console.log("successfully added", data)
        newDish.reset();
        this.showDish();
      } else {
        console.log(data)
        this.msg = data['Error']
      }
    })
  }

  showDish(){
    this._taskService.showDish().subscribe(data => {
      this.foods = data['food']
      console.log("success", data)
    })
  }
}
