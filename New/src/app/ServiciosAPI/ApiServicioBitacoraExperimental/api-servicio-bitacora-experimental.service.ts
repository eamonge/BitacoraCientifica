import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsecutivosModel } from '../Modelos/Consecutivos';
import { BitacoraExperimentalModel } from '../Modelos/BitacoraExperimental';

@Injectable({
  providedIn: 'root'
})
export class ApiServicioBitacoraExperimentalService {

  
  myAppURL ='https://localhost:44313/';

  myApiURLGetAll = 'api/Experimento/InsertExperimento';

  myApiURLGetOne = 'api/Experimento/GetAllExperiments/';

  myApiURLInsert = 'api/Experimento/InsertOneConsecutivo';

  myApiURlUpdate = 'api/Experimento/UpdateBitacora/';

  myApiURLDelete = 'api/Experimento/DeleteOneConsecutivo/';

  myApiUrlGetSoloUnConsecutivo = 'api/Experimento/GetConsecutivosCodigo/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private httpInit: HttpClient) { }
  
  getAllBitacorasExperimentales():Observable<BitacoraExperimentalModel[]>{
    return this.httpInit.get<BitacoraExperimentalModel[]>(this.myAppURL+this.myApiURLGetAll);
    
  }

  InsertaUnaBitacoraExperimental(NewBitacora: BitacoraExperimentalModel): Observable<BitacoraExperimentalModel>{
    
    console.log(NewBitacora);    
    return this.httpInit.post<BitacoraExperimentalModel>(this.myAppURL+this.myApiURLInsert,NewBitacora,this.httpOptions);

  }

}
