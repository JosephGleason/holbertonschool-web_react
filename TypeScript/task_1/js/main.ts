interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'José',
  lastName: 'Martínez',
  fullTimeEmployee: false,
  location: 'San Juan',
  contract: false,
};

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Carmen',
  lastName: 'Rivera',
  location: 'Bayamón', 
  fullTimeEmployee: true,
  numberOfReports: 17,
};

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

class StudentClass {
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
