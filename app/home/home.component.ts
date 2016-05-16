import {Component, OnInit} from 'angular2/core';
import {FBSDK1} from '../FB/fbSDK';
import {Router, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
  templateUrl:'app/home/home.html'
})

export class HomeComponent implements OnInit{
  constructor(private _router:Router){
  }
  fbsdk:FBSDK1= new FBSDK1();
  profilePicUrl:string='';
  userName:string='';

 ngOnInit():void{
      this.update();
  }

  update():void{
    this.getProfilePic();
    this.getName();
  }

  logoutFB():void{
    this.fbsdk.logout((response)=> {
      // user is now logged out
      console.log(this.userName);
      this._router.navigate(['Login']);
    });
  }

  sharePage():void{

    this.fbsdk.ui(
      {
        method: 'share',
        href: 'http://www.eponymous.co',
      },
      // callback
      (response) =>{
        if (response && !response.error_message) {
          alert('Posting completed.');
        } else {
          alert('Error while posting.');
        }
      }
    );
  }



  getName():string{
    FB.api(
      "/me",
      (response)=> {
        if (response && !response.error) {
          /* handle the result */
          console.log(response);
          this.userName=response.name;
          return response.name;
        }
        console.log(response);
      }
    );
  }

  getProfilePic():string{
    /* make the API call */
    FB.api(
      "/me/picture",
       (response)=> {
        if (response && !response.error) {
          /* handle the result */
          console.log(response);
          this.profilePicUrl=response.data.url;
          return response.data.url;
        }
        console.log(response);
      }
    );
  }

}

