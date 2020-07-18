import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsecutivosModel } from '../Modelos/Consecutivos';

@Injectable({
  providedIn: 'root'
})
export class ApiServicioConsecutivoService {

  myAppURL ='https://localhost:44313/';

  myApiURLGetAll = 'api/Consecutivos/GetConsecutivosActuales';

  myApiURLGetOne = 'api/Consecutivos/GetOneConsecutivo/';

  myApiURLInsert = 'api/Consecutivos/InsertOneConsecutivo';

  myApiURlUpdate = 'api/Consecutivos/UpdateBitacora/';

  myApiURLDelete = 'api/Consecutivos/DeleteOneConsecutivo/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private httpInit:HttpClient) { }

  //trae la informacion de tipo de consecutivos
  getAllConsecutivos():Observable<ConsecutivosModel[]>{

    return this.httpInit.get<ConsecutivosModel[]>(this.myAppURL+this.myApiURLGetAll);

  }

  InsertaUnConsecutivo(ConsecutivoNuevo:ConsecutivosModel):Observable<ConsecutivosModel>{

    console.log(ConsecutivoNuevo);    
    return this.httpInit.post<ConsecutivosModel>(this.myAppURL+this.myApiURLInsert,ConsecutivoNuevo,this.httpOptions);

  }

  SearchOneConsecutivo(id:number):Observable<ConsecutivosModel>{
    return this.httpInit.get<ConsecutivosModel>(this.myAppURL+this.myApiURLGetOne+id);
  }

  EliminaConsecutivo(id:number):Observable<ConsecutivosModel>{

    return this.httpInit.delete<ConsecutivosModel>(this.myAppURL+this.myApiURLDelete+id);
  }
}
