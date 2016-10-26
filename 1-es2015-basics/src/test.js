import { expect } from 'chai';

import { Hero, Person } from './personAndHero.js';

describe('Person', function () {
    it('should return name', function () {
        const person = new Person('Jan');
        expect(person.getName()).to.be.equal('Jan');
    });
    it('info should be always an object ', function () {
        const person = new Person('Jola');
        expect(person.getInfo()).to.be.a('object');
    });
    it('should return all info', function () {
        const person = new Person('Jan', {
            age: 22,
            height: 172
        });
        expect(person.getInfoString()).to.be.equal('age: 22\nheight: 172');
    });
});


describe('Hero', function () {
    it('should return name', function () {
        const hero = new Hero('Waldek');
        expect(hero.getName()).to.be.equal('Waldek');
    });
    it('should return all info', function () {
        const hero = new Hero('Kacper', {
            age: 26,
            height: 185
        });
        expect(hero.getInfoString()).to.be.equal('age: 26\nheight: 185');
    });
    it('should find skill', function () {
        const hero = new Hero('Waldek', {age: 56}, ['sloppy work']);
        expect(hero.hasSkill('sloppy work')).to.be.true;
    });
    it('should not find skill', function () {
        const hero = new Hero('Waldek', {age: 56}, ['sloppy work']);
        expect(hero.hasSkill('good work')).to.be.false;
    });
    it('skill should be always an array ', function () {
        const hero = new Hero('Waldek');
        expect(hero.getSkills()).to.be.a('array');
    });
    it('should tell something about yourself', function () {
        const hero = new Hero('Mietek', {
            age: 61,
            height: 149
        }, [
            'resistance to alcohol',
            'life experience'
        ]);
        expect(hero.whoAmI()).to.be.equal('I am Mietek!\nMy skills: resistance to alcohol, life experience\n61 years old\nheight 149 cm');
    });
});
