import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserGithubService } from './services/user-github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  visible = false;
  public userForm!: FormGroup;
  infoUser: any;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserGithubService
  ) {
    this.construirInput();
  }

  construirInput() {
    this.userForm = this._fb.group({
      login: ['', Validators.required]
    })
  }

  consultarUsuario() {

    if(this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    this._userService.getUser(this.userForm.get('login')!.value).subscribe(user => {
      console.log({user});
      this.infoUser = user;
      this.visible = true;
    }, error => {
      alert("No hay usuarios que cumplan con el criterio de búsqueda")
    })
  }

}
