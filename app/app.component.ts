import { Component } from '@angular/core';
import { Animal } from './animal.model';


@Component({
    selector: 'app-root',
    template: `
    <div class="container">
    <h1>Local Zoo Tracker</h1>

    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <hr>

    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>

    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
    `
})


export class AppComponent {

    selectedAnimal = null;

    masterAnimalList: Animal[] = [
        new Animal('Arctic Fox','Moon',1,'Carnivore','Northern Trail',4,'Female','Cool shade','Loud noises'),
        new Animal('Ocelot','Prince',4,'Carnivore','Tropical Rain Forest Building',6,'Male','Laying in the sunshine','Toys that are not rope-based'),
        new Animal('Northwest Black Tailed Deer','Tinkerbell',8,'Herbivore','Northern Trail',2,'Female','Delicate roots and leaves','Loud noises')
    ];

    addAnimal(newAnimalFromChild: Animal) {
        this.masterAnimalList.push(newAnimalFromChild);
    }

    editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

finishedEditing() {
    this.selectedAnimal = null;
  }

}
