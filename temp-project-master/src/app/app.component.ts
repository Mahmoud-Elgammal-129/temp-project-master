import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SinginComponent } from './components/singin/singin.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityTitleComponent } from './components/activity-title/activity-title.component';
import { RankingOfPlayerComponent } from './components/ranking-of-player/ranking-of-player.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SinginComponent,ActivityComponent,ActivityTitleComponent,RankingOfPlayerComponent,RewardsComponent,ProfileComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'temp-project';
}
