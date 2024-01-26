function validate_login_form()
    {
      var email_div = document.getElementById("email1");
      var email = email_div.value;
      var pass_div= document.getElementById("password1");
      var password = pass_div.value;
      var email_error = document.getElementById("e-mail-error");
      var password_error = document.getElementById("passwd-error");
      var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      var flag = 0;
      if(email == "")
      {
        email_error.innerHTML = "Email cannot be empty";
        email_div.style.border = "3px solid red";
        flag = 1;
      }
      else if(!email_regex.test(email))
      {
        email_error.innerHTML = "Invalid email";
        email_div.style.border = "3px solid red";
        flag = 1;
      }
      else
      {
        email_error.innerHTML = "";
      }
      if(password == "")
      {
        password_error.innerHTML = "Password cannot be empty";
        pass_div.style.border = "3px solid red";
        flag = 1;
      }
      else
      {
        password_error.innerHTML = "";
      }
      if(flag == 1)
      {
        return false;
      }
      else
      {
        return true;
      }

    }


    function validate_signup_form()
    {
        
        var name_bool = name_leave();
        var mail_bool= email_leave();
        var pass_bool = password_leave();
        
        if(name_bool && mail_bool && pass_bool)
        {
            return true;
        }
        else
        {
            return false;
        }

    }

    function email_leave()
    {
      console.log("email leave on focus out");
      var email_div = document.getElementById("email1");
      var email = email_div.value;
      var email_error = document.getElementById("e-mail-error");
      var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if(email == "")
      {
        email_error.innerHTML = "Email cannot be empty";
        email_div.style.border = "3px solid red";
        return false;
      }
      else if(!email_regex.test(email))
      {
        email_error.innerHTML = "Invalid email";
        email_div.style.border = "3px solid red";
        return false;
      }
      else
      {
        email_error.innerHTML = "";
        email_div.style.border = "3px solid green"; 
        return true;
      }

      return true;

    }

    function password_leave()
    {
      console.log("password leave on focus out");
      var pass_div= document.getElementById("password1");
      var password = pass_div.value;
      var password_error = document.getElementById("passwd-error");
      if(password == "")
      {
        password_error.innerHTML = "Password cannot be empty";
        pass_div.style.border = "3px solid red";
        return false;
      }
      else
      {
        password_error.innerHTML = "";
        pass_div.style.border = "3px solid green"; 
        return true;
      }

      return true;

    }

    function name_leave()
    {
        console.log("name leave on focus out");
        var name_div = document.getElementById("name");
        var name = name_div.value;
        var name_error = document.getElementById("name-error");
        var name_regex = /^[a-zA-Z][a-zA-Z\s]*$/;

        if(name == "")
        {
            name_error.innerHTML = "Name cannot be empty";
            name_div.style.border = "3px solid red";
            return false;
        }
        else if(!name_regex.test(name))
        {
            name_error.innerHTML = "Invalid name";
            name_div.style.border = "3px solid red";
            return false;
        }
        else
        {
            name_error.innerHTML = "";
            name_div.style.border = "3px solid green"; 
            return true;
        }
    
        return true;
    }