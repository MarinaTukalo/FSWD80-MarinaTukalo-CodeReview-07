import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private firebase: AngularFireDatabase) { }
  travelList: AngularFireList<any>;

  form = new FormGroup({
     $key: new FormControl(null),
     travelType: new FormControl('', Validators.required),
     country: new FormControl('', Validators.required),
     city: new FormControl('', Validators.required),
     description: new FormControl('', Validators.required),
     duration: new FormControl('',[Validators.required, Validators.minLength(1)]),
     price: new FormControl('', Validators.required),
     img: new FormControl('', Validators.required)
  });

  getTravel(){
    this.travelList = this.firebase.list('travel');
    return this.travelList.snapshotChanges();
  }

  insertTravel(travel){
    this.travelList.push({
     travelType: travel.travelType,
     country: travel.country,
     city: travel.city,
     description: travel.description,
     duration: travel.duration,
     price: travel.price,
     img: travel.img  
    });
  }

  populateForm(travel){
    this.form.setValue(travel);
  }

  updateTravel(travel){
    this.travelList.update(travel.$key,{
     travelType: travel.travelType,
     country: travel.country,
     city: travel.city,
     description: travel.description,
     duration: travel.duration,
     price: travel.price,
     img: travel.img  
    });
  }

  deleteTravel($key: string){
    this.travelList.remove($key);
  }
}
