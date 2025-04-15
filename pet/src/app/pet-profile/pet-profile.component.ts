import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pet-profile',
  standalone: true,
  imports: [],
  templateUrl: './pet-profile.component.html',
  styleUrl: './pet-profile.component.scss'
})
export class PetProfileComponent {
name = signal('Akira');
age = signal(20);
// petname = input<string>(); string input signal
// age = input(0); number input signal
// 
moods: string[] = ["lazy", "hungry", "angry", "curious","hyper", "tired"];
currentMood = signal('');
getRandomMood():void{
const index = Math.floor(Math.random()* this.moods.length);
this.currentMood.set(this.moods[index]);
}
}
