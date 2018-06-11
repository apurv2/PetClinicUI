import { Component } from '@angular/core';
import { PetClinicService } from './pet.service';
import { Owner } from './model.owner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  owners: Owner[] = [];
  lastName: string

  constructor(private petService: PetClinicService) { }

  ngOnInit() {

  }

  getOwnersByLastName() {
    this.petService.findByLastName('http://localhost:8080/owners/' + this.lastName)
      .subscribe((owners: Owner[]) => {
        this.owners = owners;
      });
  }

}
