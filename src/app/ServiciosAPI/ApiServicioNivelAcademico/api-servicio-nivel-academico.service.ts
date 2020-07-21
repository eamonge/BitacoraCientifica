import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NivelAcademicoModel } from '../Modelos/NivelAcademico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicioNivelAcademicoService {

  myAppURL ='https://localhost:44313/';

  myApiURLGetAll = 'api/NivelAcademico/GetNivelesAcademicos';

  myApiURLGetOne = 'api/NivelAcademico/GetOneNivelAcademico/';

  myApiURLInsert = 'api/NivelAcademico/InsertOneNivelAcademico';

  myApiURlUpdate = 'api/NivelAcademico/UpdateNivelAcademico/';

  myApiURLDelete = 'api/NivelAcademico/DeleteOneNivelAcademico/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private httpInit:HttpClient) { }

  //trae la informacion de tipo de consecutivos
  getAllNivelesAcademicos():Observable<NivelAcademicoModel[]>{

    return this.httpInit.get<NivelAcademicoModel[]>(this.myAppURL+this.myApiURLGetAll);

  }

  InsertaUnNivelAcademico(ConsecutivoNuevo:NivelAcademicoModel):Observable<NivelAcademicoModel>{

    console.log(ConsecutivoNuevo);    
    return this.httpInit.post<NivelAcademicoModel>(this.myAppURL+this.myApiURLInsert,ConsecutivoNuevo,this.httpOptions);

  }

  SearchOneNivelAcademico(id:string):Observable<NivelAcademicoModel>{
    return this.httpInit.get<NivelAcademicoModel>(this.myAppURL+this.myApiURLGetOne+id);
  }

  EliminaNivelAcademico(id:string):Observable<NivelAcademicoModel>{

    return this.httpInit.delete<NivelAcademicoModel>(this.myAppURL+this.myApiURLDelete+id);
  }
}
