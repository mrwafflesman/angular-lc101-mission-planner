import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = [
    "Mars soil sample",
    "Plant growth in habitat",
    "Human bone density"
  ]

  experimentBeingEdited: string = null;

  constructor() { }

  add(experimentName: string) {
    this.experiments.push(experimentName);
  }

  remove(experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
 }

 save(name: string, experiment: string) {
    let index = this.experiments.indexOf(experiment)
    this.experiments.splice(index, 1, name);
    this.experimentBeingEdited = null;
  }

  ngOnInit() {
  }

}
