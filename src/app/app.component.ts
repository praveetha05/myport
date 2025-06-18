import { Component, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { filter, map, mergeMap } from 'rxjs';


@Component({
  selector: 'app-root',
  encapsulation:ViewEncapsulation.Emulated,

  imports: [RouterOutlet,RouterModule,HomeComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';

  showNavbar = true;

   constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        this.showNavbar = data['showNavbar'] !== false;
      });
  }

  
 
}
