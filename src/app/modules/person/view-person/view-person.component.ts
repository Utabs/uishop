import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonService} from "../person.service";

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {
  personLoggedInObj: any

  constructor(private personService: PersonService) {
    this.personLoggedInObj=JSON.parse(this.personService.getPerson());

  }

  ngOnInit(): void {
    this.personService.loadPerson()

  }


}
