import { Component } from '@angular/core';
import { NavController, ModalController, reorderArray } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { Picked } from '../../providers/picked';
import { ThirdPage } from '../third/third';
import { FourthPage } from '../fourth/fourth';
// import { Ingredients } from '../../app/services/ingredients';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public picked: Picked) {
    
  }
  third:boolean = false;
  fourth:boolean = true;
  second:boolean = false;
  // counter:number=null;
  slideChecked:boolean=true;
  slideChecker() {
    if(this.third==true||this.fourth==true||this.second==true){
      this.slideChecked=true;
    } else {
      this.slideChecked=false;
    }
  }
  pickedUp = [];
  toggle(ing) {
  	// for (var i = this.picked.ingredientsMaster.length - 1; i >= 0; i--) {
  	// 	if(ingredient==this.picked.ingredientsMaster[i]) {
  	// 		if(this.picked.ingredientsMaster[i].picked){
  	// 			this.picked.ingredientsMaster[i].picked=false;
  	// 		}
  	// 		else {
  	// 			this.picked.ingredientsMaster[i].picked=true;
  	// 		}
  	// 	}
  	// }
  	// console.log(i);
  	if(ing.picked) {
  		ing.picked=false;
  		this.pickedUp.splice(this.pickedUp.indexOf(ing.name),1);
  	} else {
  		ing.picked=true;
  		this.pickedUp.push(ing.name);
  	}
  	this.pickedUp.sort();
  	console.log(this.pickedUp);
    
  	// if(this.pickedChecker(this.pickedUp)) {
   //    let i = this.pickedChecker(this.pickedUp);
  	// 	// let modal = null;

  	// 	// switch (this.pickedChecker(this.pickedUp)) {
  	// 	// 	case 1:
  	// 	// 		modal = this.modalCtrl.create(SecondPage)
  	// 	// 		break;
  	// 	// 	case 2:
  	// 	// 		modal = this.modalCtrl.create(ThirdPage)
  	// 	// 		break;
  	// 	// 	case 3:
   //  //       modal = this.modalCtrl.create(FourthPage)
   //  //       break;
  	// 	// 	default:
  	// 	// 		// code...
  	// 	// 		break;
  	// 	// }

  	// 	// // modal.present();
  	// }
    this.slideChecked=this.pickedChecker(this.pickedUp);
    // ,this.picked.friedChicken[0].id,this.picked.friedChicken[0].ing.length,this.picked.friedChicken[0].ing
    // this.slideChecked = this.checkPickedUp(this.pickedUp);
    // this.slideChecked = this.checkPickedUp(this.pickedUp,this.picked.saltPepperSteak[0].id,this.picked.saltPepperSteak[0].ing.length,this.picked.saltPepperSteak[0].ing);
    // this.slideChecked = this.checkPickedUp(this.pickedUp,this.picked.gswppSalad[0].id,this.picked.gswppSalad[0].ing.length,this.picked.gswppSalad[0].ing);
    this.slideChecker();
  }

  pushSecondPage(){
    let modal = this.modalCtrl.create(SecondPage);
    modal.present();
  }
  pushThirdPage(){
    let modal = this.modalCtrl.create(ThirdPage);
    modal.present();
  }
  pushFourthPage(){
    let modal = this.modalCtrl.create(FourthPage);
    modal.present();
  }

  // checkPickedUp(pickedUp){
  //   let counter=0;
  //   for (var i = pickedUp.length - 1; i >= 0; i--) {
  //     for (var j = this.picked.friedChicken[0].ing.length - 1; i >= 0; j--) {
  //       if(this.pickedUp[i]===this.picked.friedChicken[0].ing[j]){
  //         counter++;
  //         console.log(counter);
  //       }
  //     }
  //   }
  //   // if(counter==pickedUp.length){
  //   //   // switch (fNum) {
  //   //   //   case "1":
  //   //   //     this.second=true;
  //   //   //     break;
  //   //   //   case "2":
  //   //   //     this.third=true;
  //   //   //     break;
  //   //   //   case "3":
  //   //   //     this.fourth=true;
  //   //   //     break;
        
  //   //   //   default:
  //   //   //     // code...
  //   //   //     break;
  //   //   // }
      
  //   //   return true;
  //   // } else {
  //   //   this.second=false;
  //   //   this.third=false;
  //   //   this.fourth=false;
  //   //   return false;

  //   // }
  // }

  pickedChecker(pickedUp) {
    let counter = 0;
    if(this.pickedUp.length === this.picked.friedChicken[0].ing.length) {
	    for (var i = this.pickedUp.length - 1; i >= 0; i--) {
	      if(this.pickedUp[i]===this.picked.friedChicken[0].ing[i]){
          // two=true;
          counter++;
        } 
        // else {
        //   two=false;
        // }
	    }
      if(counter==this.pickedUp.length){
          this.second=true;
          return true;
        } else {
          this.second=false;
        }
      
	    
	  } else if(this.pickedUp.length === this.picked.saltPepperSteak[0].ing.length) {
	    for (var i = this.pickedUp.length - 1; i >= 0; i--) {
	      if(this.pickedUp[i]===this.picked.saltPepperSteak[0].ing[i]){
          // three=true;
          counter++
        } 
        // else {
        //   three=false;
        // }
	    }
      if(counter==this.pickedUp.length){
          this.third=true;
          return true;
        } else {
          this.third=false;
        }
      
    } else if(this.pickedUp.length === this.picked.gswppSalad[0].ing.length) {
      for (var i = this.pickedUp.length - 1; i >= 0; i--) {
        if(this.pickedUp[i]===this.picked.gswppSalad[0].ing[i]){
          // four=true;
          counter++;
        } 
        // else 
        // {
        //   four=false;
        // }
      }
      if(counter==this.pickedUp.length){
          this.fourth=true;
          return true;
        } else {
          this.fourth=false;
        }
    } else {
      this.fourth=false;
      this.second=false;
      this.third=false;
      return false;
    }
}
reset(){
  this.picked.initializeItems();
  // for (var i = this.picked.ingredientsMaster.length - 1; i >= 0; i--) {
  //   this.picked.ingredientsMaster[i].picked=false;
  // }
  // this.slideChecked = this.pickedChecker(this.pickedUp);
  // this.slideChecker();
  this.second=false;
  this.third=false;
  this.fourth=true;
  this.slideChecked=true;
  this.pickedUp=[];
  
}
reoderItem(indexes){
  this.picked.ingredientsMaster = reorderArray(this.picked.ingredientsMaster,indexes)
}

  // categories = [

  // 	// 'Meat',
  // 	// 'Spices',
  // 	// 'Baking & Grains',
  // 	// 'Dairy Milk'

  // ];

  // nextPage(category) {

  // 	switch (category) {
  // 		case "Meat":
  // 			// this.picked.ingredients = ['Chicken'];
  // 			// this.picked.ingId = [0];
  // 			this.picked.ingredients = [new Ingredients(false,'Chicken',0)];
  // 			break;
  // 		case "Spices":
  // 			// this.picked.ingredients = ['Salt','Black Pepper', 'Cayenne Pepper'];
  // 			// this.picked.ingId = [1,2,3];
  // 			this.picked.ingredients = [new Ingredients(false,'Salt',1),
  // 			new Ingredients(false,'Black Pepper',3),
  // 			new Ingredients(false,'Cayenne Pepper',4)];
  // 			break;
  // 		case "Baking & Grains":
  // 			// this.picked.ingredients = ['flour'];
  // 			// this.picked.ingId = [4];
  // 			this.picked.ingredients = [new Ingredients(false,'flour',5)];
  // 			break;
  // 		case "Dairy Milk":
  // 			// this.picked.ingredients = ['Buttermilk'];
  // 			// this.picked.ingId = [5];
  // 			this.picked.ingredients = [new Ingredients(false,'Buttermilk',6)];
  // 			break;
  // 		case "Oil":
  // 			// this.picked.ingredients = ['Vegetable Oil'];
  // 			// this.picked.ingId = [6];
  // 			this.picked.ingredients = [new Ingredients(false,'Vegetable Oil',7)];
  // 			break;
  // 		default:
  // 			// code...
  // 			break;
  // 	}
  // 	this.picked.category = category;

  // 	// console.log(this.picked.ingredientsMaster[i].name[i])
  // 	// modal.onDidDismiss((data) => {
  // 	// 	console.log(data);
  // 	// })

  // 	// for (var i = this.picked.ingredientsMaster.length - 1; i >= 0; i--) {
  // 	// 	if(this.picked.ingId[i]!=null)
  // 	// 	this.picked.ingredients[i]=this.picked.ingredientsMaster[i].name[i];
  // 	// }
  // 	let modal = this.modalCtrl.create(SecondPage);

  // 	modal.present();

  	

  // }
  // getItems(ev: any) {
  //   // Reset items back to all of the items
  //   this.picked.initializeItems();
  //   // set val to the value of the searchbar
  //   let val = ev.target.value;

  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.picked.ingredientsMaster.items = this.picked.ingredientsMaster.items.filter((item) => {
  //       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }

}
