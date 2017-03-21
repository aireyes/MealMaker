var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Picked } from '../../providers/picked';
/*
  Generated class for the Second page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SecondPage = (function () {
    function SecondPage(navCtrl, navParams, viewCtrl, picked) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.picked = picked;
        this.title = this.picked.friedChicken[0].name;
    }
    SecondPage.prototype.ionViewDidLoad = function (ingredient) {
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
    };
    SecondPage.prototype.closeModal = function () {
        // let data = {
        // 	title: 'hello',
        // 	message: 'how are you'
        // }
        this.viewCtrl.dismiss();
    };
    SecondPage.prototype.toggle = function (ingredient) {
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
    };
    return SecondPage;
}());
SecondPage = __decorate([
    Component({
        selector: 'page-second',
        templateUrl: 'second.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ViewController, Picked])
], SecondPage);
export { SecondPage };
//# sourceMappingURL=second.js.map