import { Component, OnInit } from '@angular/core';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css'],
})
export class GamesListComponent implements OnInit {
  config: any;
  games = [
    {
      title: '',
      genre: '',
      platform: '',
      developer: '',
      short_description: '',
    },
  ];

  constructor(private gameService: GameServiceService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
    };
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((data) => {
      this.games = JSON.parse(JSON.stringify(data));
    });
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }
}
