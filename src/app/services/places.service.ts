import { Injectable } from '@angular/core';
import { Place } from '../places/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    new Place(
      'c1',
      'Golf 7',
      'Golf 7 R features a 544 kW version of Audi’s 2,5-litre five-pot!',
      'https://www.carmag.co.za/wp-content/uploads/2020/07/dfvxchvn6v6yxf4r-800x480.jpg',
      65.5,
      new Date('2021-06-01'),
      new Date('2022-02-01')
    ),
    new Place(
      'c2',
      'Audi A4',
      'Audi A4 Sedan 2.0TDI For Sale in Gauteng, SANDTON',
      'https://img.autotrader.co.za/20679762/Crop508x373',
      55,
      new Date('2021-01-01'),
      new Date('2021-12-31')
    ),
    new Place(
      'c3',
      'Audi RS3',
      'Sportback Quattro For Sale in Western Cape, CAPE TOWN',
      'https://img.autotrader.co.za/20672997/Crop508x373',
      80,
      new Date('2021-06-01'),
      new Date('2022-12-01')
    )
  ];
  constructor() { }

  getPlaces(){
    return [...this.places];
  }

  getPlace(id: string){
    return {
      ...this.places.find(p => p.id === id)
    };
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      price,
      dateFrom,
      dateTo,
      //this.authService.userId
    );
  }
}
