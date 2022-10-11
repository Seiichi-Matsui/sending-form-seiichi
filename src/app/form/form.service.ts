import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";



@Injectable()
export class FormDateService implements OnInit{
    user: any
    constructor(
        private http: HttpClient
        ) {
        }

    ngOnInit(): void {
      }

    addContact(
        lastName: string,
        firstName: string,
        lastNamePseudonym: string,
        firstNamePseudonym: string,
        postCode: string,
        address: string,
        buildingName: string,
        phoneNumber: string,
        phoneType: string,
        emailFirst: string,
        emailLast: string,
        desiredContact: string,
        contactForm: String,
        ): Observable<any> {
        const now:any = new Date


        var Year = now.getFullYear();
        var Month = now.getMonth()+1;
        var Day = now.getDate();
        var Hour = now.getHours();
        var Min = now.getMinutes();

        const time = (Year + "." + Month + "." + Day + " " + Hour + ":" + Min)

        const contact = {
            "lastName": lastName,
            "firstName": firstName,
            "lastNamePseudonym": lastNamePseudonym,
            "firstNamePseudonym": firstNamePseudonym,
            "postCode": postCode,
            "address": address,
            "buildingName": buildingName,
            "phoneNumber": phoneNumber,
            "phoneType": phoneType,
            "emailFirst": emailFirst,
            "emailLast": emailLast,
            "desiredContact": desiredContact,
            "status": "未設定",
            "priority": "未設定",
            "manager": "未設定",
            "contactForm": contactForm,
            "date": time,
        }
        
        return this.http.post('/api/v1/contacts/add', contact)
    }
}