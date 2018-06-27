import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets: any;
  foods: any;

  constructor(
    private _taskService: TasksService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.showDishes()
    // this._route.params.subscribe((params: Params) => console.log(params['id']));
  }

  showDishes() {
    this._taskService.dishes().subscribe(res => {
      this.foods = res['data'];
      console.log(this.foods)
    })
  }

  showDetail(id){
    this._router.navigate(['/food/', id])
  }
}
