import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {PersonService} from "../person.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit{
  @Output() registeredPerson: EventEmitter<any> = new EventEmitter<any>()

  constructor(private router: Router, private personService: PersonService) {
  }

  ngOnInit(): void {
    this.personService.loadPerson()
  }



  personGroupForm = new FormGroup({
    userName: new FormControl(''),
    name: new FormControl(''),
    family: new FormControl(''),
    address: new FormControl('')
  });

  personList: any = []
  success = false;

  registerPerson() {
    this.personService.getPersonByCode(this.personGroupForm.controls.userName.value!).subscribe({
      next: (data) => {
        if (data === null) {
          this.personService.addNewPerson(this.personGroupForm.value).subscribe({
            next: (data) => {
              this.success = true
              this.personService.addPerson(JSON.stringify(data))
              this.registeredPerson.emit({isNew: true, data: data})
              setInterval(() => {
                this.success = false
              }, 1000)
            }, error: err => console.log(err)
          })
        } else {
          this.personService.addPerson(JSON.stringify(data))
          this.registeredPerson.emit({isNew: false, data: data})
        }
        this.personService.addPerson(JSON.stringify(data))
        this.personGroupForm.reset()
      },
      error: error => {
        console.log("-----------"+error)
        this.personService.addPerson( '')
      }
    })
  }

}
