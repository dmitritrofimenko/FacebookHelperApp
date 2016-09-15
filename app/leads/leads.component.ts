import {Component} from 'angular2/core';
import {LeftSideMenuComponent} from "../left-side-menu/left-side-menu.component";

@Component({
  selector:'leads',
  templateUrl:'app/leads/leads.component.html',
  directives:[LeftSideMenuComponent]
})
export class LeadsComponent {

}
