//This implements FB JS SDK and uses the FB global attached after init
import {FBSDK} from 'fbsdk.d';

export class FBSDK1 implements FBSDK{
  /* This method is used to initialize and setup the SDK. */
  init(fbInitObject : FBInitParams) : void{
    FB.init(fbInitObject);
  };

  /* This method lets you make calls to the Graph API. */
  api(path : string, method : string, callback : (fbResponseObject : Object) => any) :  Object{
    return;
  };
  api(path : string, params : Object, callback : (fbResponseObject : FBResponseObject) => any) :  Object{
    return;
  };
  api(path : string, method : string, params : Object, callback : (fbResponseObject : Object) => any) : Object{
    return;
  };

  /* This method is used to trigger different forms of Facebook created UI dialogs. */
  ui(params : FBUIParams, handler : (fbResponseObject : Object) => any) : void{
    FB.ui(params,handler);
  };

  /* Allows you to determine if a user is logged in to Facebook and has authenticated your app */
  getLoginStatus(handler : Function, force?: Boolean) : void{
    FB.getLoginStatus(handler);
  };

  /* Calling FB.login prompts the user to authenticate your application using the Login Dialog. */
  login(handler : (fbResponseObject : Object) => any, params?: FBLoginOptions): void{
    FB.login(handler);
  };

  /* Log the user out of your site and Facebook */
  logout(handler : (fbResponseObject : Object) => any) : void{
    FB.logout(handler);
  };

  /* Synchronous accessor for the current authResponse. */
  getAuthResponse() : Object{
    return;
  };
  Event : FBSDKEvents;
  XFBML : FBSDKXFBML;
  Canvas : FBSDKCanvas;
}
