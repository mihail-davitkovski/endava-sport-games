import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const sports = [
        {
            "id": 1,
            "name": "Football",
            "description":"",
            "imageUrl": "/resources/images/sports/football.jpg"
        },
        {
            "id": 2,
            "name": "Basketball",
            "description":"",
            "imageUrl": "/resources/images/sports/basketball.jpg"
        },
    ]
      return {sports};
    }
  }