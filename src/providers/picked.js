var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Ingredients } from '../app/services/ingredients';
import { Food } from '../app/services/food';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
var Picked = (function () {
    function Picked() {
        this.category = "home";
        this.ingredientsMaster = [
            new Ingredients(false, 'Chicken', 1),
            new Ingredients(false, 'Salt', 8),
            new Ingredients(false, 'Flour', 3),
            new Ingredients(false, 'Black Pepper', 4),
            new Ingredients(false, 'Cayenne Pepper', 5),
            new Ingredients(false, 'Buttermilk', 6),
            new Ingredients(false, 'Vegetable Oil', 7),
            new Ingredients(false, 'Steak', 2)
        ];
        this.friedChicken = [
            new Food('Fried Chicken', 1, [1, 3, 4, 5, 6, 7, 8])
        ];
        this.saltPepperSteak = [
            new Food('Salt-And-Pepper Steak', 2, [2, 4, 8])
        ];
        console.log('Hello Picked Provider');
    }
    return Picked;
}());
Picked = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], Picked);
export { Picked };
//# sourceMappingURL=picked.js.map