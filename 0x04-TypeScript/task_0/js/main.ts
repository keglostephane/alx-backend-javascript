interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    location: "New York"
}

const student2: Student = {
    firstName: "Thomas",
    lastName: "Euler",
    age: 25,
    location: "California"
}

const studentsList: Student[] = [student1, student2];

const renderTable = (students: Student[]) => {
    const table = document.createElement('table');
    const body = document.createElement('tbody');

    students.forEach(student => {
        const row = document.createElement('tr');
        const firstName = document.createElement('td');
        const location = document.createElement('td');

        firstName.textContent = student.firstName;
        location.textContent = student.location;
        row.appendChild(firstName);
        row.appendChild(location);
        body.appendChild(row);

    });

    table.appendChild(body);
    document.body.appendChild(table);
};

renderTable(studentsList);