import { RankingOfPlayerComponent } from './components/ranking-of-player/ranking-of-player.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ActivityTitleComponent } from './components/activity-title/activity-title.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {SinginComponent} from './components/singin/singin.component';
import { ActivityComponent } from './components/activity/activity.component';









@NgModule({
  declarations: [
     
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SinginComponent,
    AppComponent ,
    ActivityComponent,
    ActivityTitleComponent,
    HomeComponent,
    ProfileComponent,
    RewardsComponent,
    RankingOfPlayerComponent,
    HttpClientModule
    // Add other modules here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
