var wood = 320;
var inventory = [];

document.getElementById("s1").style.display="block";
  inventory.push("Axe,"+wood+" Wood");
  alert(inventory);
document.getElementById("s1c1").addEventListener("click",function(){
  document.getElementById("s2").style.display="block";
  document.getElementById("s1c2").style.display="none";
});

document.getElementById("s1c2").addEventListener("click",function(){
  document.getElementById("s3").style.display="block";
  document.getElementById("s1c1").style.display="none";
});

document.getElementById("s2c1").addEventListener("click",function(){
  inventory.push("Sniper");
  alert(inventory);
  document.getElementById("s5").style.display="block";
  document.getElementById("s2c2").style.display="none";
});

document.getElementById("s2c2").addEventListener("click",function(){
  inventory.push("Pump Shotgun");
  alert(inventory);
  document.getElementById("s4").style.display="block";
  document.getElementById("s2c1").style.display="none";
});

document.getElementById("s3c1").addEventListener("click",function(){
  inventory.push(wood-70);
  alert(inventory);
  document.getElementById("s6").style.display="block";
  document.getElementById("s3c2").style.display="none";
});

document.getElementById("s3c2").addEventListener("click",function(){
  document.getElementById("s7").style.display="block";
  document.getElementById("s3c1").style.display="none";
});

document.getElementById("s5").addEventListener("click",function(){
  document.getElementById("s5").style.display="none";
  document.getElementById("s8").style.display="block";
});
