interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: boolean | string | number;
}

interface Directors extends Teacher {
    numberOfReports: number;
}