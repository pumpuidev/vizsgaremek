import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from 'src/app/model/rating';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { RatingService } from 'src/app/service/rating.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.ratingColumns;
  list$: Observable<Rating[]> = this.ratingService.getAll();

  constructor(
    private config: ConfigService,
    private ratingService: RatingService,
  ) { }

  ngOnInit(): void {
  }

}
