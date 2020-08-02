import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoConsecutivosModelo } from '../Modelos/TipoConsecutivos'

@Injectable({
  providedIn: 'root'
})
export class ApiServicioTipoConsecutivoService {

  myAppURL ='https://localhost:44313/';

  myApiURLGetAll = 'api/TipoConsecutivos/GetTipoConsecutivoActual';

  myApiURLGetOne = 'api/TipoConsecutivos/GetOneTipoConsecutivo/';

  myApiURLInsert = 'api/TipoConsecutivos/InsertOneTipoConsecutivo';

  myApiURlUpdate = 'api/TipoConsecutivos/UpdateTipoConsecutivo/';

  myApiURLDelete = 'api/TipoConsecutivos/DeleteOneTipoConsecutivo/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private httpInit:HttpClient) { }

  //trae la informacion de tipo de consecutivos
  getAllConsecutivos():Observable<TipoConsecutivosModelo[]>{

    return this.httpInit.get<TipoConsecutivosModelo[]>(this.myAppURL+this.myApiURLGetAll);

  }

  InsertaUnConsecutivo(tipoConsecutivoNuevo:TipoConsecutivosModelo):Observable<TipoConsecutivosModelo>{

    return this.httpInit.post<TipoConsecutivosModelo>(this.myAppURL+this.myApiURLInsert,tipoConsecutivoNuevo,this.httpOptions);

  }

 

}
