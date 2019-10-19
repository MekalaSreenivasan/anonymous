define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** init defined for frmLogin **/
    AS_Form_b81ff2582b9d4824b8625daaf931652b: function AS_Form_b81ff2582b9d4824b8625daaf931652b(eventobject) {
        var self = this;
        this.view.flxLoginCard.shadowDepth = 2;
        this.view.flxLoginCard.shadowType = constants.VIEW_BOUNDS_SHADOW;
    },
    /** onClick defined for btnSignin **/
    AS_Button_j69e4bb86b4544ae9b0f5bf5ce29703b: function AS_Button_j69e4bb86b4544ae9b0f5bf5ce29703b(eventobject) {
        var self = this;
        kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        this.doLogin();
    }
});