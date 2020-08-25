import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoConsecutivosModelo } from "../ServiciosAPI/Modelos/TipoConsecutivos";
import { ApiServicioTipoConsecutivoService } from "../ServiciosAPI/ApiServicioTipoConsecutivo/api-servicio-tipo-consecutivo.service";
import { empty } from 'rxjs';

@Component({
  selector: 'app-tipo-consecutivo',
  templateUrl: './tipo-consecutivo.component.html',
  styleUrls: ['./tipo-consecutivo.component.css']
})
export class TipoConsecutivoComponent implements OnInit {

  ListaTiposConsecutivos: TipoConsecutivosModelo[];

  FomularioTipoConsecutivo: FormGroup;
  FormularioBorraTipoConsecutivo: FormGroup;

  Guardar = 'CrearTipoConsecutivo';
  Borrar = 'BorrarTipoConsecutivo';
  AutoId: number;


  constructor(private ServicioAPITipoConsecutivo: ApiServicioTipoConsecutivoService, private formbuilder: FormBuilder, private router: Router) {

    this.FomularioTipoConsecutivo = this.formbuilder.group({
      DescripcionConsecutivo: ['', Validators.required]
    });

    this.FormularioBorraTipoConsecutivo = this.formbuilder.group({
      bcTipoConsecutivoId: ['', Validators.required]
    });

  }
  ngOnInit() {
    this.CargarTiposConsecutivos();
  }

  CargarTiposConsecutivos() {

    this.ServicioAPITipoConsecutivo.getAllConsecutivos().subscribe(datos => {
      this.ListaTiposConsecutivos = datos;
    })

  }

  InsertarTipoConsecutivo() {

    try {
      this.AutoId = Math.floor(Math.random() * 100);

      if (this.Guardar === 'CrearTipoConsecutivo') {

        const NewConsecutivo: TipoConsecutivosModelo = {
          bcTipoConsecutivoId: 0,
          descripcion: this.FomularioTipoConsecutivo.get('DescripcionConsecutivo').value
        };
        console.log(this.FomularioTipoConsecutivo);

        this.ServicioAPITipoConsecutivo.InsertaUnConsecutivo(NewConsecutivo).subscribe(datos => {
          alert("Datos Añadidos");
          this.CargarTiposConsecutivos();
        });
      }


    } catch (error) {
      alert(error)
      console.log(this.FomularioTipoConsecutivo);
    }


  }

  BorrarTipoConsecutivo() {

    try {
      
      if (this.Borrar === 'BorrarTipoConsecutivo') {

        const DeleteOne: TipoConsecutivosModelo = {
          bcTipoConsecutivoId: this.FormularioBorraTipoConsecutivo.get('bcTipoConsecutivoId').value,
          descripcion: ''
        };
        console.log(this.FormularioBorraTipoConsecutivo);
  
        this.ServicioAPITipoConsecutivo.DeleteTipoConsecutivo(DeleteOne.bcTipoConsecutivoId).subscribe(data => {
          alert("El Tipo de consecutivo:" + DeleteOne.bcTipoConsecutivoId + "Ha sido eliminado!!");
          this.CargarTiposConsecutivos();
        });
  
        
  
      }

    } catch (error) {
      alert(error)
      console.log(this.FormularioBorraTipoConsecutivo);
    }


    

  }

}
