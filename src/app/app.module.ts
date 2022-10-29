// External Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// Angular animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// "Toast" API
import { ToastrModule } from 'ngx-toastr';

// Web page modules (Avoid importing them if using Lazy-Loading because they will be loaded only when they are required)
// import { HomeComponent } from './modules/home/home.component';
// import { AboutComponent } from './modules/about/about.component';
// import { ResumeComponent } from './modules/resume/resume.component';
// import { PortfolioComponent } from './modules/portfolio/portfolio.component';
// import { PortfolioDetailComponent } from './modules/portfolio-detail/portfolio-detail.component';
// import { ServiceComponent } from './modules/service/service.component';
// import { ContactComponent } from './modules/contact/contact.component';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

// Services
import { TypewriterService } from './services/typewriter.service';
import { PureCounterService } from './services/pure-counter.service';
import { WayPointService } from './services/way-point.service';
import { ProjectListService } from './services/project-list.service';
// import { EmailService } from './services/email.service';

// Directives

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    HeaderComponent,
    SidebarComponent,
    // AboutComponent,
    // ResumeComponent,
    // PortfolioComponent,
    // ServiceComponent,
    // ContactComponent,
    FooterComponent,
    // PortfolioDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,    
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  // Services here
  providers: [TypewriterService, PureCounterService, WayPointService, ProjectListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
