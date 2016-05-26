import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';

import {Hero} from "./../../model/hero";
import {HeroService} from "./../../service/hero.service.ts";

@Component({
    selector: 'my-hero-detail',
    inputs: ['hero'],
    templateUrl: './app/components/hero-detail/hero-detail.component.html',
    styleUrls: ['./app/components/hero-detail/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams) {
    }

    hero: Hero;

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}
