import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { F1Service } from './services/f1.service';
import { CarrerasAlonso } from './Interfaces/f1.datos';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HistoriaComponent } from './historia/historia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, ReactiveFormsModule, MenuComponent, InicioComponent, BusquedaComponent, HistoriaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  formulario = new FormGroup({
    circuito: new FormControl('', Validators.required),
    season: new FormControl('', Validators.required),
  });

  valorSeason: any;
  valorCircuit: any;

  resultado: any = [];

  constructor(private servicef1: F1Service) {}

  onSubmit() {
    this.valorSeason = this.formulario.value.season;
    this.valorCircuit = this.formulario.value.circuito;

    //para ver si existen datos repetidos
    for (let i of this.carrerasAlonso.Races) {
      if (
        i.season == this.valorSeason &&
        i.Circuit.circuitName == this.valorCircuit
      ) {
        this.resultado.push(i);
        console.log(i.season + ' | ' + i.Circuit.circuitName);
        console.log(i);
        
      }
    }
  }

  carrerasAlonso: CarrerasAlonso = {
    driverId: '',
    Races: [],
  };
  carreras: any;
  seasons: Array<string> = [];
  circuits: Array<string> = [];

  ngOnInit(): void {
    // Cuando se carga la pagina es lo primero que se ejecuta.
    this.getRace();
  }


  getRace() {
    return this.servicef1.getData().subscribe({
      next: (result) => {
        // Se almacena la cantidad de carreras que hay
        this.carreras = result.MRData.total;
        // Se almacena el ID del piloto
        this.carrerasAlonso.driverId = result.MRData.RaceTable.driverId;

        // Se almacenan las carreras
        for (let i = 0; i < this.carreras; i++) {
          this.carrerasAlonso.Races.push(result.MRData.RaceTable.Races[i]);

          if (!this.seasons.includes(result.MRData.RaceTable.Races[i].season)) 
          {
            this.seasons.push(result.MRData.RaceTable.Races[i].season);
          }
          if (!this.circuits.includes(result.MRData.RaceTable.Races[i].Circuit.circuitName)) 
          {
            this.circuits.push(result.MRData.RaceTable.Races[i].Circuit.circuitName);
          }
        }
      },
      error: (err) => {
        console.log('Error en getRace: ' + err);
      },
    });
  }
}

