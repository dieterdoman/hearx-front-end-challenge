import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

const workflow = {
  download: {
    next: 'details',
    previous: '',
  },
  details: {
    next: 'test',
    previous: 'download',
  },
  test: {
    next: 'results',
    previous: 'details'
  },
  results: {
    previous: 'test',
  }
};

@Injectable()
export class FlowGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const previous = this.router.url.replace('/', '');
    const next = route.url[0].path.replace('/', '');
    if (!this.checkComeFromPreviousStep(previous, next) && !this.checkGoToNextStep(previous, next)) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  checkComeFromPreviousStep(previous: string, next: string) {
    if (workflow[next]) {
      return workflow[next].previous === previous;
    }
    return false;
  }

  checkGoToNextStep(previous: string, next: string) {
    if (workflow[next]) {
      return workflow[next].next === previous;
    }
    return false;
  }
}
