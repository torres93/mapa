
$(document).ready(function () {

    function myFunction() {

        xmlMap = {
            type: 'maps/mexico',
            renderAt: 'chart-container',
            width: '680px',
            height: '500px',
            dataFormat: 'json',
            dataSource: {

                "map": {
                    "caption": "Por entidad federativa",
                    "subcaption":"(Seleccione la entidad en el mapa)",
                    "theme": "fint",
                    "formatNumberScale": "0",
                    "showToolTip": "1",
                    "showLabels": "0",
                    "showCanvasBorder": "0",
                    "legendPosition": "BOTTOM",
                 
                    "bgColor": "#edebfe"
                },

                "entityDef": [
                    {
                        "internalId": "014",
                        "lName": "México"
                    },
                    {
                        "internalId": "015",
                        "lName": "Michoacán de Ocampo"
                    },
                    {
                        "internalId": "018",
                        "lName": "Nuevo León"
                    },
                    {
                        "internalId": "021",
                        "lName": "Querétaro"
                    },
                    {
                        "internalId": "023",
                        "lName": "San Luis Potosí"
                    },
                    {
                        "internalId": "029",
                        "lName": "Veracruz de Ignacio de la Llave"
                    },
                    {
                        "internalId": "030",
                        "lName": "Yucatán"
                    }
                        ],

                "colorrange": {
                    "color": [
                         {
                             "minvalue": "1",
                             "maxvalue": "10000",
                             "code": "#EDDC61",
                             "displayValue": "Hasta 10,000"
                         },

                    {
                        "minvalue": "10001",
                        "maxvalue": "20000",
                        "code": "#EDB309",
                        "displayValue": "De 10,001 a 20,000"
                    },

                    {
                        "minvalue": "20001",
                        "maxvalue": "50000",
                        "code": "#C59607",
                        "displayValue": "De 20,001 a 50,000"
                    },

					{
					    "minvalue": "50001",
					    "maxvalue": "100000",
					    "code": "#846404",
					    "displayValue": "De 50,001 a 100,000"
					},

					{
					    "minvalue": "100001",
					    "maxvalue": "150000",
					    "code": "#663300",
					    "displayValue": "Más de  100,000"
					},

                    ]

                },
                "data": [
                    {
                        "value": "683202",
                        "id": "000",
                        "hombres": "607742",
                        "mujeres": "75460",
                        "rp": "56922408",
                        "gc": "320922845",
                        "gf": "9852809",
                        "is": "576119551",
                        "if": "8040713",
                        "vo": "450085525",
                        "ex": "7779559",
                        "ta": "120422084"
                    },
					  {
					      "value": "7878",
					      "id": "001",
					      "hombres": "7283",
					      "mujeres": "594",
					      "rp": "588277",
					      "gc": "3086016",
					      "gf": "55268",
					      "is": "5574952",
					      "if": "31011",
					      "vo": "4860817",
					      "ex": "66406",
					      "ta": "1761679"
					  },
					  {
					      "value": "16425",
					      "id": "002",
					      "hombres": "14149",
					      "mujeres": "2276",
					      "rp": "1508899",
					      "gc": "10238010",
					      "gf": "557035",
					      "is": "17893002",
					      "if": "324759",
					      "vo": "14157614",
					      "ex": "333845",
					      "ta": "4838049"
					  },
					  {
					      "value": "5737",
					      "id": "003",
					      "hombres": "5151",
					      "mujeres": "586",
					      "rp": "411183",
					      "gc": "1963555",
					      "gf": "69742",
					      "is": "3818554",
					      "if": "8970",
					      "vo": "3054512",
					      "ex": "107324",
					      "ta": "945648"
					  },
					  {
					      "value": "11718",
					      "id": "004",
					      "hombres": "10285",
					      "mujeres": "1433",
					      "rp": "885151",
					      "gc": "8555255",
					      "gf": "429477",
					      "is": "18931666",
					      "if": "222152",
					      "vo": "16758915",
					      "ex": "135359",
					      "ta": "3651514"
					  },
					  {
					      "value": "21229",
					      "id": "007",
					      "hombres": "18962",
					      "mujeres": "2266",
					      "rp": "1680098",
					      "gc": "6985545",
					      "gf": "246523",
					      "is": "13666023",
					      "if": "89593",
					      "vo": "10448224",
					      "ex": "184238",
					      "ta": "5000413"
					  },
					  {
					      "value": "5856",
					      "id": "008",
					      "hombres": "5153",
					      "mujeres": "704",
					      "rp": "522824",
					      "gc": "1975673",
					      "gf": "35156",
					      "is": "4100250",
					      "if": "7142",
					      "vo": "3698750",
					      "ex": "97237",
					      "ta": "971708"
					  },
					  {
					      "value": "13190",
					      "id": "005",
					      "hombres": "12012",
					      "mujeres": "1178",
					      "rp": "993482",
					      "gc": "4771526",
					      "gf": "93008",
					      "is": "7509837",
					      "if": "11918",
					      "vo": "6795274",
					      "ex": "69777",
					      "ta": "4456574"
					  },
					  {
					      "value": "16951",
					      "id": "006",
					      "hombres": "14616",
					      "mujeres": "2334",
					      "rp": "1395711",
					      "gc": "12647581",
					      "gf": "547141",
					      "is": "19347260",
					      "if": "351554",
					      "vo": "15588512",
					      "ex": "89384",
					      "ta": "5708014"
					  },
					  {
					      "value": "131919",
					      "id": "032",
					      "hombres": "114578",
					      "mujeres": "17341",
					      "rp": "11067631",
					      "gc": "78957346",
					      "gf": "2808371",
					      "is": "139583772",
					      "if": "3890320",
					      "vo": "105590007",
					      "ex": "2200323",
					      "ta": "15406612"
					  },
					  {
					      "value": "9805",
					      "id": "009",
					      "hombres": "9197",
					      "mujeres": "608",
					      "rp": "703407",
					      "gc": "4241095",
					      "gf": "47013",
					      "is": "6278747",
					      "if": "45592",
					      "vo": "5780825",
					      "ex": "75174",
					      "ta": "1896789"
					  },
					  {
					      "value": "26955",
					      "id": "010",
					      "hombres": "24375",
					      "mujeres": "2580",
					      "rp": "2191523",
					      "gc": "10834834",
					      "gf": "202686",
					      "is": "17630016",
					      "if": "85809",
					      "vo": "14268880",
					      "ex": "326506",
					      "ta": "3737642"
					  },
					  {
					      "value": "12017",
					      "id": "011",
					      "hombres": "10902",
					      "mujeres": "1115",

					      "rp": "1350329",
					      "gc": "3920402",
					      "gf": "66120",
					      "is": "7915975",
					      "if": "7090",
					      "vo": "6639196",
					      "ex": "46385",
					      "ta": "2315045"
					  },
					  {
					      "value": "7543",
					      "id": "012",
					      "hombres": "6301",
					      "mujeres": "1243",
					      "rp": "709748",
					      "gc": "3433154",
					      "gf": "79997",
					      "is": "6480757",
					      "if": "15997",
					      "vo": "5656983",
					      "ex": "76517",
					      "ta": "2006944"
					  },
					  {
					      "value": "56761",
					      "id": "013",
					      "hombres": "52451",
					      "mujeres": "4310",
					      "rp": "4510603",
					      "gc": "27053877",
					      "gf": "633649",
					      "is": "42221751",
					      "if": "358684",
					      "vo": "31253048",
					      "ex": "376145",
					      "ta": "9002085"
					  },
					  {
					      "value": "29856",
					      "id": "014",
					      "hombres": "25597",
					      "mujeres": "4259",
					      "rp": "3133658",
					      "gc": "14867333",
					      "gf": "569501",
					      "is": "20284394",
					      "if": "632207",
					      "vo": "17225313",
					      "ex": "246562",
					      "ta": "5428062"
					  },
					  {
					      "value": "11491",
					      "id": "015",
					      "hombres": "10230",
					      "mujeres": "1261",
					      "rp": "843985",
					      "gc": "5250900",
					      "gf": "109391",
					      "is": "9116092",
					      "if": "29222",
					      "vo": "7977724",
					      "ex": "195307",
					      "ta": "2580615"
					  },
					  {
					      "value": "5533",
					      "id": "016",
					      "hombres": "4861",
					      "mujeres": "672",
					      "rp": "434208",
					      "gc": "1859860",
					      "gf": "40903",
					      "is": "3697783",
					      "if": "13191",
					      "vo": "3233201",
					      "ex": "25818",
					      "ta": "1138976"
					  },
					  {
					      "value": "5966",
					      "id": "017",
					      "hombres": "5307",
					      "mujeres": "659",
					      "rp": "596610",
					      "gc": "1561791",
					      "gf": "36585",
					      "is": "3149726",
					      "if": "3040",
					      "vo": "2251250",
					      "ex": "43590",
					      "ta": "836363"
					  },
					  {
					      "value": "62318",
					      "id": "018",
					      "hombres": "56373",
					      "mujeres": "5945",
					      "rp": "4306146",
					      "gc": "28757358",
					      "gf": "774594",
					      "is": "60182921",
					      "if": "752747",
					      "vo": "40176985",
					      "ex": "745510",
					      "ta": "10535136"
					  },
					  {
					      "value": "8001",
					      "id": "019",
					      "hombres": "7133",
					      "mujeres": "867",
					      "rp": "502163",
					      "gc": "1843993",
					      "gf": "38868",
					      "is": "3729591",
					      "if": "9447",
					      "vo": "2956910",
					      "ex": "56836",
					      "ta": "1923892"
					  },
					  {
					      "value": "11951",
					      "id": "020",
					      "hombres": "10627",
					      "mujeres": "1324",
					      "rp": "813053",
					      "gc": "4542734",
					      "gf": "132667",
					      "is": "7834177",
					      "if": "51724",
					      "vo": "6020716",
					      "ex": "163442",
					      "ta": "2989498"
					  },
					  {
					      "value": "14047",
					      "id": "021",
					      "hombres": "12470",
					      "mujeres": "1577",
					      "rp": "1329441",
					      "gc": "5408572",
					      "gf": "184802",
					      "is": "9703128",
					      "if": "26501",
					      "vo": "8018419",
					      "ex": "127092",
					      "ta": "1453537"
					  },
					  {
					      "value": "12787",
					      "id": "022",
					      "hombres": "11599",
					      "mujeres": "1188",
					      "rp": "1060419",
					      "gc": "5635049",
					      "gf": "150405",
					      "is": "9294947",
					      "if": "120022",
					      "vo": "8425235",
					      "ex": "82211",
					      "ta": "2954429"
					  },
					  {
					      "value": "11469",
					      "id": "023",
					      "hombres": "10135",
					      "mujeres": "1334",
					      "rp": "733015",
					      "gc": "5796245",
					      "gf": "164811",
					      "is": "10863350",
					      "if": "33327",
					      "vo": "8717348",
					      "ex": "334216",

					      "ta": "2044692"
					  },
					  {
					      "value": "30997",
					      "id": "024",
					      "hombres": "26474",
					      "mujeres": "4523",
					      "rp": "3278086",
					      "gc": "14775907",
					      "gf": "172651",
					      "is": "28550379",
					      "if": "88148",
					      "vo": "25535737",
					      "ex": "439263",
					      "ta": "3880997"
					  },
					  {
					      "value": "26819",
					      "id": "025",
					      "hombres": "24172",
					      "mujeres": "2647",
					      "rp": "2174197",
					      "gc": "9815096",
					      "gf": "246222",
					      "is": "17961412",
					      "if": "208520",
					      "vo": "14106321",
					      "ex": "144230",
					      "ta": "4810849"
					  },
					  {
					      "value": "12270",
					      "id": "026",
					      "hombres": "10776",
					      "mujeres": "1494",
					      "rp": "872346",
					      "gc": "9368780",
					      "gf": "362045",
					      "is": "18882636",
					      "if": "335856",
					      "vo": "12622850",
					      "ex": "79073",
					      "ta": "3424507"
					  },
					  {
					      "value": "32723",
					      "id": "027",
					      "hombres": "30452",
					      "mujeres": "2271",
					      "rp": "2782008",
					      "gc": "12620482",
					      "gf": "417319",
					      "is": "23298102",
					      "if": "75463",
					      "vo": "17186488",
					      "ex": "204945",
					      "ta": "5051781"
					  },
					  {
					      "value": "3191",
					      "id": "028",
					      "hombres": "2825",
					      "mujeres": "367",
					      "rp": "160753",
					      "gc": "561343",
					      "gf": "7684",
					      "is": "836232",
					      "if": "1816",
					      "vo": "932370",
					      "ex": "2393",
					      "ta": "489650"
					  },
					  {
					      "value": "34141",
					      "id": "029",
					      "hombres": "29994",
					      "mujeres": "4147",
					      "rp": "3307850",
					      "gc": "10499648",
					      "gf": "339404",
					      "is": "21300116",
					      "if": "121128",
					      "vo": "16111491",
					      "ex": "372533",
					      "ta": "5193971"
					  },
					  {
					      "value": "17899",
					      "id": "030",
					      "hombres": "16183",
					      "mujeres": "1716",
					      "rp": "1453938",
					      "gc": "6513765",
					      "gf": "157649",
					      "is": "11521699",
					      "if": "82552",
					      "vo": "9731252",
					      "ex": "99446",
					      "ta": "2513430"
					  },
					  {
					      "value": "7760",
					      "id": "031",
					      "hombres": "7118",
					      "mujeres": "642",
					      "rp": "621665",
					      "gc": "2580119",
					      "gf": "76122",
					      "is": "4960305",
					      "if": "5210",
					      "vo": "4304357",
					      "ex": "232474",
					      "ta": "1472985"
					  }
                ]
            },

            "events": {

                "entityRollover": function (evt, data) {
                },

                "entityRollout": function (evt, data) {
                },

                "entityClick": function (evt, data) {
                    graficaBarras(data);
                },

            }

        };



        var Map = new FusionCharts(xmlMap).render();
    };

    myFunction();
    graficaBarras(1);
    graf2();

    function graficaBarras(entidad) {
        if (entidad == 1) {
            gr3 = new FusionCharts({
                "type": "doughnut2d",
                "renderAt": "chartContainer",
                "width": "100%",
                "height": "300",
                "dataFormat": "json",
                "dataSource": {
                    "chart": {
                        "bgColor": "#edebfe",
                        "use3DLighting": "0",
                        "formatNumberScale": '0',
                        "palettecolors": "#259DF5,#ff9b26",
                        "numberPrefix": " ",
                        "showvalues": "1",
                        "captionFontColor":"#000000",
                        "plotSpacePercent":"40",
                        "showYAxisValues":"0",
                        "enablesmartlabels":"0",
                        "baseFont":"Arial",
                        "enablemultislicing":"1",
                        "showlabels":"0",
                        "showlegend":"1",
                        "showToolTip":"1",
                        "legendPosition":"",
                        "legendAllowDrag":"0",
                        "borderalpha":"20",
                        "canvasborderalpha":"0",
                        "theme":"fint",
                        "useplotgradientcolor":"0",
                        "plotborderalpha":"10",
                        "valuefontcolor":"#000000",
                        "captionpadding":"20",
                        "showaxislines":"1",
                        "axislinealpha":"25",
                        "divlinealpha":"10"                      
                    },
                    "data": [
                        {
                            "label": "Hombres",
                            "value": "607742"
                        },
                       {
                           "label": "Mujeres",
                           "value": "75460"
                       }
                    ]
                }
            });
            gr3.render("graph3");
        }
        else {

            document.getElementById("edo").innerHTML = entidad.label;
            document.getElementById("edo").style.fontWeight = "bold";
            document.getElementById("edo3").innerHTML = entidad.label;
            document.getElementById("edo3").style.fontWeight = "bold";
            datosDona1 = [];
            datos = xmlMap.dataSource.data.length;
            for (var i = 0; i < datos; i++) {
                if (entidad.id == xmlMap.dataSource.data[i].id) {
                    datosDona1.push({ label: "Hombres", value: xmlMap.dataSource.data[i].hombres });
                    datosDona1.push({ label: "Mujeres", value: xmlMap.dataSource.data[i].mujeres });

                    document.getElementById("rp2").innerHTML = xmlMap.dataSource.data[i].rp.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    document.getElementById("gc2").innerHTML = xmlMap.dataSource.data[i].gc.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    document.getElementById("gf2").innerHTML = xmlMap.dataSource.data[i].gf.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    document.getElementById("is2").innerHTML = xmlMap.dataSource.data[i].is.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    document.getElementById("if2").innerHTML = xmlMap.dataSource.data[i].if.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    document.getElementById("vo2").innerHTML = xmlMap.dataSource.data[i].vo.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    document.getElementById("ex2").innerHTML = xmlMap.dataSource.data[i].ex.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    document.getElementById("ta2").innerHTML = xmlMap.dataSource.data[i].ta.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
            }

            gr3 = new FusionCharts({
                "type": "doughnut2d",
                "renderAt": "chartContainer",
                "width": "100%",
                "height": "300",
                "dataFormat": "json",
                "dataSource": {
                    "chart": {
                        "bgColor": "#edebfe",
                        "use3DLighting": "0",
                        "formatNumberScale": '0',
                        "palettecolors": "#259DF5,#ff9b26",
                        "numberPrefix": " ",
                        "showvalues": "1",
                        "captionFontColor": "#000000",
                        "plotSpacePercent": "40",
                        "showYAxisValues": "0",
                        "enablesmartlabels": "0",
                        "baseFont": "Arial",
                        "enablemultislicing": "1",
                        "showlabels": "0",
                        "showlegend": "1",
                        "showToolTip": "1",
                        "legendPosition": "",
                        "legendAllowDrag": "0",
                        "borderalpha": "20",
                        "canvasborderalpha": "0",
                        "theme": "fint",
                        "useplotgradientcolor": "0",
                        "plotborderalpha": "10",
                        "valuefontcolor": "#000000",
                        "captionpadding": "20",
                        "showaxislines": "1",
                        "axislinealpha": "25",
                        "divlinealpha": "10"
                    },
                    "data": datosDona1
                }
            });
            gr3.render("graph3");
        }
    };

    function graf2() {
        var gr4 = new FusionCharts({
            "type": "doughnut2d",
            "renderAt": "chartContainer",
            "width": "100%",
            "height": "300",
            "dataFormat": "json",
            "dataSource": {
                "chart": {
                    "bgColor": "#edebfe",
                    "use3DLighting": "0",
                    "formatNumberScale": '0',
                    "palettecolors": "#259DF5,#ff9b26",
                    "numberPrefix": " ",
                    "showvalues": "1",
                    "captionFontColor": "#000000",
                    "plotSpacePercent": "40",
                    "showYAxisValues": "0",
                    "enablesmartlabels": "0",
                    "baseFont": "Arial",
                    "enablemultislicing": "1",
                    "showlabels": "0",
                    "showlegend": "1",
                    "showToolTip": "1",
                    "legendPosition": "",
                    "legendAllowDrag": "0",
                    "borderalpha": "20",
                    "canvasborderalpha": "0",
                    "theme": "fint",
                    "useplotgradientcolor": "0",
                    "plotborderalpha": "10",
                    "valuefontcolor": "#000000",
                    "captionpadding": "20",
                    "showaxislines": "1",
                    "axislinealpha": "25",
                    "divlinealpha": "10"
                },
                "data": [
                    {
                        "label": "Hombres",
                        "value": "607742"
                    },
                     {
                         "label": "Mujeres",
                         "value": "75460"
                     }
                ]
            }
        });

        gr4.render("graph4");

    }
});