import { Component, signal } from '@angular/core';
import { PetCardComponent } from './pet-card/pet-card.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-pet-profile',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './pet-profile.component.html',
  styleUrl: './pet-profile.component.scss'
})
export class PetProfileComponent {
  constructor(private dialog: MatDialog){}

  openCardDialog(){
    this.dialog.open(PetCardComponent);
  }
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
