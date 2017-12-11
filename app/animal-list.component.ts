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
       age:filterByAge">Species :{{currentAnimal.species}} | Name :{{currentAnimal.name}} | Age :{{currentAnimal.age}} | Diet :{{currentAnimal.diet}} | Location :{{currentAnimal.location}} | Caretakers :{{currentAnimal.caretakers}} | Sex :{{currentAnimal.sex}} | Like :{{currentAnimal.like}} | Dislike :{{currentAnimal.dislike}}

        <button  (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
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
