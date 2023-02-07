import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-create-purchase',
  templateUrl: './create-purchase.component.html',
  styleUrls: ['./create-purchase.component.css']
})
export class CreatePurchaseComponent {
@Output() logoutPerson:EventEmitter<any>=new EventEmitter<any>();
  showComponent = true
  personBasket: any

  notifyCreatePerson(data: any) {
    console.log(data.data)
    if (data.isNew || !data.isNew)
      this.showComponent = false
    this.personBasket = data
  }

  onCheckouts(event:any){
    localStorage.removeItem('loggedIn_person')
    this.logoutPerson.emit(true)
  }

}
