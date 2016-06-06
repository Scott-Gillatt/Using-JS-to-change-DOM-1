(function() {
  
  document.getElementById("doIt").addEventListener("click", function(){
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    // fullName = firstName + " " + lastName;
    // var id = document.getElementById("fullName")
    // id.innerHTML = fullName;
    // id.setAttribute("class", "nameDisplay")
    
    var template = document.getElementById("template");
    var cln = template.cloneNode(true);
    cln.classList.remove('template');
    cln.getElementsByClassName('firstName')[0].innerText = firstName;
        cln.getElementsByClassName('lastName')[0].innerText = lastName;
        document.getElementById('fullName').innerHTML = "";
    document.getElementById('fullName').appendChild(cln);

  })
})();