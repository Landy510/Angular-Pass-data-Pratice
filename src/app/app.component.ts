import { Component } from '@angular/core';
import { MissionService } from './mission.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MissionService]
})
export class AppComponent {
  astronauts = ['Love1', 'Apollo 2', 'Number 3']
  history: string[] = [];
  missions = [
    'Fly to the Moon!',
    'Fly to the Mars!',
    'Fly to the Vegas!'
  ]
  nextMission = 0;

  constructor(private missionService: MissionService) {
    this.missionService.missionConfirm$
      .subscribe(astronaut => this.history.push(`${astronaut} confirmed the mission`))
  }


  announce(): void {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if(this.nextMission === this.missions.length) this.nextMission = 0;
  }

}
