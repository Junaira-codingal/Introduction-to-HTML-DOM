function validate(e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const confpass = document.getElementById("confirmPassword").value;
  const age = document.getElementById("age").value;

  const msgBox = document.getElementById("message");
  let message = "";

  if (email === "") {
    message = "Please Enter an Email";
    msgBox.style.color = "red";
  } else if (pass === "") {
    message = "Password Must be Atleast 8 Characters long";
    msgBox.style.color = "red";
  } else if (confpass === "") {
    message = "Confirm Password must be entered";
    msgBox.style.color = "red";
  } else if (pass !== confpass) {
    message = "Passwords do not match!! Try Again";
    msgBox.style.color = "red";
  } else if (age == "") {
    message = "Age Must be Between 12 and 50";
    msgBox.style.color = "red";
  } else {
    message = "Account Created Successfully! Redirecting to Login...";
    msgBox.style.color = "green";
    alert("Account Created Successfully! Back To the Login");
  }

  msgBox.innerText = message;
}
