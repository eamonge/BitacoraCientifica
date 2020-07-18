import { Component, OnInit } from '@angular/core';
import { TipoConsecutivosModelo } from 'src/app/ServiciosAPI/Modelos/TipoConsecutivos';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiServicioTipoConsecutivoService } from 'src/app/ServiciosAPI/ApiServicioTipoConsecutivo/api-servicio-tipo-consecutivo.service';
import { Router } from '@angular/router';
import { ConsecutivosModel } from 'src/app/ServiciosAPI/Modelos/Consecutivos';
import { ApiServicioConsecutivoService } from 'src/app/ServiciosAPI/ApiServicioConsecutivo/api-servicio-consecutivo.service';

@Component({
  selector: 'app-consecutivo',
  templateUrl: './consecutivo.component.html',
  styleUrls: ['./consecutivo.component.css']
})
export class ConsecutivoComponent implements OnInit {


  ListaTiposConsecutivos: TipoConsecutivosModelo[];

  ListaSoloConsecutivos: ConsecutivosModel[];

  FomularioConsecutivo: FormGroup;
  FormularioSearchConsecutivp: FormGroup;
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
        descripcionTipoConsecutivo: 0,
        bcConsecutivoId: 0,
        bcTipoConsecutivoId: this.FomularioConsecutivo.get('bcTipoConsecutivoId').value,
        descripcion: this.FomularioConsecutivo.get('Descripcion').value,
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
        descripcion: '',
        descripcionTipoConsecutivo: '',
        prefijo: '',
        valor: ''
      };

      this.ServicioConsecutivo.SearchOneConsecutivo(SearchRamaCientifica.bcTipoConsecutivoId).subscribe(dataBuscada => {
        alert("CODIGO: " + dataBuscada.bcConsecutivoId +
          "\n" + "Tipo: " + dataBuscada.bcTipoConsecutivoId +
          "\n" + "Descripcion: " + dataBuscada.descripcion +
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
        descripcion: '',
        descripcionTipoConsecutivo: '',
        prefijo: '',
        valor: ''
      };

      this.ServicioConsecutivo.EliminaConsecutivo(this.FormularioDeleteConsecutivp.get('bcTipoConsecutivoIdDelete').value).subscribe(datoEliminado =>{
        alert("EL Consecutivo: "+ this.FormularioDeleteConsecutivp.get('bcTipoConsecutivoIdDelete').value+" "+"Ha sido Eliminado");
        this.CargarConsecutivos();
      });
      console.log(this.FormularioDeleteConsecutivp);
    }

   
   
  }
  
}
