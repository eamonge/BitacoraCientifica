import { Component, OnInit } from '@angular/core';
import { TipoConsecutivosModelo } from '../ServiciosAPI/Modelos/TipoConsecutivos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServicioTipoConsecutivoService } from '../ServiciosAPI/ApiServicioTipoConsecutivo/api-servicio-tipo-consecutivo.service';
import { Router } from '@angular/router';
import { ConsecutivosModel } from "../ServiciosAPI/Modelos/Consecutivos";
import { ApiServicioConsecutivoService } from '../ServiciosAPI/ApiServicioConsecutivo/api-servicio-consecutivo.service';

@Component({
  selector: 'app-consecutivos',
  templateUrl: './consecutivos.component.html',
  styleUrls: ['./consecutivos.component.css']
})
export class ConsecutivosComponent implements OnInit {

  ListaTiposConsecutivos: TipoConsecutivosModelo[];

  ListaSoloConsecutivos: ConsecutivosModel[];

  FomularioConsecutivo:FormGroup;
  FormularioSearchConsecutivp:FormGroup;
  FormularioDeleteConsecutivp:FormGroup;

  GuardarConsecutivo = 'CrearConsecutivo';
  BuscarConsecutivoStart = 'BuscarUno';
  IdConsecutivoDelete='deleteConsecutivosId';

  constructor(private ServicioAPITipoConsecutivo: ApiServicioTipoConsecutivoService,
    private formbuilder: FormBuilder,
    private router: Router,
    private ServicioConsecutivo: ApiServicioConsecutivoService) {

    this.FomularioConsecutivo = this.formbuilder.group({
      bcTipoConsecutivoId: ['', Validators.required],
      Descripcion: ['', Validators.required],
      ValorConsecutivo: ['', Validators.required],
      Prefijo: ['', Validators.required]
    });

    this.FormularioSearchConsecutivp = this.formbuilder.group({
      bcTipoConsecutivoIdSearch: ['', Validators.required],
     
    });

    this.FormularioDeleteConsecutivp = this.formbuilder.group({
      bcTipoConsecutivoIdDelete: ['', Validators.required]

    });

  }
  ngOnInit() {
    this.CargarConsecutivos();
    this.CargarTiposConsecutivos();

  }
  //Carga los tipo de consecutivos
  CargarTiposConsecutivos() {

    this.ServicioAPITipoConsecutivo.getAllConsecutivos().subscribe(datos => {
      console.log(datos)
      this.ListaTiposConsecutivos = datos;
    })
    //Carga los consecutivos en la tabla
  }
  CargarConsecutivos() {
    this.ServicioConsecutivo.getAllConsecutivos().subscribe(datos => {
      this.ListaSoloConsecutivos = datos;
      console.log(datos);
    })

  }

  InsertarConsecutivo() {

    if (this.GuardarConsecutivo === 'CrearConsecutivo') {

      const NewConsecutivo: ConsecutivosModel = {
        //descripcionTipoConsecutivo:null,
        bcConsecutivoId: 0,
        bcTipoConsecutivoId: this.FomularioConsecutivo.get('bcTipoConsecutivoId').value,
        Descripcion: this.FomularioConsecutivo.get('Descripcion').value,
        valor: this.FomularioConsecutivo.get('ValorConsecutivo').value,
        prefijo: this.FomularioConsecutivo.get('Prefijo').value,

      };      
      this.ServicioConsecutivo.InsertaUnConsecutivo(NewConsecutivo).subscribe(datos => {
        alert("Consecutivo creado!");
        this.CargarConsecutivos();
      });
      console.log(this.FomularioConsecutivo);

    }

  }

  BuscarConsecutivo(){

    if (this.BuscarConsecutivoStart === 'BuscarUno') {

      const SearchRamaCientifica: ConsecutivosModel = {
        bcTipoConsecutivoId: this.FormularioSearchConsecutivp.get('bcTipoConsecutivoIdSearch').value,
        bcConsecutivoId: 0,
        Descripcion: '',
        //descripcionTipoConsecutivo: '',
        prefijo: '',
        valor: 0
      };

      this.ServicioConsecutivo.SearchOneConsecutivo(SearchRamaCientifica.bcTipoConsecutivoId).subscribe(dataBuscada => {
        alert("CODIGO: " + dataBuscada.bcConsecutivoId +
          "\n" + "Tipo: " + dataBuscada.bcTipoConsecutivoId +
          "\n" + "Descripcion: " + dataBuscada.Descripcion +
          "\n" + "Valor: " + dataBuscada.prefijo +
          "\n" + "Prefijo: " + dataBuscada.valor);

      });

    }

  }

  DeleteConsecutivo(){

    if (this.IdConsecutivoDelete = 'deleteConsecutivosId') {

      const SearchRamaCientifica: ConsecutivosModel = {
        bcTipoConsecutivoId: 0,
        bcConsecutivoId: this.FormularioDeleteConsecutivp.get('bcTipoConsecutivoIdDelete').value,
        Descripcion: '',
        //descripcionTipoConsecutivo: '',
        prefijo: '',
        valor: 0
      };

      this.ServicioConsecutivo.EliminaConsecutivo(this.FormularioDeleteConsecutivp.get('bcTipoConsecutivoIdDelete').value).subscribe(datoEliminado =>{
        alert("EL Consecutivo: "+ this.FormularioDeleteConsecutivp.get('bcTipoConsecutivoIdDelete').value+" "+"Ha sido Eliminado");
        this.CargarConsecutivos();
      });
      console.log(this.FormularioDeleteConsecutivp);
    }

   
   
  }

}
