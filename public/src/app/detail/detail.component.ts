import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  food: any;
  id: any;
  likes: Number;
  button: Boolean;

  constructor(
    private _taskService: TasksService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
       this.id = params['id'];
     });
     this.showDetail();
  }

showDetail(){
  console.log(this.id)
  this._taskService.getOneDish(this.id).subscribe(res => {
      this.food = res['data'];
      console.log("show", res)
    })
  }

//   adopt(id){
//     let obs = this._taskService.adoptPet(id);
//     obs.subscribe(res => {
//       console.log("Thank you!", res)
//     })
//     this._router.navigate(['/pets']);
//   }
//   bringInfo(){
//     let observable = this._taskService.showPet(this.id);
//     observable.subscribe(res => {
//       this.pet = res['data'];
//       console.log("show", res)
//     })
//   }
//   editPet(){
//     let Obs = this._taskService.editPet(this.id, this.pet);
//     Obs.subscribe(res => {
//       this._router.navigate(['/pets']);
//     })
//   }

//   like(id){
//     if (this.button == true){
//     console.log(id)
//     let Obs = this._taskService.likePet({id: id});
//     Obs.subscribe(res => {
//       console.log("Liked", res)
//       this.bringInfo();
//       this.button = false;
//     })
//   }
// }
}
