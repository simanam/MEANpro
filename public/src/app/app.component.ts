import { Component, OnInit } from '@angular/core';
import {TasksService} from './tasks.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'cakes';
  // newTask: any;
  // newComment: any;
  // tasks = [];
  // modifyTask : any;
  // addComment: any;
  // selectedCakes: any;
  
  // selectedCake: any;

  
  // editClicked: boolean;


  constructor(private _taskService: TasksService,
    private _route: ActivatedRoute,
    private _router: Router){ }
  ngOnInit(){
    // this.editClicked= false;
  }
  
    
    // onComment(cake, myform){
    //   console.log(myform)
    //   let newComObj = {
    //     rating: myform.value.rating,
    //     comment: myform.value.comment
    //   }

    //   let comObservable = this._taskService.addComment(newComObj);
    //   comObservable.subscribe(data => {
    //     console.log("added comment", data)
    //   })
    //   this.addComment = cake;
    //   this.addComment.comments.push(newComObj);
    //   let editObservalble = this._taskService.editTask(cake._id, this.addComment);
    //   editObservalble.subscribe(data => {
    //         // console.log("edting task", data);
            
            
            
    //       })
    //       this.newComment = {comment:" ", rating: ""}
  

    // }
    // cakeToShow(task){
    //   this.selectedCakes = task;
    //   let showObservable = this._taskService.showTask(task._id);
    //   showObservable.subscribe(data => {
    //     this.selectedCake = data;

    //   });
    // }
    




    // destroyTask(id){
    //   let deleteObservable = this._taskService.deleteTask(id);
    //   deleteObservable.subscribe(data => {});
    //   this.getTasksFromService()

    // }
    // editSomething(id, myform){
    //   // console.log(myform)
    //   let newObject = { 
    //     _id: id, 
    //     title: myform.value.title, 
    //     description: myform.value.description
    //   }
      
    //   let editObservalble = this._taskService.editTask(id, newObject);
    //   editObservalble.subscribe(data => {
    //     // console.log("edting task", data);
    //     this.getTasksFromService()
    //     this.editClicked= false;
        
    //   })

    // }

   
}
