var lst=['Programadora','Diseñadora','Analista'];
var content=document.getElementById('palabras');
var contentPalabra=content.innerHTML;
//condicion para agregar palabra
var addcontent=false;
//contador
var x=0;

var lstabel=['Programador','Diseñador','Analista'];
var contentabel=document.getElementById('pabel');
var contentPalabraabel=contentabel.innerHTML;
//condicion para agregar palabra
var addcontentabel=false;
//contador
var xabel=0;





setInterval(function(){
     if(contentPalabra.length > 0 && !addcontent){
          content.innerHTML=contentPalabra.slice(0,-1);
     contentPalabra=content.innerHTML;
     }
     else{
          addcontent=true;
     }


     //agregando palabras (seteando)
     if(addcontent){
          if(contentPalabra.length < lst[x].length){
               content.innerHTML=lst[x].slice(0,contentPalabra.length+1);
               contentPalabra=content.innerHTML;
          }
          else{
               if(x < lst.length){
                    x++;
               }
               addcontent=false;

          }
     }
     if(x == lst.length){
     x=0;
     }
if(contentPalabraabel.length > 0 && !addcontentabel){
          contentabel.innerHTML=contentPalabraabel.slice(0,-1);
     contentPalabraabel=contentabel.innerHTML;
     }
     else{
          addcontentabel=true;
     }


     //agregando palabras (seteando)
     if(addcontentabel){
          if(contentPalabraabel.length < lstabel[x].length){
               contentabel.innerHTML=lstabel[x].slice(0,contentPalabraabel.length+1);
               contentPalabraabel=contentabel.innerHTML;
          }
          else{
               if(xabel< lstabel.length){
                    xabel++;
               }
               addcontentabel=false;

          }
     }
     if(xabel== lstabel.length){
     xabel=0;
     }

},90);

     



