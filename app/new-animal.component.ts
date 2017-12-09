import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <div>
     <label>Enter Animal Description:</label>
     <input #newDescription>
   </div>
   <div>
    <label>Animal Priority:</label>
    <select #newPriority>
      <option [value]="1"> Low Priority </option>
      <option [value]="2"> Medium Priority </option>
      <option [value]="3"> High Priority </option>
    </select>
    <button (click)="submitForm(newDescription.value, newPriority.value); newDescription.value='';">Add</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(description: string, priority: number) {
    var newAnimalToAdd: Animal = new Animal(description, priority);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
