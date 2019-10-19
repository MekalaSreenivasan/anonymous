define({ 

  doLogin : function() {
    try {
      var argument = {};
      var sdkClient = new kony.sdk.getCurrentInstance();
      if (Object.keys(sdkClient).length !== 0) {
        this.authorizationClient = sdkClient.getIdentityService("AnonymousLogin");
      }
      if (this.authorizationClient === null || this.authorizationClient === undefined) {
        alert("Authorization object null - Connect to MF");
        kony.application.dismissLoadingScreen();
        return;
      }
      argument.customerid = this.view.txtUsername.text;
      argument.password = this.view.txtPassword.text;
      this.authorizationClient.login(argument, this.successWrapper.bind(this), this.failureWrapper.bind(this));
    } catch (exception) {
      kony.application.dismissLoadingScreen();
      alert(JSON.stringify(exception));
    }
  },
  
  successWrapper : function() {
    alert("Login Success");
    kony.application.dismissLoadingScreen();
  },
  
  failureWrapper : function() {
    alert("Login Failure");
    kony.application.dismissLoadingScreen();
  }
  

});