import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './navdata';

interface SideNavToggle{
  screenwidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> =new EventEmitter();
  collapsed=false;
  screenwidth=0;
  navData = navbarData;
  toggleCollapse():void{
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenwidth:this.screenwidth});    
  }
}
