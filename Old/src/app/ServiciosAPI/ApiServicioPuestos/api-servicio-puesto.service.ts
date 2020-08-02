import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RolesModel } from '../Modelos/Roles';
import { PuestosModel } from '../Modelos/Puestos';

@Injectable({
  providedIn: 'root'
})
export class ApiServicioPuestos {

  myAppURL ='https://localhost:44313/';

  myApiURLGetAll = 'api/Puestos/GetPuestos';

  myApiURLGetOne = 'api/Puestos/GetOnePuesto/';

  myApiURLInsert = 'api/Puestos/InsertOnePuesto';

  myApiURlUpdate = 'api/Puestos/UpdatePuesto/';

  myApiURLDelete = 'api/Puestos/DeleteOnePuestos/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private httpInit:HttpClient) { }

  //trae la informacion de tipo de consecutivos
  getAllPuestos():Observable<PuestosModel[]>{

    return this.httpInit.get<PuestosModel[]>(this.myAppURL+this.myApiURLGetAll);

  }

  getOnePuesto(id:string):Observable<PuestosModel>{

    return this.httpInit.get<PuestosModel>(this.myAppURL+this.myApiURLGetOne+id);

  }

  BorrarPuesto(id:string):Observable<PuestosModel>{

    return this.httpInit.delete<PuestosModel>(this.myAppURL+this.myApiURLDelete+id);

  }

  InsertaUnPuesto(NewPuesto:PuestosModel):Observable<PuestosModel>{

    return this.httpInit.post<PuestosModel>(this.myAppURL+this.myApiURLInsert,NewPuesto,this.httpOptions);

  }
}
