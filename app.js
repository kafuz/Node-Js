let info=process.argv[2]; let vector= Array();
for (let i = 0; i < info.length; i++) {vector.push(info[i]);}

const root=
{ 
    Llav:{ iz:'(', de:')' },
    Corc:{ iz:'[', de:']' },
    Pare:{ iz:'{', de:'}' }
}

function revision(key)
{
  if(vector.length>1)
  {
    switch (key) 
    {
        case root.Llav.iz:
            return descartar('Llav');
        case root.Corc.iz:
            return descartar('Corc');
        case root.Pare.iz:
            return descartar('Pare');
    }
  }
  else { return false; }
}

const descartar=(des)=>
{
 for (let i = 0; i < vector.length;i++)
 {
  if(vector[i]===root[des].de)
  {
    vector.splice(i,1); vector.splice(0,1);
    return true;
  }
 }
}

const main=()=>
{
    let estado;
    while(true)
    {
        let valor=revision(vector[0]);
        estado=valor;
        if(!valor)
        {break;}
    }

    vector.length===0 ? console.log('Si paso') : console.log('No Paso');
}


main();
