import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
interface Message {
  content: string;
  isSentByUser: boolean;
}

interface User {
  profilePhotoUrl: string;
  name: string;
  isOnline: boolean;
  messages: Message[];
}
@Component({
  selector: 'app-basic-button',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export default class BasicButtonComponent {
  users: User[] = [
    { profilePhotoUrl: '', name: 'Alice', isOnline: true, messages: [] },
    { profilePhotoUrl: 'path/to/photo2.jpg', name: 'Bob', isOnline: false, messages: [] },
    { profilePhotoUrl: 'path/to/photo3.jpg', name: 'Charlie', isOnline: true, messages: [] },
  ];
  selectedUser: User | null = null;
  newMessage: string = '';

  selectUser(user: User) {
    this.selectedUser = user;
  }

  sendMessage() {
    if (this.newMessage.trim() && this.selectedUser) {
      this.selectedUser.messages.push({ content: this.newMessage, isSentByUser: true });
      this.newMessage = '';
    }
  }
}
