import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    toggle: boolean = false;
    toggle1: boolean = false;
    toggle2: boolean = false;
    toggle3: boolean = false;
    isVissible1: boolean = true;
    isVissible2: boolean = true;
    isVissible3: boolean = true;
    isVissible4: boolean = true;

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() { }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    togglefn() {
        this.toggle = !this.toggle;
        this.toggle1 = false;
        this.toggle2 = false;
        this.toggle3 = false;
        this.isVissible1 = !this.isVissible1;
        this.isVissible2 = !this.isVissible2;
        this.isVissible3 = !this.isVissible3;
        this.isVissible4 = !this.isVissible4;
    }

    togglefn1() {
        this.toggle1 = !this.toggle1;
        this.toggle = false;
        this.toggle2 = false;
        this.toggle3 = false;
        this.isVissible1 = !this.isVissible1;
        this.isVissible2 = !this.isVissible2;
        this.isVissible3 = !this.isVissible3;
        this.isVissible4 = !this.isVissible4;
    }

    togglefn2() {
        this.toggle2 = !this.toggle2;
        this.toggle1 = false;
        this.toggle = false;
        this.toggle3 = false;
        this.isVissible1 = !this.isVissible1;
        this.isVissible2 = !this.isVissible2;
        this.isVissible3 = !this.isVissible3;
        this.isVissible4 = !this.isVissible4;
    }

    togglefn3() {
        this.toggle3 = !this.toggle3;
        this.toggle1 = false;
        this.toggle2 = false;
        this.toggle = false;
        this.isVissible1 = !this.isVissible1;
        this.isVissible2 = !this.isVissible2;
        this.isVissible3 = !this.isVissible3;
        this.isVissible4 = !this.isVissible4;
    }
}
