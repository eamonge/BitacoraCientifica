import { Component, OnInit } from '@angular/core';
import { RamasCientificasModel } from 'src/app/ServiciosAPI/Modelos/RamasCientificas';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServicioRamasCientificasService } from 'src/app/ServiciosAPI/APIServicioRamasCientificas/api-servicio-ramas-cientificas.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isError } from 'util';

@Component({
  selector: 'app-rama-cientifica',
  templateUrl: './rama-cientifica.component.html',
  styleUrls: ['./rama-cientifica.component.css']
})
export class RamaCientificaComponent implements OnInit {


  ListaRamasCientificas: RamasCientificasModel[];
  FormularioRamasCientificas: FormGroup;
  FormularioBuscador: FormGroup;

  CrearRama = 'CrearRamaCientifica';
  BuscadorRama = 'BuscarRamaDeseada';
  idBusqueda: string;

  constructor(private ServicioAPIRamasCientifica: ApiServicioRamasCientificasService, private formbuilder: FormBuilder, private formbuilderSearch: FormBuilder) {
    this.FormularioBuscador = this.formbuilderSearch.group({
      SearchcodigoRama: ['', Validators.required]

    });


    this.FormularioRamasCientificas = this.formbuilder.group({
      codigoRama: ['', Validators.required],
      nombreRama: ['', Validators.required]
    });


  }

  ngOnInit() {
    this.CargarRamasCientificas();
  }

  CargarRamasCientificas() {
    this.ServicioAPIRamasCientifica.getAllRamasCientifica().subscribe(datos => {
      this.ListaRamasCientificas = datos;
    })
  }

  InsertRamaCientifica() {

    if (this.CrearRama === 'CrearRamaCientifica') {

      const NewRamaCientifica: RamasCientificasModel = {
        bcRamaCientificaId: this.FormularioRamasCientificas.get('codigoRama').value,
        nombre: this.FormularioRamasCientificas.get('nombreRama').value,
      };

      this.ServicioAPIRamasCientifica.InsertaUnaRamaCientifica(NewRamaCientifica).subscribe(data => {
        alert("Rama Cientifica Añadida!!");
        this.CargarRamasCientificas();
      });

    }
    console.log(this.FormularioRamasCientificas);
  }

  BuscarRamaCientifica() {

      if (this.BuscadorRama === 'BuscarRamaDeseada') {

        const SearchRamaCientifica: RamasCientificasModel = {
          bcRamaCientificaId: this.FormularioBuscador.get('SearchcodigoRama').value,
          nombre: '',
        };


        this.ServicioAPIRamasCientifica.BuscarRamaCientifca(SearchRamaCientifica.bcRamaCientificaId).subscribe(dataBuscada => {
          alert("CODIGO: " + dataBuscada.bcRamaCientificaId + "\n" + "Rama: " + dataBuscada.nombre);

        });

      }

  }


}
