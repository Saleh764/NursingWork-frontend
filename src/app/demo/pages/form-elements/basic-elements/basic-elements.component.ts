import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-elements',
  standalone: true,
  imports: [SharedModule, NgbDropdownModule],
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.scss']
})
export default class BasicElementsComponent {
  // Example contract data (can be replaced with API data)
  contracts = [
    {
      id: 1,
      client: 'John Doe',
      nurse: 'Jane Smith',
      startDate: '2024-01-01',
      endDate: '2024-01-01',
      status: 'Active',
    },
    {
      id: 2,
      client: 'Alice Johnson',
      nurse: 'Bob Williams',
      startDate: '2024-03-01',
      endDate: '2024-06-30',
      status: 'Completed',
    },
  ];

  isContractEndingSoon(endDate: string): boolean {
    const today = new Date();
    const contractEndDate = new Date(endDate);

    const timeDifference = contractEndDate.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysDifference === 1; // True if exactly 1 day is left
  }

  // Method to determine if the contract has more than 1 day left
  isContractActive(endDate: string): boolean {
    const today = new Date();
    const contractEndDate = new Date(endDate);

    const timeDifference = contractEndDate.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysDifference > 1; // True if more than 1 day is left
  }
  approveContract(id: number): void {
    const contract = this.contracts.find(c => c.id === id);
    if (contract) {
      contract.status = 'Approved'; // Update status to Approved
      console.log(`Contract ${id} approved by admin.`);
    }
  }
  

  // Contract form model
  newContract = {
    client: '',
    nurse: '',
    startDate: '',
    endDate: '',
    status: 'Pending',
  };

  // Methods
  addContract(): void {
    const newId = this.contracts.length + 1;
    const contractToAdd = { id: newId, ...this.newContract };
    this.contracts.push(contractToAdd);
    this.resetForm();
  }

  resetForm(): void {
    this.newContract = {
      client: '',
      nurse: '',
      startDate: '',
      endDate: '',
      status: 'Pending',
    };
  }
}