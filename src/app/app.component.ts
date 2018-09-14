import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {MainState, MainStateModel} from './+store/main.state';
import {GetVersion} from './+store/main.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Select(MainState.version)
  memoizedVersion$: Observable<string>;

  version$: Observable<MainStateModel>;

  constructor(private store: Store) {
    this.version$ = this.store.select(s => s.main.version);
  }

  ngOnInit() {
  }
}
