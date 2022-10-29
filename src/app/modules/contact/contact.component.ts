import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
// Toast service from ngx-toastr
import { ToastrService } from 'ngx-toastr';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fromName: string = "";
  fromEmail: string = "";
  fromSubject: string = "";
  fromMessage: string = "";
  // Check whether the submit button is clicked
  isClicked: boolean = false;
  // Use to check whether the email entered is valid
  pattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");

  constructor(private toast: ToastrService, private email: EmailService) { }

  ngOnInit(): void {
  }

  // I use SMTP api from elastic mail to set up an easy mail feature to receive email
  onSubmit(form: NgForm) {
    this.isClicked = true;
    // Send the email only if all the input fields are filled
    if(form.valid){
      this.email.sendEmail(form).subscribe(response => {
        if(response.ok){
          this.showSuccess();
        }
        else{
          this.showFailure();
        }
      })
    this.resetForm();
}
  }

  // Display a success toast when project is added successfully
  showSuccess() {
    let title =  'Sent message';
    let contents = 'You have sent this email to the owner successfully!!'
    this.toast.success(contents, title,{
      positionClass:'toast-bottom-right'
    });
    this.toast.toastrConfig.preventDuplicates = true;
  }

// Display a fail toast when failure occurs while adding project
showFailure(){
  let title =  'Sent message fails';
  let contents = 'Make sure you fill up all the input fields'
  this.toast.error(contents, title,{
    positionClass:'toast-bottom-right'
  });
  // Avoid the message to be displayed repetitively while the button is clicked
  this.toast.toastrConfig.preventDuplicates = true;
}

resetForm(){
  this.isClicked = false;
  this.fromName= "";
  this.fromEmail = "";
  this.fromSubject= "";
  this.fromMessage= "";
}
}
