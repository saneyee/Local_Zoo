import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
    selector: 'new-animal',
    template: `
    <h2>Add New Animal</h2>
    <form>
    <div>
    <label>Species:</label>
    <input #newSpecies>
    </div>
    <div>
    <label>Name:</label>
    <input #newName>
    </div>
    <div>
    <label>Age:</label>
    <input #newAge>
    </div>
    <div>
    <label>Diet:</label>
    <input #newDiet>
    </div>
    <div>
    <label>Location:</label>
    <input #newLocation>
    </div>
    <div>
    <label>Caretakers:</label>
    <input #newCaretakers>
    </div>
    <div>
    <label>Sex:</label>
    <input #newSex>
    </div>
    <div>
    <label>Like:</label>
    <input #newLike>
    </div>
    <div>
    <label>Dislike:</label>
    <input #newDislike>
    </div>

    <button (click)="submitForm(newSpecies.value, newName.value,newAge.value,newDiet.value,newLocation.value,newCaretakers.value,newSex.value,newLike.value,newDislike.value)">Add</button>
    </form>
    `
})

export class NewAnimalComponent {
    @Output() newAnimalSender = new EventEmitter();

    submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, like: string, dislike: string) {
        var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, like, dislike);
        this.newAnimalSender.emit(newAnimalToAdd);
    }
}
