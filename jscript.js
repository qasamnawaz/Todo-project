var objects=[];
var obj ={
    title:'' ,
    description:'',
    location:'',
    date:''
}

  function sabmit(){

  var title=  document.getElementById('title').value;
  if(title !==""){
    obj.title=title;
     //title='';   
    }
  var description=  document.getElementById('description').value;
  if(description !==""){
      obj.description=description;
     //description='';
    }
  var location=  document.getElementById('location').value;
  if(location !==""){
      obj.location=location;
     //location='';
    }
  var date=  document.getElementById('date').value;
  if(date !==""){
      obj.date=date;
      //date='';
    }
  
  obj ={
      title:title,
      description:description,
      location:location,
      date:date
  }

   objects.push(obj);
   settodos();   
    }



    if( JSON.parse(localStorage.getItem('todo')) ==null){ 
      objects=[];
        }
        else {
        objects=JSON.parse(localStorage.getItem('todo'));
        }
    function settodos(){
      var putt =JSON.stringify(objects);
      localStorage.setItem('todo', putt);
      gettodos();
    }
    function gettodos(){
      var gett=localStorage.getItem('todo');
      var objects = JSON.parse(gett);
      alltodos();
        }

    
  window.onload=alltodos(); placeholder(); describe(); 
    function placeholder(){
    if( document.getElementById('ul-1').hasChildNodes()===false){
      document.getElementById('placeholder').innerHTML="<p>Your Todos will apper here.</p>"    
    }  
  }
  function describe(){
    if( document.getElementById('ul-detail').hasChildNodes()===false){
      document.getElementById('describe').innerHTML="<p>To check detail of a Todo click on detail icon</p>"
    }
  } 

  function alltodos() {
  document.getElementById('ul-1').innerHTML='';
  for(var i=0;i<objects.length;i++){
  var target=document.getElementById('ul-1'); 
  var li = document.createElement('li');
  li.setAttribute("class","collection-item teal lighten-2 cls8");
  li.setAttribute("id","task");
  li.innerText=objects[i].title;
  var span=document.createElement('span');
  span.setAttribute("class","secondary-content cls9")
  span.innerHTML="<i class='fas fa-trash black-text' title='Delete' onclick='remove(i)'></i><i class='fas fa-pen prefix black-text' title='Edit' onclick='var q= this.parentNode.parentNode.innerText ; editing(q)' ></i><i class='fas fa-info prefix black-text' onclick='var q= this.parentNode.parentNode.innerText ; detail(q)' title='Detail' ></i>"
  li.appendChild(span);
  target.insertBefore(li,target.childNodes[0]); 
}  
}



var i;
function remove(i){
  window.location.reload();
  (objects.splice(i,1));
   settodos();
   placeholder();
}


function detail(a){  
  var n;
  for(i=0;i<objects.length;i++){
   if(objects[i].title === a){
     n=i;
  
  }}
gettodos();
  document.getElementById('describe').setAttribute("class","hide");
 var no= document.getElementById('ul-detail');
 document.getElementById('ul-detail').innerHTML='';
  var li1=document.createElement('li');
  var li2=document.createElement('li');
  var li3=document.createElement('li');
  var li4=document.createElement('li');
  var span1=document.createElement('span');
  var span2=document.createElement('span');
  var span3=document.createElement('span');
  var span4=document.createElement('span');
  li1.setAttribute("class","collection-item teal lighten-2 cls6");
  li1.setAttribute("id","task1");
  li2.setAttribute("class","collection-item teal lighten-2 cls6");
  li3.setAttribute("class","collection-item teal lighten-2 cls6");
  li4.setAttribute("class","collection-item teal lighten-2 ");
  li1.innerText="Title:";
  li2.innerText=  "Description:";
  li3.innerText="Location:";
  li4.innerText= "Date:";
   span1.innerText=objects[n].title;
   span2.innerText=  objects[n].description;
   span3.innerText=objects[n].location;
   span4.innerText= objects[n].date;
   span1.setAttribute("class","secondary-content black-text cls7");
   span2.setAttribute("class","secondary-content black-text cls7");
   span3.setAttribute("class","secondary-content black-text cls7");
   span4.setAttribute("class","secondary-content black-text ");
   li1.appendChild(span1);
   li2.appendChild(span2);
   li3.appendChild(span3);
   li4.appendChild(span4);
  var btn= document.createElement("input");
   btn.setAttribute("type","submit");
   btn.setAttribute("value","OKAY");
   btn.setAttribute("class","btn cls2 red ");
   btn.setAttribute("onclick","window.location.reload()");
   var btn1= document.createElement("input");
   btn1.setAttribute("type","submit");
   btn1.setAttribute("value","Task Done");
   btn1.setAttribute("class","btn cls2 red ");
   btn1.setAttribute("onclick","var v =document.getElementById('task1').innerText;complete(v);");
   no.appendChild(li1);
   no.appendChild(li2);
   no.appendChild(li3);
   no.appendChild(li4);
   no.appendChild(btn);
   no.appendChild(btn1);
}
var a,n;
function editing(a){  
  document.getElementById('hide').classList.add("hide");
  document.getElementById('edit').classList.remove("hide");
  
  gettodos();
  for(i=0;i<objects.length;i++){
   if(objects[i].title === a){
     n=i;
  }
}
document.getElementById('title').value = objects[n].title;
document.getElementById('description').value = objects[n].description;
document.getElementById('location').value = objects[n].location;
document.getElementById('date').value = objects[n].date;

}
function update(n){
var title= document.getElementById('title').value 
var description= document.getElementById('description').value
var location= document.getElementById('location').value 
var date=  document.getElementById('date').value 
obj ={
  title:title,
  description:description,
  location:location,
  date:date
}
 gettodos();
 objects[n]=obj;
 settodos();
 gettodos();
}

var comp=[];
var w;
function complete(v){
 w = v.slice(6);
  gettodos();
  for(i=0;i<objects.length;i++){
   if(objects[i].title === w){
     w=i;
  }
}
obj1 = {
  title:objects[w].title,
  description:objects[w].description,
  location:objects[w].location,
  date:objects[w].date,
}
if( JSON.parse(localStorage.getItem('comp')) ==null){ 
  comp=[];
    }
    else {
    comp=JSON.parse(localStorage.getItem('comp'));
    }
    //alert("Task is completed");
getcomp();
comp.push(obj1);
compset();
function compset(){
  var putt =JSON.stringify(comp);
  localStorage.setItem('comp', putt);
  getcomp();
}
function getcomp(){
  var gett=localStorage.getItem('comp');
  var comp = JSON.parse(gett);
  window.location.reload();
   
}
remove(w);
}