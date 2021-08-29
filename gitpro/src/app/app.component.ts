import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gitpro';
   nivi="Interpolation";
   visible=false;
   show(){
     console.log('successfully done');
   }
}
