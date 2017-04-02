exports.filtrarCurso=function(cursos,destrezas){
//Ejemplos:
// var destrezas=['programacion orientada a objetos','analisis de algoritmos','programacion lineal','programacion gama']; //destrezas del profesor
// var cursos=['programacion orientada a eventos','programacion visual','analisis matematico','programacion estructurada']; //cursos ofertados 

    var posiblesCursos=[];   
    var indexPosibles=0;
    var acu=1;





    var stringDestr=[];
    var stringCursos=[];

    var xy;

    for(i=0;i<destrezas.length;i++){
        stringDestr=destrezas[i].split(" ");
        for(j=0;j<cursos.length;j++){
            stringCursos=cursos[j].split(" ");
            acu=1;

            for(x=0;x<stringDestr.length;x++){
                for(y=0;y<stringCursos.length;y++)
                    if((stringDestr[x].length>3) && (stringCursos[y].length>3))
                        if(stringDestr[x].toUpperCase()==stringCursos[y].toUpperCase())
                            acu++;
            }

            if(acu>=2)
                posiblesCursos.push(cursos[j]);	
            }
        }


    var vect=[];

    for (i=0;i<posiblesCursos.length;i++){
        if(vect.indexOf(posiblesCursos[i]) == -1)
            vect.push(posiblesCursos[i]);
    }


    //EL vector vect   tiene los cursos que el docente puede tomar

    for(i=0;i<vect.length;i++){

            console.log(vect[i]);
    }
    if(vect.length==0)
    {
        console.log("No se encontraron coincidencias");
        return 0;
    }else{
        return vect;
    }
}