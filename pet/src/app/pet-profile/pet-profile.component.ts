import { Component, signal } from '@angular/core';
import { PetCardComponent } from './pet-card/pet-card.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common'; // ✅ Add this

export interface task{
  item_name : string;
  status : boolean;
}
@Component({
  selector: 'app-pet-profile',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './pet-profile.component.html',
  styleUrl: './pet-profile.component.scss'
})
export class PetProfileComponent {
  constructor(private dialog: MatDialog){}

  openCardDialog(){
    this.dialog.open(PetCardComponent);
  }
  name = signal('Pistachio');
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
  tasks = signal <task[]>([]);
  newTaskName = signal ('');
  addTask(): void{
    const trimmed = this.newTaskName().trim();
    if (trimmed) {
      this.tasks.update( current => [
        ...current, {item_name: trimmed, status:false},
      ])
      this.newTaskName.set('');
    }
  }

  toggleTask(index : number): void {
    this.tasks.update(current => {
      const updated = [...current];
      updated[index].status = !updated[index].status;
      return updated;
    })
  }

}
