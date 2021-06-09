function myFunction(){
    var input=document.querySelector("#mySearch");
    var filter=input.value.toUpperCase();
    var ul=document.querySelector("#myMenu");
    var li=document.querySelectorAll("#myMenu li");
    for(let i=0;i<li.length;i++){
      var t=li[i].querySelectorAll("a")[0];
      if(t.innerHTML.toUpperCase().indexOf(filter)>=0){
          li[i].style.display="block";
      }else{
          li[i].style.display="none";
      }
    } 
}