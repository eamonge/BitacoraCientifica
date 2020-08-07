import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProyectosModel } from '../Modelos/Proyectos';

@Injectable({
  providedIn: 'root'
})
export class ApiServicioProyectosService {

  myAppURL ='https://localhost:44313/';

  myApiURLGetAll = 'api/Proyecto/GetProyectosActuales';

  myApiURLGetOne = 'api/Proyecto/GetOneProyecto/';

  myApiURLInsert = 'api/Proyecto/InsertOneProyecto';

  myApiURlUpdate = 'api/Proyecto/UpdateProyecto/';

  myApiURLDelete = 'api/Proyecto/DeleteOneProyecto/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private httpInit:HttpClient) { }

  //trae la informacion de tipo de consecutivos
  getAllProyectos():Observable<ProyectosModel[]>{

    return this.httpInit.get<ProyectosModel[]>(this.myAppURL+this.myApiURLGetAll);

  }

  InsertaUnProyecto(ProyectoNuevo:ProyectosModel):Observable<ProyectosModel>{

    return this.httpInit.post<ProyectosModel>(this.myAppURL+this.myApiURLInsert,ProyectoNuevo,this.httpOptions);

  }

  DeleteProyecto(id:string):Observable<ProyectosModel>{
    return this.httpInit.delete<ProyectosModel>(this.myAppURL+this.myApiURLDelete+id);
  }
}
