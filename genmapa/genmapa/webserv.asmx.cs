using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using System.Web;
using System.Web.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace genmapa
{
    /// <summary>
    /// Descripción breve de webserv
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class webserv : System.Web.Services.WebService
    {
        cnx cnx;
        SqlDataReader rdr;

        [WebMethod]
        public string getEntidades()
        {
            try
            {
                List<entidad> entidades = new List<entidad>();
                cnx = new cnx();
                rdr = cnx.ExecuteCommand("select trc.VALOR, trc.ID_ENTIDAD, tcent.NOM_ENT,tcent.NOM_ABR from TR_CIFRA trc,TC_ENTIDAD_FEDERATIVA tcent where ID_FUENTE=2 and ID_VARIABLE=15 and ANIO=2014 and ID_TIPO_DATO=7 and ID_PERIODICIDAD=4 and trc.ID_ENTIDAD=tcent.ID_ENTIDAD order by trc.ID_ENTIDAD", CommandType.Text);
                if (rdr.HasRows)
                {
                    while (rdr.Read())
                    {
                        entidad ent = new entidad()
                        {
                            id_entidad = rdr["ID_ENTIDAD"].ToString(),
                            valor = rdr["VALOR"].ToString(),
                            nombre = rdr["NOM_ENT"].ToString(),
                            nombre_abr = rdr["NOM_ABR"].ToString()
                        };
                        entidades.Add(ent);
                    }
                    rdr.Close();
                    rdr = null;
                    string data = JsonConvert.SerializeObject(entidades);
                    return data;
                }
            }
            catch (Exception)
            {

                throw;
            }
            return "";

        }
    }
}
