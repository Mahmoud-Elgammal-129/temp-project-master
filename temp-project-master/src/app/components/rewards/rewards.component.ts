//import { Component } from '@angular/core';

// @Component({
//   selector: 'app-rewards',
//   standalone: true,
//   imports: [],
//   templateUrl: './rewards.component.html',
//   styleUrl: './rewards.component.css'
// })
//export class RewardsComponent {}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rewards',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule here
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent {
  rewards = [
    {
      image: 'path/to/mcdonalds-image.jpg',
      title: 'McDonalds Reward',
      description: 'Text description of reward and conditions for redemption.'
    },
    {
      image: 'path/to/movie-image.jpg',
      title: 'Movie Reward',
      description: 'Text description of reward and conditions for redemption.'
    },
    {
      image: 'path/to/kfc-image.jpg',
      title: 'KFC Reward',
      description: 'Text description of reward and conditions for redemption.'
    }
  ];
}