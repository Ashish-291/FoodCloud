import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails =[
    {
      id:1,
      foodName:"Idli Sambar",
      foodPrice: 100,
      foodImg:"https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg"
    },
    {
      id:2,
      foodName:"Masala Dosa",
      foodPrice: 150,
      foodImg:"https://images.news18.com/ibnkhabar/uploads/2021/08/masala-dosa-recipe.jpg "
    },
    {
      id:3,
      foodName:"Veg Biryani",
      foodPrice: 250,
      foodImg:"https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot-featured.jpg "
    },
    {
      id:4,
      foodName:"Chicken biryani",
      foodPrice: 300,
      foodImg:"https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900"
    },
    {
      id:5,
      foodName:"Noodles",
      foodPrice: 160,
      foodImg:"https://thewoksoflife.com/wp-content/uploads/2020/04/homemade-chinese-egg-noodles-19-e1609271249794.jpg "
    },
    {
      id:6,
      foodName:"Ice Cream",
      foodPrice: 120,
      foodImg:"https://b.zmtcdn.com/data/pictures/7/19909597/c3b48b668a8a2c51e51169f3f932de21_featured_v2.jpg"
    }
    ]

}
