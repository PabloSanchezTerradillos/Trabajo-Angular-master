import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HistoriaComponent } from './historia/historia.component';

export const routes: Routes = [

    {
        path:'inicio',
        component:InicioComponent
    },

    {
        path:'menu',
        component:MenuComponent
    },

    {
        path:'busqueda',
        component:BusquedaComponent
    },

    {
        path:'historia',
        component:HistoriaComponent
    }

];
