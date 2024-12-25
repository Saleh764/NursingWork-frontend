// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-collapse',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './basic-collapse.component.html',
  styleUrls: ['./basic-collapse.component.scss']
})
export default class BasicCollapseComponent {
  // Profile properties
  name: string = 'John Doe';
  email: string = 'johndoe@example.com';
  phone: string = '+1234567890';
  location: string = 'New York, NY';
  bio: string = 'Experienced nurse specializing in home healthcare.';
  profileImage: string = 'assets/images/profile-image.jpg'; // Placeholder image path

  // Work experience and education arrays
  workExperience = [
    { role: 'Home Care Nurse', duration: '2 years', description: 'Provided home care services to elderly patients.' },
    { role: 'Hospital Nurse', duration: '3 years', description: 'Worked in the ICU and emergency department.' }
  ];

  education = [
    { degree: 'Bachelor of Science in Nursing', institution: 'University of Health Sciences', year: '2018' }
  ];

  // Skills array
  skills = ['Patient Care', 'Medication Administration', 'Time Management', 'Communication'];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }
}
