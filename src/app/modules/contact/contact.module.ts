import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmailService]
})
export class ContactModule { }
