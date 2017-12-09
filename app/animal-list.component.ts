import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
  <option value="allAnimals">View All Animals</option>
  <option value="youngAnimals">View Young Animals</option>
  <option value="matureAnimals" selected="selected">View Mature Animals</option>
</select>


    <ul>
      <li *ngFor="let currentAnimal of childAnimalList |
       age:filterByAge">{{currentAnimal.species}} {{currentAnimal.name}} {{currentAnimal.age}} {{currentAnimal.diet}} {{currentAnimal.location}} {{currentAnimal.caretakers}} {{currentAnimal.sex}} {{currentAnimal.like}} {{currentAnimal.dislike}}
        <input *ngIf="currentAnimal.done === true" type="checkbox" checked (click)="toggleDone(currentAnimal, false)"/>
        <input *ngIf="currentAnimal.done === false" type="checkbox" (click)="toggleDone(currentAnimal, true)"/>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
      </li>
    </ul>
  `
})

export class AnimalListComponent {
   @Input() childAnimalList: Animal[];
   @Output() clickSender = new EventEmitter();
   filterByAge: string = "allAnimals";

   editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
  this.filterByAge = optionFromMenu;
}

}