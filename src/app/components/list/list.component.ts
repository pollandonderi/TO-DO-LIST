import { Component } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  falayerplus = faCirclePlus;
  title = "to do list";
  h3="your tasks";
  h32 = "summary";
filter :"all" | "active" | "done" = "all";
allItems = [
  {
    description:"Morning run" ,
    done:true
  },
  {
    description:"check diary" ,
    done:false
  },
  {
    description:"update diary if necessary" ,
    done:false
  },
  {
    description:"write code" ,
    done:true
  },
  {
    description:"hold meeting" ,
    done:true
  },
]
get items(){
  if(this.filter === "all"){
    return this.allItems
  }
  return this.allItems.filter((item) =>
  this.filter === "done" ? item.done : !item.done
);
}

additem(description:string){
  this.allItems.unshift({
    description,
    done:false
  }
  )
}
}
