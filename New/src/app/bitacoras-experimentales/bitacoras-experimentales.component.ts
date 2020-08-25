import { Component, OnInit } from '@angular/core';
import { ApiServicioBitacoraExperimentalService } from '../ServiciosAPI/ApiServicioBitacoraExperimental/api-servicio-bitacora-experimental.service'
import { BitacoraExperimentalModel } from "../ServiciosAPI/Modelos/BitacoraExperimental";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bitacoras-experimentales',
  templateUrl: './bitacoras-experimentales.component.html',
  styleUrls: ['./bitacoras-experimentales.component.css']
})
export class BitacorasExperimentalesComponent implements OnInit {
  ngOnInit(): void {
    
  }
  selectedFile1 = null;
  selectedFile2 = null;
  selectedFile3 = null;
  selectedFile4 = null;
  selectedFile5 = null;

  insertaBitacora = 'CrearBitacoraExperimental';
  FormularioBitacoraExperimental: FormGroup;
  FormularioSeachBitacoraExperimental: FormGroup;


  constructor(private ServicioAPIBitacoraExperimental: ApiServicioBitacoraExperimentalService,
    private formbuilder: FormBuilder, private FormBitacoraExperimentalSearch: FormBuilder) {
    
    this.FormularioBitacoraExperimental = this.formbuilder.group({

      BcExperimentoId:['',Validators.required],
      BcUsuarioId:['',Validators.required],
      BcProyectoId:['',Validators.required],
      Nombre:['',Validators.required],
      Fecha:['',Validators.required],
      Detalle:['',Validators.required],
      Muestra1:[''],
      Muestra2:[''],
      Muestra3:[''],
      Muestra4:[''],
      Muestra5:[''],
      BcUsuarioResponsableId:['',Validators.required],
      BcUsuarioTestigoId:['',Validators.required]
    });
    
  }

 // onFileSelected1() {
   //  this.selectedFile1 = event.target.files[0];
   //};

   //onFileSelected2() {
    // this.selectedFile1 = event.target.files[0];
  // };
  // onFileSelected3() {
  //this.selectedFile1 = event.target.files[0];
  // };
   //onFileSelected4() {
//this.selectedFile1 = event.target.files[0];
   //};
  // onFileSelected5() {
     //this.selectedFile1 = event.target.files[0];
  //};

  InsertarBitacoraExperimental() {
    
    if (this.insertaBitacora === 'CrearBitacoraExperimental') {
      
      const NewBitacoraExperimental: BitacoraExperimentalModel = {
        BcExperimentoId: this.FormularioBitacoraExperimental.get('BcExperimentoId').value,
        BcUsuarioId: this.FormularioBitacoraExperimental.get('BcUsuarioId').value,
        BcProyectoId: this.FormularioBitacoraExperimental.get('BcProyectoId').value,
        Nombre: this.FormularioBitacoraExperimental.get('Nombre').value,
        Fecha: this.FormularioBitacoraExperimental.get('Fecha').value,
        Detalle: this.FormularioBitacoraExperimental.get('Detalle').value,
        Muestra1: this.imagePath1,
        Muestra2: this.imagePath2,
        Muestra3: this.imagePath3,
        Muestra4: this.imagePath4,
        Muestra5: this.imagePath5,
        BcUsuarioResponsableId: this.FormularioBitacoraExperimental.get('BcUsuarioResponsableId').value,
        BcUsuarioTestigoId: this.FormularioBitacoraExperimental.get('BcUsuarioTestigoId').value,
      };

      this.ServicioAPIBitacoraExperimental.InsertaUnaBitacoraExperimental(NewBitacoraExperimental).subscribe(datos => {
        console.log(this.FormularioBitacoraExperimental);
        alert("Se inserto una nueva bitacora experimental!!!");
      });
    }

  }


  public imagePath1;
  public imagePath2;
  public imagePath3;
  public imagePath4;
  public imagePath5;
  imgURL1: any;
  imgURL2: any;
  imgURL3: any;
  imgURL4: any;
  imgURL5: any;

  public message: string;
 
    Muestra1(files) {
     if (files.length === 0)
       return;
 
     var mimeType1 = files[0].type;
     if (mimeType1.match(/image\/*/) == null) {
       this.message = "Only images are supported.";
     return;
     }
 
     var reader1 = new FileReader();
     this.imagePath1 = files;
     reader1.readAsDataURL(files[0]); 
     reader1.onload = (_event) => { 
       this.imgURL1 = reader1.result; 
     }
   }
   Muestra2(files2) {
     if (files2.length === 0)
       return;
 
     var mimeType2 = files2[0].type;
     if (mimeType2.match(/image\/*/) == null) {
       this.message = "Only images are supported.";
       return;
     }
 
     var reader2 = new FileReader();
     this.imagePath2 = files2;
     reader2.readAsDataURL(files2[0]); 
     reader2.onload = (_event) => { 
       this.imgURL2 = reader2.result; 
     }
   }
   Muestra3(files3) {
     if (files3.length === 0)
       return;
 
     var mimeType3 = files3[0].type;
     if (mimeType3.match(/image\/*/) == null) {
       this.message = "Only images are supported.";
       return;
     }
 
     var reader3 = new FileReader();
     this.imagePath3 = files3;
     reader3.readAsDataURL(files3[0]); 
     reader3.onload = (_event) => { 
       this.imgURL3 = reader3.result; 
     }
   }
   Muestra4(files4) {
     if (files4.length === 0)
       return;
 
     var mimeType4 = files4[0].type;
     if (mimeType4.match(/image\/*/) == null) {
       this.message = "Only images are supported.";
       return;
     }
 
     var reader4 = new FileReader();
     this.imagePath4 = files4;
     reader4.readAsDataURL(files4[0]); 
     reader4.onload = (_event) => { 
       this.imgURL4 = reader4.result; 
     }
   }
   Muestra5(files5) {
    if (files5.length === 0)
       return;
 
    var mimeType5 = files5[0].type;
    if (mimeType5.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
       return;
    }
 
   var reader5 = new FileReader();
     this.imagePath5 = files5;
     reader5.readAsDataURL(files5[0]); 
     reader5.onload = (_event) => { 
      this.imgURL5 = reader5.result; 
     }
  } 

 

}
