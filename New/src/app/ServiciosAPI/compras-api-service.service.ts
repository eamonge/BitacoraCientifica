import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComprasModelo } from "../ServiciosAPI/Modelos/Compra";
@Injectable({
  providedIn: 'root'
})
export class ComprasApiServiceService {

  myAppURL ='https://localhost:44313/';

  myApiURLGetAll = 'api/Compras/GetComprasActuales';

  myApiURLGetOne = 'api/Compras/GetUnaCompra/';

  myApiURLInsert = 'api/Compras/InsertOneRamaCientifica';

  myApiURlUpdate = 'api/Compras/UpdateRamaCientifica/';

  myApiURLDelete = 'api/Compras/DeleteOneRamaCientifica/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private httpInit:HttpClient) { }

  //trae la informacion de tipo de consecutivos
  getAllCompras():Observable<ComprasModelo[]>{

    return this.httpInit.get<ComprasModelo[]>(this.myAppURL+this.myApiURLGetAll);

  }

  InsertaUnaRamaCientifica(ConsecutivoNuevo:ComprasModelo):Observable<ComprasModelo>{

    return this.httpInit.post<ComprasModelo>(this.myAppURL+this.myApiURLInsert,ConsecutivoNuevo,this.httpOptions);

  }

  BuscarCompra(id:number):Observable<ComprasModelo>{

    return this.httpInit.get<ComprasModelo>(this.myAppURL+this.myApiURLGetOne+id);
ComprasModelo
  }

  BorrarRamaCientificaSeleccionado(id:number):Observable<ComprasModelo>{

    return this.httpInit.delete<ComprasModelo>(this.myAppURL+this.myApiURLDelete+id);

  }
}
