/**
 * Created by Maycon Ribeiro on 26/05/2016.
 */
import { Injectable } from '@angular/core';
import {HEROES} from "./../mocks/mock-heroes";
import {Hero} from "./../model/hero";

@Injectable()
export class HeroService {

    /**
     * Busca assincrona mais rapida
     * @returns {Promise<Hero[]>}
     */
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    /**
     * Busca sincrona mais demorada
     * @returns {Promise<Hero[]>}
     */
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve => setTimeout(()=>resolve(HEROES), 2000)); //2 segundos
    }

    getHero(id: number) {
        return Promise.resolve(HEROES).then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }
}