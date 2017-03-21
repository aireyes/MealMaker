import { Injectable } from '@angular/core';
import { Ingredients } from '../app/services/ingredients';
import { Food } from '../app/services/food';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable()
export class Picked {

	ingId:number[];
	category: string = "home";
	ingredients
	ingredientsMaster
initializeItems(){
	this.ingredientsMaster = [
		new Ingredients(false, 'Chicken', 1),
		new Ingredients(false, 'Flour', 3),
		new Ingredients(false, 'Buttermilk', 6),
		new Ingredients(false, 'Vegetable Oil', 7),
		new Ingredients(false, 'Steak',2),
		new Ingredients(false, 'Olive Oil',13),
		new Ingredients(false, 'Lemon Juice',9),
		new Ingredients(false, 'Salt', 8),
		new Ingredients(false, 'Salt and Freshly',10),
		new Ingredients(false, 'Cayenne Pepper', 5),
		new Ingredients(false, 'Parmesan',11),
		new Ingredients(false, 'Black Pepper', 4),
		new Ingredients(false, 'Parsley Leaves', 12),
	]
}
	

	friedChicken = [
		new Food('Fried Chicken',1,['Black Pepper','Buttermilk','Cayenne Pepper','Chicken','Flour','Salt','Vegetable Oil'])
	];

	saltPepperSteak = [
		new Food('Salt-And-Pepper Steak',2,['Black Pepper','Salt','Steak'])
	];

	gswppSalad = [
		new Food('Grilled Steak with Parsley-Parmesan Salad',3,['Black Pepper','Lemon Juice', 'Olive Oil', 'Parmesan','Parsley Leaves','Salt and Freshly', 'Steak'])
	]

  constructor() {
    console.log('Hello Picked Provider');
    this.initializeItems();
  }

}
