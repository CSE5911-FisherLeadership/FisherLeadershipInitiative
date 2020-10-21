import { Component, ViewChild } from '@angular/core';
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
    public onCreated(args: any) {
         this.sidebar.element.style.visibility = '';
    }
    btnClick() {
        if (this.togglebtn.element.classList.contains('e-active')) {
            this.sidebar.hide();
        } else {
            this.sidebar.show();
        }
    }
    closeClick() {
        this.sidebar.hide();
        this.togglebtn.element.classList.remove('e-active');
    }
}