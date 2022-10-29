import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // Allows other to send me email (Formspree)
  private readonly formUrl: string = environment.formUrl;
  private header = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  sendEmail(form: NgForm): Observable<any> {
    const emailValue = form.value;
    return this.http.post(
      this.formUrl,
      { name: emailValue.name, 
        replyto: emailValue.email, 
        message: emailValue.message,
        subject: emailValue.subject 
      },
      { 'headers': this.header });
  }
}
