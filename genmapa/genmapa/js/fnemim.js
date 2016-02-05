var table = '';
var progresoPorTabla = 0;
var estatus;
var unidadMedidaSelectedValor;
var barCompletas = 0
function despliegaTabla() {

    barCompletas = 0;

    document.getElementById("mensajeModal").innerHTML = "";
    list = document.getElementById("mensaje");
    if (list != null) {
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
    }
    list = document.getElementById("controlTabs");
    if (list != null) {
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
    }
    list = document.getElementById("tabsContenidos");
    if (list != null) {
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
    }

    for (i = 0; i < todosLosEstatus["estatus"].length; i++) {
        document.getElementById("estatus" + todosLosEstatus["estatus"][i].Id).hidden = true;
    }

    for (i = 0; i < todosLosEstatus["estatusCifra"].length; i++) {
        document.getElementById("estatusCifra" + todosLosEstatus["estatusCifra"][i].Id).hidden = true;
    }


    var info = new JSON.constructor();
    info.variable = varSelected;
    info.tipodato = tipoDatoSelected;
    info.actividad = actSelected;
    info.periodo = anioSelected;
    var fuente = document.getElementById("fuente").value;
    if (info.actividad.length > 0 && info.periodo.length > 0 && anioSelected.length > 0 && tipoDatoSelected.length > 0) {
        var actividad = '';

        for (i = 0; i < info.actividad.length; i++) {
            actividad += info.actividad[i];
            if (i != info.actividad.length - 1) {
                actividad += ',';
            }

        }

        var variable = '';

        for (i = 0; i < info.variable.length; i++) {
            variable += info.variable[i];
            if (i != info.variable.length - 1) {
                variable += ',';
            }

        }

        var periodo = '';

        for (i = 0; i < info.periodo.length; i++) {
            periodo += info.periodo[i];
            if (i != (info.periodo.length) - 1) {
                periodo += ',';
            }

        }


        var tipodato = '';

        for (i = 0; i < info.tipodato.length; i++) {
            tipodato += info.tipodato[i];
            if (i != (info.tipodato.length) - 1) {
                tipodato += ',';
            }

        }
        var entidad = document.getElementById("entidad").value;


        list = document.getElementById("barras");
        if (list != null) {
            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
        }
        for (i = 0; i < tipoDatoSelected.length; i++) {
            var divRow = document.createElement("div");
            divRow.setAttribute("class", "row");
            document.getElementById("barras").appendChild(divRow);

            divRow.innerHTML = "<h5 id=\"tituloBarra" + tipoDatoSelected[i] + "\">" + todosLosTiposDeDatos[tipoDatoSelected[i]].Descripcion + ": <small id=\"pocentajeBarra" + tipoDatoSelected[i] + "\">0%</small></h5>"
            var divProgress = document.createElement("div");
            divProgress.id = "progress" + tipoDatoSelected[i];
            divProgress.setAttribute("class", "progress");
            divRow.appendChild(divProgress);

            var divbar = document.createElement("div");
            divbar.setAttribute("class", "progress-bar progress-bar-info  progress-bar-striped active");
            divbar.setAttribute("role", "progressbar");
            divbar.setAttribute("style", "width: 0%;");
            divbar.setAttribute("title", "0%");
            divbar.id = "barra" + tipoDatoSelected[i];
            divProgress.appendChild(divbar);
        }




        var x = 0;

        document.getElementById("tableText").value = "";

        unidadMedidaSelectedValor = new JSON.constructor();
        unidadMedidaSelectedValor.length = 0;
        for (var tiposDeDatos = 0; tiposDeDatos < tipoDatoSelected.length; tiposDeDatos++) {

            ////////////////////////////////////////////////////////

            document.getElementById("variable").innerHTML = variable;

            document.getElementById("variable").value = variable;



            document.getElementById("actividad").innerHTML = actividad;

            document.getElementById("actividad").value = actividad;



            document.getElementById("tipodato").innerHTML = tipodato;

            document.getElementById("tipodato").value = tipodato;



            document.getElementById("idfuente").innerHTML = fuente;

            document.getElementById("idfuente").value = fuente;



            document.getElementById("anio").innerHTML = periodo;

            document.getElementById("anio").value = periodo;


            document.getElementById("identidad").innerHTML = entidad;

            document.getElementById("identidad").value = entidad;


            ////////////////////////////////////////////////////////
            if (tiposDeDatos == 0) {
                $('#myModal').modal('show')
            }
            actualizaBarraDeEstado(tipoDatoSelected[tiposDeDatos], 20);
            $.ajax({
                type: "POST",
                url: "ws_servicioweb.asmx/GetTableData",
                data: "{'variable':'" + variable + "','actividad':'" + actividad + "','tipodato':'" + tipoDatoSelected[tiposDeDatos] + "',fuente:'" + fuente + "', anio:'" + periodo + "',entidad:'" + entidad + "'}",
                contentType: "application/json; charset=utf-8",
                datatype: "json",
                success: function (data) {

                    if (data.d != "[]") {




                        var json = JSON.parse(data.d);

                        actualizaBarraDeEstado(json[0].id_tipo_dato, 10);
                        var varSelectedValor = new JSON.constructor();
                        var actSelectedValor = new JSON.constructor();
                        var anioSelectedValor = new JSON.constructor();
                        var tipoDatoSelectedValor = new JSON.constructor();
                        var entidadSelectedValor = new JSON.constructor();
                        varSelectedValor.length = 0;
                        actSelectedValor.length = 0;
                        anioSelectedValor.length = 0;
                        tipoDatoSelectedValor.length = 0;
                        entidadSelectedValor.length = 0;
                        // con este ciclo separo los distintos años, variables, tipos de datos y actividades que contiene la consulta
                        for (i = 0; i < json.length; i++) {
                            var bandera = true;
                            for (j = 0; j < varSelectedValor.length; j++) {
                                if (varSelectedValor[j] == json[i].id_variable_compuesta) {
                                    bandera = false;
                                }
                            }
                            if (bandera) {
                                varSelectedValor[varSelectedValor.length] = json[i].id_variable_compuesta;
                                varSelectedValor.length++;
                            }
                            ////////////////////////////////////////////////////////
                            bandera = true;
                            for (j = 0; j < actSelectedValor.length; j++) {
                                if (actSelectedValor[j] == json[i].id_actividad_compuesta) {
                                    bandera = false;
                                }
                            }
                            if (bandera) {
                                actSelectedValor[actSelectedValor.length] = json[i].id_actividad_compuesta;
                                actSelectedValor.length++;
                            }
                            ////////////////////////////////////////////////////////
                            bandera = true;
                            for (j = 0; j < entidadSelectedValor.length; j++) {
                                if (entidadSelectedValor[j] == json[i].IdEntidad) {
                                    bandera = false;
                                }
                            }
                            if (bandera) {
                                entidadSelectedValor[entidadSelectedValor.length] = json[i].IdEntidad;
                                entidadSelectedValor.length++;
                            }

                            ////////////////////////////////////////////////////////
                            bandera = true;
                            for (j = 0; j < anioSelectedValor.length; j++) {
                                if (anioSelectedValor[j] == json[i].anio) {
                                    bandera = false;
                                }
                            }
                            if (bandera) {
                                anioSelectedValor[anioSelectedValor.length] = json[i].anio;
                                anioSelectedValor.length++;
                            }

                            ////////////////////////////////////////////////////////
                            bandera = true;
                            for (j = 0; j < tipoDatoSelectedValor.length; j++) {
                                if (tipoDatoSelectedValor[j] == json[i].id_tipo_dato) {
                                    bandera = false;
                                }
                            }
                            if (bandera) {
                                tipoDatoSelectedValor[tipoDatoSelectedValor.length] = json[i].id_tipo_dato;
                                tipoDatoSelectedValor.length++;
                            }


                            ////////////////////////////////////////////////////////
                            bandera = true;
                            for (j = 0; j < unidadMedidaSelectedValor.length; j++) {
                                if (unidadMedidaSelectedValor[j] == json[i].unidad_de_medida) {
                                    bandera = false;
                                }
                            }
                            if (bandera) {
                                unidadMedidaSelectedValor[unidadMedidaSelectedValor.length] = json[i].unidad_de_medida;
                                unidadMedidaSelectedValor.length++;
                            }

                            for (j = 0; j < unidadMedidaSelectedValor.length; j++) {
                                if (unidadMedidaSelectedValor[j] == json[i].unidad_de_medida) {
                                    todasLasVariables[json[i].id_variable_compuesta]["unidad_de_medida" + json[i].id_tipo_dato] = j;
                                }
                            }

                            //////////////////////////////////////////////////////////





                        }



                        //en esta parte armo un json que contiene todas las variables, un indicador de posision de la variable dentro del json y 
                        //una bandera por variable en donde se nos indica si contiene o no valor
                        var jVariablesSinValor = jVariables;
                        for (var i = 0; i < jVariablesSinValor.length; i++) {
                            //con esta instruccion le pongo en donde se encuentra cada variable ejemplo jVariablesSinValor["39|39"]=1
                            jVariablesSinValor["indice" + jVariablesSinValor[i]["IdVariableCompuesta"]] = i;
                            //aqui se inicializa la bandera
                            jVariablesSinValor["contieneValor" + jVariablesSinValor[i]["IdVariableCompuesta"]] = false;

                        }

                        //con este otro ciclo consulto en el json que arme anteriormente
                        //y marco la bandera con true las variables que si se encontraron en la consulta

                        for (j = 0; j < varSelectedValor.length; j++) {
                            jVariablesSinValor["contieneValor" + varSelectedValor[j]] = true;
                            jVariablesSinValor["contieneValor" + todasLasVariables[varSelectedValor[j]].IdVariablePadre] = true;
                            jVariablesSinValor["contieneValor" + todasLasVariables[todasLasVariables[varSelectedValor[j]].IdVariablePadre].IdVariablePadre] = true;
                            jVariablesSinValor["contieneValor" + todasLasVariables[todasLasVariables[todasLasVariables[varSelectedValor[j]].IdVariablePadre].IdVariablePadre].IdVariablePadre] = true;
                        }


                        /////////////////////////////////////////////////////////////////////////////////////////









                        var tipoDato = todosLosTiposDeDatos[tipoDatoSelectedValor[0]].Id;


                        //aqui se añade la pestaña del tipo de dato
                        var mensaje = document.getElementById("mensaje");
                        var encabezados = document.getElementById("controlTabs");

                        var li = document.createElement("li");
                        li.setAttribute("role", "presentation");
                        var a = document.createElement("a");
                        a.setAttribute("href", "#tablaTipoDato" + tipoDato);
                        a.setAttribute("aria-controls", "#tablaTipoDato" + tipoDato);
                        a.setAttribute("role", "tab");
                        a.setAttribute("data-toggle", "tab");
                        a.innerHTML = todosLosTiposDeDatos[tipoDato].Descripcion + "<sup>" + todosLosEstatus["estatusCifra"][json[0].id_estatus].Presentacion + "</sup>";
                        li.appendChild(a);
                        encabezados.appendChild(li);


                        var tabsContenidos = document.getElementById("tabsContenidos");
                        var tab = document.createElement("div");
                        tab.id = "tablaTipoDato" + todosLosTiposDeDatos[tipoDatoSelectedValor[0]].Id;
                        tab.setAttribute("role", "tabpanel");

                        if (tabsContenidos != null) {
                            if (!tabsContenidos.hasChildNodes()) {
                                tab.setAttribute("class", "tab-pane active");
                                li.setAttribute("class", "active");
                            } else {
                                tab.setAttribute("class", "tab-pane");
                            }
                        }

                        tabsContenidos.appendChild(tab);

                        //se comienza a crear la tabla
                        var table = document.createElement("table");
                        table.class = "table table-striped"
                        tab.appendChild(table);
                        var thead = document.createElement("thead");
                        table.appendChild(thead);
                        var tbody = document.createElement("tbody");
                        tbody.id = "tbody" + tipoDato + "-0"
                        table.appendChild(tbody);
                        var thead = document.createElement("tbody");
                        thead.id = "header" + tipoDato
                        table.appendChild(thead);
                        tbody = document.createElement("tbody");
                        tbody.id = "tbody" + tipoDato + "-1"
                        table.appendChild(tbody);

                        var tr = document.createElement("tr");
                        var th;
                        th = document.createElement("th");
                        th.innerHTML = "Código SCIAN";
                        th.setAttribute("Style", "padding:5px 3px;font-size: 9pt;font-family: Arial, Helvetica, sans-serif;text-align:center;border-left: solid #F2F2F2 1.0pt; border-bottom: solid #F2F2F2 1.0pt; padding: 0cm 3.0pt 0cm 3.0pt; height: 12.0pt;background-color:#C6C1FF;")
                        th.rowSpan = parseInt(nivelDesgloseVariable) + 1;
                        tr.appendChild(th);
                        th = document.createElement("th");
                        th.innerHTML = "Entidad";
                        th.setAttribute("Style", "padding:5px 3px;font-size: 9pt;font-family: Arial, Helvetica, sans-serif;text-align:center;border-left: solid #F2F2F2 1.0pt; border-bottom: solid #F2F2F2 1.0pt; padding: 0cm 3.0pt 0cm 3.0pt; height: 12.0pt;background-color:#C6C1FF;")
                        th.rowSpan = parseInt(nivelDesgloseVariable) + 1;
                        tr.appendChild(th);

                        varSelectedValor = varSelected;
                        //inicializamos los encabezados superiores que contienen los años
                        for (a = 0; a < anioSelectedValor.length; a++) {
                            th = document.createElement("th");
                            th.innerHTML = anioSelectedValor[a];
                            th.setAttribute("Style", "padding:5px 3px;font-size: 9pt;font-family: Arial, Helvetica, sans-serif;text-align:center;border-left: solid #F2F2F2 1.0pt; border-bottom: solid #F2F2F2 1.0pt; padding: 0cm 3.0pt 0cm 3.0pt; height: 12.0pt;background-color:#C6C1FF;")
                            th.id = "encabezadoAnio" + anioSelectedValor[a] + "-" + tipoDato;
                            tr.appendChild(th);

                        }
                        thead.appendChild(tr);

                        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        //aqui se comienza a armar el encabezado de las variables
                        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        //primero creo los tr necesarios para que se muestren todos los padres como super-encabezados y encabezados
                        //esto se hace generando un tr por casa nivel de desglose de las variables
                        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                        actualizaBarraDeEstado(tipoDato, 10);
                        //con este ciclo creamos la cantidad de tr que sean necesarios para cubrir todos los niveles de desglose
                        //de las variables
                        for (var enc = 1; enc <= nivelDesgloseVariable; enc++) {
                            tr = document.createElement("tr");
                            tr.id = "Nivel" + enc + tipoDato;
                            tr.setAttribute("height", "50px")
                            thead.appendChild(tr)
                        }




                        //primero creamos todos los th que van a representar las variables de los encabezados
                        var cuentaColSpan = 0;
                        for (a = 0; a < anioSelectedValor.length; a++) {
                            for (v = varSelectedValor.length - 1; v >= 0   ; v--) {
                                if (jVariablesSinValor["contieneValor" + varSelectedValor[v]]) {
                                    cuentaColSpan++;
                                    tr = document.getElementById("Nivel" + todasLasVariables[varSelectedValor[v]].Nivel + tipoDato);
                                    th = document.createElement("th");
                                    th.setAttribute("Style", "padding:5px 3px;font-size: 9pt;font-family: Arial, Helvetica, sans-serif;text-align:center;border-left: solid #F2F2F2 1.0pt; border-bottom: solid #F2F2F2 1.0pt; padding: 0cm 3.0pt 0cm 3.0pt; height: 12.0pt;background-color:#C6C1FF;")
                                    th.innerHTML = todasLasVariables[varSelectedValor[v]].Descripcion;
                                    if (typeof todasLasVariables[varSelectedValor[v]]["unidad_de_medida" + tipoDato] != "undefined") {
                                        th.innerHTML = th.innerHTML + "<sup>" + (todasLasVariables[varSelectedValor[v]]["unidad_de_medida" + tipoDato]+1) + "</sup>"
                                    }
                                    th.rowSpan = nivelDesgloseVariable - todasLasVariables[varSelectedValor[v]].Nivel + 1;
                                    th.id = "Anio" + anioSelectedValor[a] + "Variable" + varSelectedValor[v] + "TipoDato" + tipoDato;
                                    tr.appendChild(th);
                                }
                            }
                            document.getElementById("encabezadoAnio" + anioSelectedValor[a] + "-" + tipoDato).colSpan = cuentaColSpan;
                            cuentaColSpan = 0;
                        }

                        actualizaBarraDeEstado(tipoDato, 10);
                        //luego les insertamos en la parte superior los espacios (th) que van a ayudar con el acomodo del encabezado
                        for (a = 0; a < anioSelectedValor.length; a++) {
                            for (v = varSelectedValor.length - 1; v >= 0   ; v--) {
                                if (jVariablesSinValor["contieneValor" + varSelectedValor[v]]) {
                                    if (todasLasVariables[varSelectedValor[v]].Nivel > 1) {
                                        tr = document.getElementById("Nivel1" + tipoDato);
                                        th = document.createElement("th");
                                        th.setAttribute("Style", "padding:5px 3px;font-size: 9pt;font-family: Arial, Helvetica, sans-serif;text-align:center;border-left: solid #F2F2F2 1.0pt; border-bottom: solid #F2F2F2 1.0pt; padding: 0cm 3.0pt 0cm 3.0pt; height: 12.0pt;background-color:#C6C1FF;")
                                        th.id = "RellenoAnio" + anioSelectedValor[a] + "Variable" + varSelectedValor[v] + "TipoDato" + tipoDato;
                                        th.rowSpan = todasLasVariables[varSelectedValor[v]].Nivel - 1;
                                        tr.appendChild(th);
                                    }
                                    tr = document.getElementById("Nivel" + todasLasVariables[varSelectedValor[v]].Nivel + tipoDato);
                                    th = document.getElementById("Anio" + anioSelectedValor[a] + "Variable" + varSelectedValor[v] + "TipoDato" + tipoDato);
                                    tr.appendChild(th);
                                    //th = document.getElementById("Anio" + anioSelectedValor[a] + "Variable" + varSelectedValor[v]);
                                    //tr.appendChild(th);
                                }
                            }
                        }



                        actualizaBarraDeEstado(tipoDato, 20);
                        //por ultimo para asegurarnos de que se tenga la informacion adecuadamente se vuelven a insertar los tr
                        //en el orden debido
                        for (var enc = 1; enc <= nivelDesgloseVariable; enc++) {
                            tr = document.getElementById("Nivel" + enc + tipoDato);
                            thead.appendChild(tr)
                        }
                        thead.appendChild(tr)







                        //tr = document.getElementById("Nivel" + todasLasVariables[varSelectedValor[v]].Nivel);
                        //th = document.createElement("th");
                        //th.innerHTML = todasLasVariables[varSelectedValor[v]].Descripcion;
                        //th.id = "encabezadoAnio" + anioSelectedValor[a] + "Variable" + varSelectedValor[v] + "-" + tipoDato;
                        //th.colSpan = todasLasVariables[varSelectedValor[v]].length + 1;
                        //tr.appendChild(th);

                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                        //lo primero por hacer con el tbody es crear las celdas que contendran los valores y que se caracterizan por
                        //la estructura de sus id, mismos que se utilizaran para imprimirles el valor
                        for (var ent = 0; ent < entidadSelectedValor.length; ent++) {
                            for (var indiceActividades = 0; indiceActividades < actSelectedValor.length; indiceActividades++) {
                                tr = document.createElement("tr");
                                tr.setAttribute("onclick", "mueveThead(this," + tipoDato + ")");
                                td = document.createElement("td");
                                td.setAttribute("class", "tituloAct");
                                td.innerHTML = todasLasActividades[actSelectedValor[indiceActividades]].Scian + " " + todasLasActividades[actSelectedValor[indiceActividades]].Descripcion;
                                td.setAttribute("style", "word-wrap: break-word")
                                tr.appendChild(td);

                                td = document.createElement("td");
                                td.setAttribute("class", "tituloAct");
                                td.innerHTML = todasLasEntidades[entidadSelectedValor[ent]].Nombre;
                                tr.appendChild(td);
                                for (var indiceAnio = 0; indiceAnio < anioSelectedValor.length; indiceAnio++) {
                                    for (var indiceVariable = varSelectedValor.length - 1; indiceVariable >= 0 ; indiceVariable--) {
                                        if (jVariablesSinValor["contieneValor" + varSelectedValor[indiceVariable]]) {
                                            td = document.createElement("td");
                                            td.innerHTML = ""
                                            td.id_estatus = ""
                                            td.id = actSelectedValor[indiceActividades] + "-" + anioSelectedValor[indiceAnio] + "-" + varSelectedValor[indiceVariable] + "-" + tipoDato + "-" + entidadSelectedValor[ent]
                                            tr.appendChild(td);
                                        }
                                    }
                                }
                                tbody.appendChild(tr)
                            }
                        }
                        table.appendChild(tbody);


                        actualizaBarraDeEstado(tipoDato, 20);



                        /////////////aqui es en donde se meten los valores en las celdas
                        for (i = 0; i < json.length; i++) {
                            if (document.getElementById(json[i].id_actividad_compuesta + "-" + json[i].anio + "-" + json[i].id_variable_compuesta + "-" + json[i].id_tipo_dato + "-" + json[i].IdEntidad) != null) {
                                td = document.getElementById(json[i].id_actividad_compuesta + "-" + json[i].anio + "-" + json[i].id_variable_compuesta + "-" + json[i].id_tipo_dato + "-" + json[i].IdEntidad)
                                td.setAttribute("Style", "padding:5px 1px;text-align:right;width:28px;font-size: 9pt;font-family: Arial, Helvetica, sans-serif;");
                                var valor = json[i].valor_presentacion;
                                var id_estatus = json[i].id_estatus;




                                //////esta parte de codigo sirve para dar formato a las cifras
                                //if (json[i].decimales != "") {
                                //    valor = parseFloat(json[i].valor).toFixed(json[i].decimales);
                                //} else {

                                //    valor = parseFloat(json[i].valor).toFixed(0);
                                //}




                                if (json[i].id_presentacion == 1) {
                                    if (td.id_estatus == "") {
                                        td.innerHTML = valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                        td.id_estatus = id_estatus;
                                        document.getElementById("estatusCifra" + json[i].id_estatus).hidden = false
                                    } else {
                                        if (parseInt(td.id_estatus) > parseInt(id_estatus)) {
                                            td.innerHTML = valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                            td.id_estatus = id_estatus;
                                            document.getElementById("estatusCifra" + json[i].id_estatus).hidden = false
                                        }
                                    }
                                } else {
                                    if (td.id_estatus == "") {
                                        td.innerHTML = json[i].presentacion;
                                        td.id_estatus = id_estatus;
                                        document.getElementById("estatusCifra" + json[i].id_estatus).hidden = false
                                        document.getElementById("estatus" + json[i].id_presentacion).hidden = false
                                    } else {
                                        if (parseInt(td.id_estatus) > parseInt(id_estatus)) {
                                            td.innerHTML = json[i].presentacion;
                                            td.id_estatus = id_estatus;
                                            document.getElementById("estatusCifra" + json[i].id_estatus).hidden = false
                                            document.getElementById("estatus" + json[i].id_presentacion).hidden = false
                                        }
                                    }


                                }
                            }
                        }



                        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        ///////////////////////////////////////en esta parte hago la tabla temporal para el excel/////////////////////////////////
                        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





                        /////////////////////////////////////////se meten los datos al tbody temporal////////////////////////////
                        tbody = document.createElement("tbody")
                        for (var ent = 0; ent < entidadSelectedValor.length; ent++) {
                            tr = document.createElement("tr");
                            td = document.createElement("td");
                            td.setAttribute("class", "tituloAct");
                            //td.setAttribute("style", "text-indent: " + ((todasLasActividades[actSelectedValor[indiceActividades]].Nivel - 1) * 15) + "px;")
                            td.innerHTML = "<h6><small>" + todasLasEntidades[entidadSelectedValor[ent]].Nombre + "</small></h6>";
                            td.colSpan = 2;
                            tr.appendChild(td);
                            tbody.appendChild(tr)
                            for (var indiceActividades = 0; indiceActividades < actSelectedValor.length; indiceActividades++) {
                                tr = document.createElement("tr");
                                td = document.createElement("td");
                                td.setAttribute("class", "tituloAct");
                                //td.setAttribute("style", "text-indent: " + ((todasLasActividades[actSelectedValor[indiceActividades]].Nivel - 1) * 15) + "px;")
                                td.innerHTML = todasLasActividades[actSelectedValor[indiceActividades]].Scian;
                                tr.appendChild(td);

                                td = document.createElement("td");
                                td.setAttribute("class", "tituloAct");
                                td.setAttribute("style", "text-indent: " + ((todasLasActividades[actSelectedValor[indiceActividades]].Nivel - 1) * 15) + "px;")
                                td.innerHTML = todasLasActividades[actSelectedValor[indiceActividades]].Descripcion;
                                tr.appendChild(td);
                                for (var indiceAnio = 0; indiceAnio < anioSelectedValor.length; indiceAnio++) {
                                    for (var indiceVariable = varSelectedValor.length - 1; indiceVariable >= 0 ; indiceVariable--) {
                                        if (jVariablesSinValor["contieneValor" + varSelectedValor[indiceVariable]]) {
                                            td = document.createElement("td");
                                            td.innerHTML = ""
                                            td.id_estatus = ""
                                            td.id = "excel" + actSelectedValor[indiceActividades] + "-" + anioSelectedValor[indiceAnio] + "-" + varSelectedValor[indiceVariable] + "-" + tipoDato + "-" + entidadSelectedValor[ent]
                                            tr.appendChild(td);
                                        }
                                    }
                                }
                                tbody.appendChild(tr)
                            }
                        }



                        tbody.hidden = true;
                        table.appendChild(tbody);


                        actualizaBarraDeEstado(tipoDato, 20);




                        for (i = 0; i < json.length; i++) {
                            if (document.getElementById(json[i].id_actividad_compuesta + "-" + json[i].anio + "-" + json[i].id_variable_compuesta + "-" + json[i].id_tipo_dato + "-" + json[i].IdEntidad) != null) {
                                td = document.getElementById("excel" + json[i].id_actividad_compuesta + "-" + json[i].anio + "-" + json[i].id_variable_compuesta + "-" + json[i].id_tipo_dato + "-" + json[i].IdEntidad)
                                var valor = json[i].valor;
                                var id_estatus = json[i].id_estatus;
                                estatus = id_estatus;







                                if (json[i].id_presentacion == 1) {
                                    if (td.id_estatus == "") {
                                        td.innerHTML = valor;
                                        td.id_estatus = id_estatus;
                                        document.getElementById("estatusCifra" + json[i].id_estatus).hidden = false
                                    } else {
                                        if (parseInt(td.id_estatus) > parseInt(id_estatus)) {
                                            td.innerHTML = valor;
                                            td.id_estatus = id_estatus;
                                            document.getElementById("estatusCifra" + json[i].id_estatus).hidden = false
                                        }
                                    }
                                } else {
                                    if (td.id_estatus == "") {
                                        td.innerHTML = json[i].presentacion;
                                        td.id_estatus = id_estatus;
                                        document.getElementById("estatusCifra" + json[i].id_estatus).hidden = false
                                        document.getElementById("estatus" + json[i].id_presentacion).hidden = false
                                    } else {
                                        if (parseInt(td.id_estatus) > parseInt(id_estatus)) {
                                            td.innerHTML = json[i].presentacion;
                                            td.id_estatus = id_estatus;
                                            document.getElementById("estatusCifra" + json[i].id_estatus).hidden = false
                                            document.getElementById("estatus" + json[i].id_presentacion).hidden = false
                                        }
                                    }


                                }
                            }
                        }







                        ////////////////////////////////////////////////////////////////////////
                        actualizaBarraDeEstado(tipoDato, 10);
                        document.getElementById("Button1").disabled = false;
                        document.getElementById("Button1").hidden = false;

                        var strNivelScian = "";
                        switch (maxNivelActicvidad) {
                            case 1: strNivelScian = "Sector";
                                break;
                            case 2: strNivelScian = "Sector, Dominio";
                                break;
                            case 3: strNivelScian = "Sector, Dominio";
                                break;
                            case 4: strNivelScian = "Sector, Dominio";
                                break;
                            case 5: strNivelScian = "Sector, Dominio";
                                break;

                        }
                        var strVars = "";
                        var strUnidades = "";
                        if (maxNivelVariable > 1) {
                            strVars = strVars + todasLasVariables[document.getElementById("selectVariablesHija1").value].Descripcion;
                            if (document.getElementById("selectVariablesHija2") != null) {
                                if (document.getElementById("selectVariablesHija2").value == "") {
                                    strVars = strVars + ", Todos sus desgloses"
                                } else {
                                    strVars = strVars + ", " + todasLasVariables[document.getElementById("selectVariablesHija2").value].Descripcion;
                                }

                            }
                        } else {
                            strVars = "Todas las Variables"
                        }
                        for (i = 0; i < unidadMedidaSelectedValor.length; i++) {
                            if (i > 0) {
                                strUnidades = strUnidades + ", ";
                            }
                            strUnidades = strUnidades + unidadMedidaSelectedValor[i];
                        }
                        document.getElementById("encabezado").innerHTML = "<h5 id=\"tituloTablas\"  style=\"cursor:pointer;padding:5px 1px;text-align:left;font-size: 9pt;font-family: Arial, Helvetica, sans-serif;\"><b>Fuente: INEGI. Encuesta Anual de Empresas Constructoras (EAEC) </h5><div  id=\"descripcionTablas\"><p><h5><b  style=\"padding:5px 1px;text-align:left;font-size: 9pt;font-family: Arial, Helvetica, sans-serif;\">Nivel SCIAN: " + strNivelScian + "  </h5></div>";
                        for (i = 0; i < unidadMedidaSelectedValor.length; i++) {
                            document.getElementById("encabezado").innerHTML = document.getElementById("encabezado").innerHTML + "<div class=\"row\"><div class=\"col-xs-4\"><p  style=\" text-align:left;font-size: 9pt;font-family: Arial, Helvetica, sans-serif;\"><sup>" + (i + 1) + "</sup>" + unidadMedidaSelectedValor[i] + "</p></div></div>"
                        }

                        $("#tituloTablas").click(function () {
                            $("#descripcionTablas").slideToggle("slow");
                        });



                        document.getElementById("encabezado").innerHTML = document.getElementById("encabezado").innerHTML + "<div class=\"row\"><div class=\"col-xs-10\"><p><b style=\"padding:5px 1px;text-align:left;font-size: 9pt;font-family: Arial, Helvetica, sans-serif;\">Nota: </b><span style=\"padding:5px 1px;text-align:left;font-size: 9pt;font-family: Arial, Helvetica, sans-serif;\">Los encabezados de cada cuadro se encuentran al costado izquierdo de las variables y se despliegan como campos vacíos.</span> </div></div>"



                        /////////////////////////////////////////////////////////

                        document.getElementById("nivelScian").innerHTML = strNivelScian;

                        document.getElementById("nivelScian").value = strNivelScian;


                        document.getElementById("nivelVariables").innerHTML = strVars;

                        document.getElementById("nivelVariables").value = strVars;

                        /////////////////////////////////////////////////////////


                    } else {

                        var j = JSON.parse(JSON.stringify(eval("(" + this.data + ")")));
                        actualizaBarraDeEstado(j.tipodato, 95);
                        document.getElementById("mensajeModal").innerHTML = document.getElementById("mensajeModal").innerHTML + "<p><h5>***La consulta con el tipo de dato \"" + todosLosTiposDeDatos[j.tipodato].Descripcion + "\" no regreso informacion</h5>";
                        document.getElementById("barra" + j.tipodato).setAttribute("class", "progress-bar progress-bar-danger  progress-bar-striped active");
                    }











                },
                error: function (XmlHttpError, error, description) {

                    var j = JSON.parse(JSON.stringify(eval("(" + this.data + ")")));
                    actualizaBarraDeEstado(j.tipodato, 95);
                    document.getElementById("mensajeModal").innerHTML = document.getElementById("mensajeModal").innerHTML + "<p><h5>***La consulta con el tipo de dato \"" + todosLosTiposDeDatos[j.tipodato].Descripcion + "\" no regreso informacion</h5>";
                    document.getElementById("barra" + j.tipodato).setAttribute("class", "progress-bar progress-bar-danger  progress-bar-striped active");

                    $("#mensaje").html("<div class=\"jumbotron\"> <h4>Selección Invalida!  <small><p></p>No se encontraron datos referentes a la consulta realizada! Por favor verifique la consulta</small></h4></div>");
                }
            })
        }






    } else {
        $("#mensaje").html("<div class=\"jumbotron\"> <h4>No se seleccionaron correctamente los datos de la consulta  <small><p></p>Por favor verifique la consulta</small></h4></div>");

    }
}


