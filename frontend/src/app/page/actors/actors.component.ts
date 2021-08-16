import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/model/actor';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.actorColumns;
  list$: Observable<Actor[]> = this.actorService.getAll();

  constructor(
    private config: ConfigService,
    private actorService: ActorService,
  ) { }

  ngOnInit(): void {
  }

}
