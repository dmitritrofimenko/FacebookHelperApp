import {Component, OnInit} from 'angular2/core';
import {FBConnector} from '../FB/fbConnector.component';
import {FBSDK1} from '../FB/fbSDK';
import {Response} from 'angular2/http';
import {Router,RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
@Component({
  templateUrl:'app/login/login.html'
})

export class LoginComponent implements OnInit{
  constructor(private _router: Router ){}
  fbSDK: FBSDK1= new FBSDK1();
  //OnInit connects our app to facebook
  // the FB global is available on window after OnInit runs
  ngOnInit():void{
    var fbCon: FBConnector = new FBConnector('1600042446978191');
    fbCon.initFB();
  }


  loginFB():void{
    this.fbSDK.login( (response)=> {
      console.log(response);
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        this._router.navigate(['Home']);
      }
    });
  }

}
