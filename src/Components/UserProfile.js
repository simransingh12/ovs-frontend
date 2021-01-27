var UserProfile = (function() {
    var email = "";
  
    var getName = function() {
      return email;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(emailid) {
      email = emailid;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getName: getName,
      setName: setName
    }
  
  })();
  
  export default UserProfile;