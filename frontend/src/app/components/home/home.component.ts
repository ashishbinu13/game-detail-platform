import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  games = [{ title: '' }];
  searchKey!: String;
  constructor(
    private gameService: GameServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((data) => {
      this.games = JSON.parse(JSON.stringify(data));
      this.games = this.games.slice(0, 3);
    });
  }

  showMore() {
    this.router.navigate(['/games']);
  }

  search() {}
}
