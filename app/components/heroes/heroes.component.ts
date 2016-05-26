/**
 * Created by Maycon Ribeiro on 26/05/2016.
 */
'use strict';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {Hero} from "./../../model/hero";
import {HeroService} from "./../../service/hero.service.ts";
import {HeroDetailComponent} from "../hero-detail/hero-datail.componente";

/**
 * Selector usado para indicar o nome da diretiva uso da crase para compor o template
 */
@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    templateUrl: './app/components/heroes/heroes.component.html',
    styleUrls:  ['./app/components/heroes/heroes.component.css']
})

export class HeroesComponent implements OnInit {

    constructor(
        private router:Router,
        private heroService:HeroService
    ) {}

    public heroes: Hero[];
    public selectedHero: Hero;

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    gotoDetail(hero: Hero) {
        this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }
}
