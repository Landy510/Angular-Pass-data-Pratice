import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MissionService {

  private missionAnnounceSource = new Subject<string>();
  private missionConfirmSource = new Subject<string>();

  missionAnnounce$ = this.missionAnnounceSource.asObservable();
  missionConfirm$ = this.missionConfirmSource.asObservable();

  announceMission(mission: string): void {
    this.missionAnnounceSource.next(mission);
  }

  confirmMission(astronaut: string): void {
    this.missionConfirmSource.next(astronaut);
  }
}
