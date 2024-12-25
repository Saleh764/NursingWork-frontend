import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-badge',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './basic-badge.component.html',
  styleUrls: ['./basic-badge.component.scss']
})
export default class BasicBadgeComponent {

  onComment(): void {
    console.log("Comment button clicked");
    // Add any additional logic you need when the comment button is clicked
  }

  showCommentInput = true; // Controls the visibility of the comment input
  commentText = '';         // Holds the comment text

  toggleCommentInput(): void {
    this.showCommentInput = !this.showCommentInput; // Toggle visibility
  }

  submitComment(): void {
    if (this.commentText.trim()) {
      console.log("Comment submitted:", this.commentText);
      // Logic to handle the comment submission, such as sending it to a backend service
      this.commentText = ''; // Clear the input after submission
      this.showCommentInput = false; // Hide the input field
    } else {
      console.log("Comment is empty.");
    }
}
}