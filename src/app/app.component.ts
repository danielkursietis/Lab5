import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-app';
  count: number = 0;
  hidden: boolean = true;

  onClick(){
    this.count++;
  }

  imgClick(){
    switch (this.hidden){
      case true: 
        this.hidden = false;
        break;
      case false: 
        this.hidden = true;
        break;
      default:
        break;
    }
  
  }
}
