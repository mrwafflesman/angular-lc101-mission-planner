import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = [
    "Habitat dome",
    "Drones",
    "Food container",
    "Oxygen tanks"
  ]

  equipmentBeingEdited: string = null;

  constructor() { }

  add(equipment: string) {
    this.equipment.push(equipment);
  }

  remove(part: string) {
    let index = this.equipment.indexOf(part);
    this.equipment.splice(index, 1);
  }

  edit(part: string) {
    this.equipmentBeingEdited = part;
 }

 save(name: string, part: string) {
  let index = this.equipment.indexOf(part)
  this.equipment.splice(index, 1, name);
  this.equipmentBeingEdited = null;
  }

  ngOnInit() {
  }

}
