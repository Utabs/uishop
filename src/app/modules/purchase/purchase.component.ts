import {Component, Input, OnInit} from '@angular/core';
import {PersonService} from "../person/person.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sale',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  registered: boolean = this.personService.getPerson() != '' ? true : false;

  constructor(private personService: PersonService, private router: Router) {
    console.log("construct")
  }

  ngOnInit(): void {
    console.log("onint")
    this.personService.loadPerson()
  }

  onRegisteredPerson(event: any) {
    if (event != null) {
      if (this.personService.getPerson() !== '') {
        this.registered = true
      } else{
        this.registered = false
      }
    }
  }

  OnCheckOut(data: any) {
    if (data===true){
      this.registered=false
    }
  }
}
