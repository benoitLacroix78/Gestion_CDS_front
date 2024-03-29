import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  currentUser: User = {
    title: '',
    nom: '',
    prenom : ''
  };
  message = '';
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getUser(this.route.snapshot.params['id']);
  }

  getUser(id: string): void {
    this.userService.get(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  /*updatePublished(status: boolean): void {
    const data = {
      title: this.currentPerson.title,
      nom: this.currentPerson.nom,
      published: status
    };
    this.message = '';
    this.personService.update(this.currentPerson.id, data)
      .subscribe(
        response => {
          this.currentPerson.prenom = status;
          console.log(response);
          this.message = response.message ? response.message : 'The status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }*/
  updateUser(): void {
    this.message = '';
    this.userService.update(this.currentUser.id, this.currentUser)
      .subscribe(
        response => {
          console.log("response"+ response);
          this.message = response.message ? response.message : 'This person was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
  deleteUser(): void {
    this.userService.delete(this.currentUser.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/persons']);
        },
        error => {
          console.log(error);
        });
  }
}
