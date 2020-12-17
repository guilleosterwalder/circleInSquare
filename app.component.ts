import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  touch = 0;
  lastTouched;
  squares= [{
    id:1
  },{
    id:2
  },{
    id:3
  },{
    id:4
  }];

  touched(id){
    if ( this.touch == 0){
      this.touch = id;
    } else {
      this.lastTouched = this.touch;
      this.touch = id;
    }

  }



}
