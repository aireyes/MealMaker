import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Picked } from '../../providers/picked';
// import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';


//   Generated class for the Fourth page.

//   See http://ionicframework.com/docs/v2/components/#navigation for more info on
//   Ionic pages and navigation.

// @Component({
//   selector: 'page-fourth',
//   templateUrl: 'fourth.html'
// })
// export class FourthPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {}

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad FourthPage');
//   }

// }


/*
  Generated class for the Second page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fourth',
  templateUrl: 'fourth.html'
})
export class FourthPage {

	title = this.picked.gswppSalad[0].name;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public picked: Picked) {}

  ionViewDidLoad(ingredient) {
  	// this.navParams.get('category');
  // 	 	for (var i = this.picked.ingredientsMaster.length - 1; i >= 0; i--) {
  // 		if(ingredient.name==this.picked.ingredientsMaster[i].name) {
  // 			if(this.picked.ingredientsMaster[i].picked){
  // 				this.picked.ingredientsMaster[i].picked=false;
  // 			}
  // 			else {
  // 				this.picked.ingredientsMaster[i].picked=true;
  // 			}
  // 		}
  // 	}
  }

  closeModal() {

  	// let data = {
  	// 	title: 'hello',
  	// 	message: 'how are you'
  	// }

  	this.viewCtrl.dismiss();
  }

  toggle(ingredient) {
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
  	// if(ingredient.picked) {
  	// 	ingredient.picked=false;
  	// 	console.log("How?");
  	// } else {
  	// 	ingredient.picked=true;
  	// 	console.log("why?");
  	// }
  }

}
