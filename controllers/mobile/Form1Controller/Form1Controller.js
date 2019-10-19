define({ 

mappingData: function (eventobject) {
    var self = this;

    function INVOKE_OBJECT_SERVICE__i203cd619a45443a84158877c765fadb_Callback(accounts) {}
  	var accounts_inputparam = {};
    accounts_inputparam["serviceID"] = "customers$accounts$get";
    accounts_inputparam["options"] = {
        "access": "online",
        "CRUD_TYPE": "get"
    };
    var odataParams = [];
  	//Need to add customer ID
    odataParams.push("$filter=" + "customer_id eq '" + undefined.undefined + "'");
    accounts_inputparam["options"]["odataurl"] = odataParams.join("&");
    var accounts_httpheaders = {};
    accounts_inputparam["httpheaders"] = accounts_httpheaders;
    var accounts_httpconfigs = {};
    accounts_inputparam["httpconfig"] = accounts_httpconfigs;
    customers$accounts$get = mfobjectsecureinvokerasync(accounts_inputparam, "customers", "accounts", INVOKE_OBJECT_SERVICE__i203cd619a45443a84158877c765fadb_Callback);
}

 });