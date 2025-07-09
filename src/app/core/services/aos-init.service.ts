import { Injectable } from '@angular/core';
import AOS from 'aos';

@Injectable({providedIn: 'root'})
export class AOSinitService {
    init() {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'
        });
    }

    refresh() {
        AOS.refresh();
    }
}