import { RankingOfPlayerComponent } from './components/ranking-of-player/ranking-of-player.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ActivityTitleComponent } from './components/activity-title/activity-title.component';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {SinginComponent} from './components/singin/singin.component';
import { ActivityComponent } from './components/activity/activity.component';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Import CommonModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';









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
    CommonModule,  // Import CommonModule here
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
    // Add other modules here
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: []
})
export class AppModule { }
