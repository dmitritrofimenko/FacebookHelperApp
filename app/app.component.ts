import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig,ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {FBConnector} from './FB/fbConnector.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'my-app',
  template: `
     <div>
        <nav class='nav-wrapper light-blue darken-4'>
                <span class='center brand-logo'>{{pageTitle}}</span>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
  `,
  directives:[ROUTER_DIRECTIVES],
  providers:[HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

@RouteConfig([
  {path:'/login', name:'Login', component:LoginComponent, useAsDefault:true},
  {path:'/home', name:'Home', component:HomeComponent}

])

export class AppComponent{
  pageTitle: string='Social-APP-DEMO';
}
