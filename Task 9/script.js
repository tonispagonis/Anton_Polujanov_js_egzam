'use strict';
console.log('Task 9');
/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus su 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    // Method
    wasExpensive() {
        if (this.budget > 100000000) {
            console.log(`${this.title} by ${this.director} is considered expensive because it cost $${this.budget} to make it`);
        }
    }
}    

// Example
const movie1 = new Movie('The Exuberant Movie', 'Art Vandelay', 101000000);
console.log('movie1 ===', movie1);

movie1.wasExpensive();
