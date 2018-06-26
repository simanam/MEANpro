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

  constructor(
    private _taskService: TasksService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    // this._route.params.subscribe((params: Params) => console.log(params['id']));
    this.showPets();
  }

  showPets() {
    let showObservable = this._taskService.getPet();
    showObservable.subscribe(res => {
      this.pets = res['data'];
      console.log(this.pets)
    })
  }
  detail(id){
    this._router.navigate(['/pets/', id])
  }
  edit(id){
    this._router.navigate(['/pets/' + id + '/edit'])
  }
}