function mueveThead(tr, TipoDato) {
    var header = document.getElementById("header" + TipoDato)
    var tbody0 = document.getElementById("tbody" + TipoDato + "-0");
    var tbody1 = document.getElementById("tbody" + TipoDato + "-1");

    for (i = tbody0.childNodes.length - 1; i >= 0; i--) {
        tbody1.insertBefore(tbody0.childNodes[i], tbody1.childNodes[0]);
    }

    var tamanio = tbody1.childNodes.length;
    for (var i = 0; i < tamanio; i++) {

        if (tbody1.childNodes[0] == tr) { break; }
        console.log(tbody1.childNodes[0].childNodes[0].innerHTML);
        tbody0.appendChild(tbody1.childNodes[0]);
    }


}


function actualizaBarraDeEstado(tipoDeDato, progress) {
    var tam = document.getElementById("barra" + tipoDeDato).title;
    document.getElementById("barra" + tipoDeDato).tam = (parseInt(tam.split("%")[0]) + progress);
    $("#barra" + tipoDeDato).width((parseInt(tam.split("%")[0]) + progress) + "%");
    document.getElementById("barra" + tipoDeDato).title = (parseInt(tam.split("%")[0]) + progress) + "%";

    document.getElementById("pocentajeBarra" + tipoDeDato).innerHTML = (parseInt(tam.split("%")[0]) + progress) + "%";
    if ((parseInt(tam.split("%")[0]) + progress) > 95) {
        document.getElementById("pocentajeBarra" + tipoDeDato).innerHTML = "Carga Completa ";
        barCompletas++;
        if (tipoDatoSelected.length == barCompletas) {
            $('#myModal').modal('hide');
        }
    }
}


function fnGetPeriodos(json) {
    var periodos = [];
    periodos.push(json[0].anio);

    for (i = 0; i < json.length; i++) {


        var searchvalue = json[i].anio;

        var index = periodos.indexOf(searchvalue);
        if (index == -1) {

            periodos.push(searchvalue);
        }

    }

    return periodos;


}


function fnGetActividades(json) {
    var actividades = [];
    var act_presentacion = [];
    var desc_actividad = [];
    act_presentacion.push(json[0].act_presentacion);
    desc_actividad.push(json[0].actividad);

    for (i = 0; i < json.length; i++) {


        var searchvalue = json[i].act_presentacion;

        var index = act_presentacion.indexOf(searchvalue);
        if (index == -1) {

            act_presentacion.push(searchvalue);
            desc_actividad.push(json[i].actividad);


        }

    }
    actividades.push(act_presentacion);
    actividades.push(desc_actividad);

    return actividades;


}


function formatNum(n, decimales) {
    return n.toFixed(decimales).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}