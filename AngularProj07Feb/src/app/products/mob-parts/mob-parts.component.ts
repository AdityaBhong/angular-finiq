import { Component } from '@angular/core';

@Component({
  selector: 'app-mob-parts',
  templateUrl: './mob-parts.component.html',
  styleUrls:['./mob-parts.component.css']
})
export class MobPartsComponent {

  fnqProducts=[
    {
      pName: "Bonds",
      aClass: "FI" ,
      imgSrc:"https://www.finiq.com/images/chicago.jpg",
      availableForPurchase: "N",
      pColor: "red",
      isOnline:"N",
      country: "India",
      countryStyle:""
    },
    {
      pName: "Mutual Funds",
      aClass: "MF" ,
      imgSrc:"https://www.finiq.com/images/Singapore.jpg",
      availableForPurchase: "Y",
      pColor: "green",
      isOnline:"Y",
      country: "Singapore",
      
    },
    {
      pName: "FX Cash",
      aClass:"FX",
      imgSrc:"https://www.finiq.com/images/frankfurt.jpg",
      availableForPurchase: "N",
      pColor: "red",
      isOnline:"N",
      country: "Japan",
      
    },
    {
      pName: "Equities",
      aClass:"EQ" ,
      imgSrc:"https://www.finiq.com/images/monaco.png",
      availableForPurchase: "Y",
      pColor: "green",
      isOnline:"Y",
      country:"India",
      
    }
  ]

  tweet={
    likesCount:10,
    isLiked:false
  }
}
