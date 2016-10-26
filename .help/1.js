
class Person {
    constructor(name, info = {}) {
        this.name = name;
        this.info = info;
    }
    getName() {
        return this.name;
    }

    getInfo() {
        return this.info;
    }

    getInfoString() {
        let output = [];
        Object.keys(this.info).forEach((key) => {
            output.push(`${key}: ${this.info[key]}`);
        });
        return output.join('\n');
    }
}


class Hero extends Person {
    constructor(name, info, skills = []) {
        super(name, info);
        this.skills = skills;
    }

    hasSkill(skill) {
        return this.skills.includes(skill);
    }

    getSkills() {
        return this.skills;
    }

    whoAmI() {
        const {age, height} = this.info;
        const skills = this.skills.join(', ');
        return `I am ${this.name}!\n` +
            `My skills: ${skills}\n` +
            `${age} years old\n` +
            `height ${height} cm`;
    }
}
