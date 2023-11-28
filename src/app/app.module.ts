import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatButtonModule} from '@angular/material/button';
import { AboutMeComponent } from './about-me/about-me.component';
import {MatCardModule} from '@angular/material/card';
import { ButtonModule } from 'primeng/button';
import { ContactComponent } from './contact/contact.component';
import { VideoComponent } from './video/video.component';



const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'About-Me', component:VideoComponent}
]

@NgModule({
  
  declarations: [
    AppComponent, HomeComponent, DashboardComponent, FooterComponent, AboutMeComponent,ContactComponent, VideoComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatButtonModule,
    MatCardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
