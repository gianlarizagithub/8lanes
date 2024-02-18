// applicant.interface.ts
export interface Applicant {
  id: string;
  name: string;
  course: 'Theoretical Driving' | 'Practical Driving';
  registrationDate: string;
  email: string;
}
