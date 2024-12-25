import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-tabs-pills',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './basic-tabs-pills.component.html',
  styleUrls: ['./basic-tabs-pills.component.scss']
})
export default class BasicTabsPillsComponent {

  settings = {
    username: 'john_doe',
    email: 'john.doe@example.com',
    privacy: {
      showProfile: true,
      allowMessages: false,
    },
    notifications: {
      email: true,
      sms: false,
    },
  };

  // Method to save settings
  saveSettings(): void {
    console.log('Settings saved:', this.settings);
    // Add logic to send settings to a backend API
  }

  // Method to update password
  updatePassword(): void {
    console.log('Password updated');
    // Add password update logic here
  }
}

