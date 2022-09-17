import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-user-git-hub',
  templateUrl: './card-user-git-hub.component.html',
  styleUrls: ['./card-user-git-hub.component.css']
})
export class CardUserGitHubComponent implements OnInit {

  @Input() infoUser: any;

  constructor() { }

  ngOnInit(): void {
  }

}
