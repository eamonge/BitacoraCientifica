import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RolesModel } from '../Modelos/Roles';

@Injectable({
  providedIn: 'root'
})
export class ApiServicioRolService {

  
  myAppURL ='https://localhost:44313/';

  myApiURLGetAll = 'api/Roles/GetRolActual';

  myApiURLGetOne = 'api/Roles/GetOneRol/';

  myApiURLInsert = 'api/Roles/InsertOneRol';

  myApiURlUpdate = 'api/Roles/UpdateRol/';

  myApiURLDelete = 'api/Roles/DeleteOneRol/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private httpInit:HttpClient) { }

  //trae la informacion de tipo de consecutivos
  getAllRoles():Observable<RolesModel[]>{

    return this.httpInit.get<RolesModel[]>(this.myAppURL+this.myApiURLGetAll);

  }

  InsertaUnRol(ConsecutivoNuevo:RolesModel):Observable<RolesModel>{

    return this.httpInit.post<RolesModel>(this.myAppURL+this.myApiURLInsert,ConsecutivoNuevo,this.httpOptions);

  }

  BorrarRolSeleccionado(id:string):Observable<RolesModel>{

    return this.httpInit.delete<RolesModel>(this.myAppURL+this.myApiURLDelete+id);

  }


  getOneRolOnly(id:string):Observable<RolesModel>{

    return this.httpInit.get<RolesModel>(this.myAppURL+this.myApiURLGetOne+id);

  }
}
