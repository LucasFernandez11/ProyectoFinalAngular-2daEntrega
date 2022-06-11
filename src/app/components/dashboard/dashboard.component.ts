import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from '../../shared/interfaces/menu';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    menu: Menu[]=[];
    opened = false;
    admin: boolean = false;
    constructor(private menuService: MenuService ) { }

    ngOnInit(): void {
      this.loadView();
    }

    loadView(){
      this.cargarMenu();
    }

    cargarMenu(): void {
      this.menuService.getMenu().subscribe(data => {
        this.menu = data;
      });
    }
    ingresarAdmin(){
      this.admin = true;
    }
    ingresarUsuario(){
      this.admin = false;
    }

  }

