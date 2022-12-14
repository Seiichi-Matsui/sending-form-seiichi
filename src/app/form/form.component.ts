import { Component, Injectable, OnInit } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { FormDateService } from './form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

@Injectable()
export class FormComponent implements OnInit {
  errors:any = []

  constructor(
    private formDateService: FormDateService
    ) { }

  ngOnInit(): void {
  }

  contact(contactForm: any) {
    
    this.formDateService.addContact(
      contactForm.value.lastName,
      contactForm.value.firstName,
      contactForm.value.lastNamePseudonym,
      contactForm.value.firstNamePseudonym,
      contactForm.value.postCode,
      contactForm.value.address,
      contactForm.value.buildingName,
      contactForm.value.phoneNumber,
      contactForm.value.phoneType,
      contactForm.value.emailFirst,
      contactForm.value.emailLast,
      contactForm.value.desiredContact,
      contactForm.value.contactForm
        ).subscribe(


      (result) => {
        alert('送信が完了しました')
        
      },
      (err: HttpErrorResponse) => {
        alert('エラーが発生しました')
        this.errors = err.error.errors
      }
    )
  }
}