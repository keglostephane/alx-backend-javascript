interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: boolean | string | number;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (firstName, LastName) {
    return firstName.slice(0, 1).concat('. ', LastName);
}

interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework: () => string;
    displayName: () => string;
}

interface studentContructor {
    new (firstName: string, lastName: string): StudentInterface;
}

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}