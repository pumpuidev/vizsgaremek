import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Director } from 'src/app/model/director';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { DirectorService } from 'src/app/service/director.service';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.scss']
})
export class DirectorsComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.directorColumns;
  list$: Observable<Director[]> = this.directorService.getAll();

  constructor(
    private config: ConfigService,
    private directorService: DirectorService,
  ) { }

  ngOnInit(): void {
  }

}
