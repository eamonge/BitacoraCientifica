import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RolesModel } from '../Modelos/Roles';
import { RamasCientificasModel } from '../Modelos/RamasCientificas';

@Injectable({
  providedIn: 'root'
})
export class ApiServicioRamasCientificasService {


  myAppURL ='https://localhost:44313/';

  myApiURLGetAll = 'api/RamaCientifica/GetRamaCientificaActual';

  myApiURLGetOne = 'api/RamaCientifica/GetOneRamaCientifica/';

  myApiURLInsert = 'api/RamaCientifica/InsertOneRamaCientifica';

  myApiURlUpdate = 'api/RamaCientifica/UpdateRamaCientifica/';

  myApiURLDelete = 'api/RamaCientifica/DeleteOneRamaCientifica/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private httpInit:HttpClient) { }

  //trae la informacion de tipo de consecutivos
  getAllRamasCientifica():Observable<RamasCientificasModel[]>{

    return this.httpInit.get<RamasCientificasModel[]>(this.myAppURL+this.myApiURLGetAll);

  }

  InsertaUnaRamaCientifica(ConsecutivoNuevo:RamasCientificasModel):Observable<RamasCientificasModel>{

    return this.httpInit.post<RamasCientificasModel>(this.myAppURL+this.myApiURLInsert,ConsecutivoNuevo,this.httpOptions);

  }

  BuscarRamaCientifca(id:string):Observable<RamasCientificasModel>{

    return this.httpInit.get<RamasCientificasModel>(this.myAppURL+this.myApiURLGetOne+id);

  }
}
