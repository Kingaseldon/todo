import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title = 'my-todo-list' as any;
  public items = [] as any;

  
  /* A two-way binding performed which
     pushes text on division */
  public newTask = '' ;


 
  public isComplete: boolean = false;

completeItem(index:any){
  if (index!== null){    

     this.isComplete = !this.isComplete;
    
    }
 
   
 }


  /* When input is empty, it will
     not create a new division */
  public addToList() {
    if (this.newTask == '') {
    }
    else {
        this.items.push(this.newTask);

         
        this.newTask = '';
    }
       
      }
  
  /* This function takes toinput the
     task, that has to be deleted*/
  public deleteTask(index : any) {
      this.items.splice(index, 1);
  }
  public editTask(index:any) {  
  
   if (index!== null){  
    let result = prompt("Edit your task ");
    if (result !== null && result !== ""){
      this.items[index] = result;
    
    }

  }
}
}

