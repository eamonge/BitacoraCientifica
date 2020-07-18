import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoConsecutivosModelo } from "src/app/ServiciosAPI/Modelos/TipoConsecutivos";
import { ApiServicioTipoConsecutivoService } from "src/app/ServiciosAPI/ApiServicioTipoConsecutivo/api-servicio-tipo-consecutivo.service";
import { FormGroup,FormBuilder,Validators } from "@angular/forms";

@Component({
  selector: 'app-consecutivo',
  templateUrl: './TipoConsecutivos.component.html',
  styleUrls: ['./TipoConsecutivos.component.css']
})
export class TipoConsecutivosComponent implements OnInit {

  ListaTiposConsecutivos:TipoConsecutivosModelo[];

  FomularioTipoConsecutivo:FormGroup;

  Guardar = 'CrearTipoConsecutivo';

  constructor(private ServicioAPITipoConsecutivo:ApiServicioTipoConsecutivoService,private formbuilder:FormBuilder,private router:Router) { 

    this.FomularioTipoConsecutivo = this.formbuilder.group({
      NumeroConsecutivo:['',Validators.required],
      DescripcionConsecutivo: ['',Validators.required]
    });


  }
  ngOnInit() {
   this.CargarTiposConsecutivos();
  }

  CargarTiposConsecutivos(){

    this.ServicioAPITipoConsecutivo.getAllConsecutivos().subscribe(datos =>{
      this.ListaTiposConsecutivos = datos;
    })

  }

  InsertarTipoConsecutivo(){

    try {
      
      if (this.Guardar === 'CrearTipoConsecutivo') {
      
        const NewConsecutivo: TipoConsecutivosModelo={
          bcTipoConsecutivoId: this.FomularioTipoConsecutivo.get('NumeroConsecutivo').value,
          descripcion: this.FomularioTipoConsecutivo.get('DescripcionConsecutivo').value
        };
  
        this.ServicioAPITipoConsecutivo.InsertaUnConsecutivo(NewConsecutivo).subscribe(datos =>{
          alert("Datos Añadidos");
          this.CargarTiposConsecutivos();
        });
      } 


    } catch (error) {
      alert(error)
      console.log(this.FomularioTipoConsecutivo);
    }



    
   
 
}}
