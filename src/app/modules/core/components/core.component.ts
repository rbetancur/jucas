import { Component, OnInit } from '@angular/core';
import { CoreService } from '@core/services/core.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor(public _coreService: CoreService) { }

  ngOnInit(): void {
    this.getDogs();
  }

  getFilms() {
    this._coreService.getFilms().subscribe(film => {
      console.log(film);
    });
  }

  getStarships$(): Observable<any[]> {
    return this._coreService.getStarships();
  }

  getTodos() {
    this._coreService.getTodos().subscribe(todo => console.log(todo));
  }

  getDogs() {
    this._coreService.getDogs().subscribe(dog => console.log(dog));
  }



}
