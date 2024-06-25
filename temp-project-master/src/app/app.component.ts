import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SinginComponent } from './components/singin/singin.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SinginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'temp-project';
}
