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