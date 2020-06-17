var list = [document.getElementById("listmenu1"),document.getElementById("listmenu2"),document.getElementById("listmenu3"),document.getElementById("listmenu4"),document.getElementById("listmenu5")];
var item = [document.getElementById("listitem1"),document.getElementById("listitem2"),document.getElementById("listitem3"),document.getElementById("listitem4"),document.getElementById("listitem5")]

list[0].addEventListener('click',function(event){
  for(var i=0;i<5;i++){

    item[i].style.display='none';
  }
  item[0].style.display='block';
});

list[1].addEventListener('click',function(event){
  for(var i=0;i<5;i++){

    item[i].style.display='none';
  }
  item[1].style.display='block';
});

list[2].addEventListener('click',function(event){
  for(var i=0;i<5;i++){

    item[i].style.display='none';
  }
  item[2].style.display='block';
});

list[3].addEventListener('click',function(event){
  for(var i=0;i<5;i++){

    item[i].style.display='none';
  }
  item[3].style.display='block';
});

list[4].addEventListener('click',function(event){
  for(var i=0;i<5;i++){

    item[i].style.display='none';
  }
  item[4].style.display='block';
});
