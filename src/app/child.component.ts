import { Component, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { MissionService } from './mission.service';
@Component({
  selector: 'app-child',
  template: `
    <p>

      <button
        type="button"
        [disabled]="!announced || confirmed"
        (click)="confirm()"
      >Confirm</button>
    </p>
  `
})
export class ChildComponent implements OnDestroy{
  @Input() astronaut = '';
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService:MissionService){
    this.subscription = this.missionService.missionAnnounce$
      .subscribe(mission => {
        this.mission = mission
        this.announced = true
        this.confirmed = false
      })
  }

  confirm(): void {
    this.missionService.confirmMission(this.astronaut)
    this.confirmed = true
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
