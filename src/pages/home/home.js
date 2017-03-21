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
import { NavController, ModalController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { Picked } from '../../providers/picked';
';
// import { Ingredients } from '../../app/services/ingredients';
var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, picked) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.picked = picked;
        this.pickedUp = [];
        this.friedChicken = [1, 2, 3, 4, 5, 6, 7];
    }
    HomePage.prototype.toggle = function (ing) {
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
        if (ing.picked) {
            ing.picked = false;
            this.pickedUp.splice(this.pickedUp.indexOf(ing.id), 1);
        }
        else {
            ing.picked = true;
            this.pickedUp.push(ing.id);
        }
        this.pickedUp.sort();
        console.log(this.pickedUp);
        if (this.pickedChecker(this.pickedUp) > 0) {
            var modal = null;
            switch (this.pickedChecker(this.pickedUp)) {
                case 1:
                    modal = this.modalCtrl.create(SecondPage);
                    break;
                case 2:
                    modal = this.modalCtrl.create(SecondPage);
                    break;
                default:
                    // code...
                    break;
            }
            modal.present();
        }
    };
    HomePage.prototype.pickedChecker = function (pickedUp) {
        if (this.pickedUp.length == this.picked.friedChicken[0].ing.length) {
            for (var i = this.pickedUp.length - 1; i >= 0; i--) {
                if (this.pickedUp[i] !== this.picked.friedChicken[0].ing[i])
                    return 0;
            }
            return 1;
        }
        else if (this.pickedUp.length == this.picked.saltPepperSteak[0].ing.length) {
            for (var i = this.pickedUp.length - 1; i >= 0; i--) {
                if (this.pickedUp[i] !== this.picked.saltPepperSteak[0].ing[i])
                    return 0;
            }
            return 2;
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, ModalController, Picked])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map