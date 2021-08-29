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
   visi=true;
   show(){
     console.log('successfully done');
   }
   show1(){
     console.log('this is propety binding')
   }
}
