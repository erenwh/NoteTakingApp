import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes = [
    {
      title: 'Finish Laundry',
      description: 'see above'
    },
    {
      title: 'Finish CS408 Tests',
      description: 'There are many things to do this weekend'
    }
  ]
  constructor() {
    
  }
}
