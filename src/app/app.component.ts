import { Component } from '@angular/core';
import { CharacterlistComponent } from './characterlist/characterlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharacterlistComponent], // 👈 include the character list component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '101444170-lab-test2-comp3133';
}
