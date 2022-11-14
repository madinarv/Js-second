function CodeAcademyGroup()
{
    var x = document.getElementById("name").value;
    var no = x.slice(-3);
  
if(no>=100 && no<200){
  
    document.getElementById("groupname").style.color="yellow";

    document.getElementById("groupname").innerHTML=x
}
else if(no>=200 && no<300){
  
    document.getElementById("groupname").style.color="blue";

    document.getElementById("groupname").innerHTML=x
}
else if(no>=300 && no<400){
  
    document.getElementById("groupname").style.color="black";

    document.getElementById("groupname").innerHTML=x
}
else{
    alert("Duzgun daxil edin");
}
}