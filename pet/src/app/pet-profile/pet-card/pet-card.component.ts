import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.scss'
})
export class PetCardComponent {
  constructor (private dialogRef: MatDialogRef<PetCardComponent>){}
  closeDialog(){
    this.dialogRef.close()
  }
}
