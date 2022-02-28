import { Component, OnInit } from '@angular/core';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css'],
})
export class GamesListComponent implements OnInit {
  config: any;
  searchKey!: String;
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
    if (this.searchKey === undefined) {
      this.gameService.getGames().subscribe((data) => {
        this.games = JSON.parse(JSON.stringify(data));
      });
    }
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }

  search() {
    console.log(this.searchKey);

    if (
      this.searchKey === 'pc' ||
      this.searchKey === 'browser' ||
      this.searchKey === 'all'
    ) {
      this.gameService
        .searchGames(this.searchKey, 'platform')
        .subscribe((data) => {
          this.games = JSON.parse(JSON.stringify(data));
        });
    }
  }
}
