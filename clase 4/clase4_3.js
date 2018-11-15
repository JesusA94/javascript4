var nombres=[];
document.form1.onsubmit=function()
{
    return false
}

document.form1.nombre.onkeypress=function(event)
{
   var c=(event.charCode==0)? event.keyCode:event.charCode;
   if (c==13)
   {
      document.form1.agregar.onclick();
   }
}

function mostrarListado()
{
    var div=document.getElementById("listado")
    div.innerHTML="";
    for (let i=0;i<nombres.length;i++)
    {
        div.innerHTML+=(i+1)+ " "+ nombres[i] + "<br>";
    }
}




document.form1.agregar.onclick=function()
{
    var nombre=document.form1.nombre;
    if (nombre.value!="")
    {
        let posicion=nombres.indexOf(nombre.value.toUpperCase())
        //indeFox busca un elemento en un arreglo y retornaun numero -1 no esta
        //en el arreglo lo que estoy buscando, o un numero 0 y length -1 si
        //esta el elemento buscado
        if (posicion!=-1)
        {
            alert("Esta Registrado")
        }
        
         else
        {
            nombres.push(nombre.value.toUpperCase());
            console.log(nombres);
            nombre.value="";
            mostrarListado();
        }

    }

    
}
