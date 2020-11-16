import { Component, ViewChild} from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent } from "@syncfusion/ej2-angular-buttons";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('sidebar') sidebar: SidebarComponent;
    @ViewChild('togglebtn') togglebtn: ButtonComponent;
    public showBackdrop: boolean = true;
    public width: string ='280px';
    public closeOnDocumentClick: boolean = true;
    public type: string = 'Over';
    selected :any;

    public onCreated(args: any) {
         this.sidebar.element.style.visibility = '';
         this.selected = 'Dashboard'
    }
    closeClick(): void {
        this.sidebar.hide();
    };

    toggleClick():void{
      this.sidebar.show();
    };

    select(item) {
        this.selected = item; 
    };
    
    isActive(item) {
        return this.selected === item;
    };
}