import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const games = [
        {
            "id": 1,
            "name": "Football",
            "description":"",
            "imageUrl": "/resources/images/games/football.jpg"
        },
        {
            "id": 2,
            "name": "Basketball",
            "description":"",
            "imageUrl": "/resources/images/games/basketball.jpg"
        },
    ]
      return {games};
    }
  }