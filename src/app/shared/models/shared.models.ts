import { Observable } from 'rxjs';

export class HttpDefferedResult<T> {
  constructor(
    public requestLoading$: Observable<boolean>,
    public requestResult$: Observable<T>
  ) {}

  public execute(
    callbackFn: (request$: Observable<T>, loading$: Observable<boolean>) => void
  ): void {
    callbackFn(this.requestResult$, this.requestLoading$);
  }
}
