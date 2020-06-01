import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { EventsComponent } from './events/events.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { PastEventsComponent } from './past-events/past-events.component';
import { InterestsComponent } from './interests/interests.component';
import { EventDisplayComponent } from './event-display/event-display.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BecomeASpeakerComponent } from './become-a-speaker/become-a-speaker.component';
import { VenuePartnerComponent } from './venue-partner/venue-partner.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { PartnerComponent } from './partner/partner.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { CommunitiesComponent } from './communities/communities.component';
import { ComunevPageComponent } from './comunev-page/comunev-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonserviceService } from './commonservice.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfilePageComponent,
    EventsComponent,
    UpcomingEventsComponent,
    PastEventsComponent,
    InterestsComponent,
    EventDisplayComponent,
    AboutPageComponent,
    ContactUsComponent,
    BecomeASpeakerComponent,
    VenuePartnerComponent,
    SponsorComponent,
    PartnerComponent,
    VolunteerComponent,
    CommunitiesComponent,
    ComunevPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,

  ],
  providers: [CommonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
