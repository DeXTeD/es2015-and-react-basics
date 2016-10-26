
function Hero(name, info, skills) {
    Person.call(this, name, info);
    this.skills = skills || [];
}

Hero.prototype = Object.create(Person.prototype);

Hero.prototype.hasSkill = function (skill) {
    return this.skills.includes(skill);
}

Hero.prototype.getSkills = function () {
    return this.skills;
}

Hero.prototype.whoAmI = function () {
    var age = this.info.age;
    var height = this.info.height;
    var skills = this.skills.join(', ');
    var output = 'I am ' + this.name + '!\n';
    output += 'My skills: ' + skills + '\n';
    output += age + ' years old\n';
    output += 'height ' + height + ' cm';
    return output;
}



function Person(name, info) {
    this.name = name;
    this.info = info || {};
}

Person.prototype.getName = function () {
    return this.name;
};

Person.prototype.getInfo = function () {
    return this.info;
};

Person.prototype.getInfoString = function () {
    var output = [];
    var info = this.info;
    Object.keys(info).forEach(function (key) {
        output.push(key + ': ' + info[key]);
    });
    return output.join('\n');
}

export {Hero, Person};
