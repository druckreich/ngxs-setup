import {Action, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {GetVersion} from './main.actions';
import {MainService} from './main.service';
import {tap} from 'rxjs/operators';

export interface BaseState<T> {
  pending?: boolean,
  data?: T
}

export interface MainStateModel {
  version: BaseState<string>;
}

@State<MainStateModel>({
  name: 'main',
  defaults: {
    version: {}
  },
})
export class MainState implements NgxsOnInit {

  // Memoized Selector
  @Selector()
  static version(state: MainStateModel): BaseState<string> {
    return state.version;
  }

  constructor(private mainService: MainService) {

  }

  ngxsOnInit(ctx?: StateContext<any>): void | any {
    ctx.dispatch(new GetVersion());
  }

  @Action(GetVersion)
  getVersion({getState, patchState, setState, dispatch}: StateContext<MainStateModel>, action: GetVersion) {
    setState({
      version: {
        pending: true
      }
    });
    return this.mainService.getVersion().pipe(
      tap((version: string) => {
        setState({
          version: {
            pending: false,
            data: version
          }
        });
      })
    );
  }
}
