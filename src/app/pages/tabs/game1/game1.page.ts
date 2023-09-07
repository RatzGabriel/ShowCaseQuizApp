import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { v4 as uuidv4 } from 'uuid';

import { AnimationController } from '@ionic/angular';
import { Animation, createAnimation } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.page.html',
  styleUrls: ['./game1.page.scss'],
})
export class Game1Page implements OnInit {
  swiperModules = [IonicSlides];

  banners: any[] = [];
  fragenUndAntworten: any = [];

  questionNrTvShows: any = 0;
  questionNrMovies: any = 0;

  currentCategorie: string = '';

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    const category = 'entertainment'; // Replace with your desired category
    const limit = 30; // Replace with your desired limit

    this.apiService.getTriviaData(category, limit).subscribe(
      (data) => {
        console.log(data);
        // Handle the API response data here
      },
      (error) => {
        console.error(error);
        // Handle any errors here
      }
    );
    (this.currentCategorie = 'movies'),
      (this.banners = [
        { banner: 'assets/images/categorie-movies.jpg' },
        { banner: 'assets/images/categorie-tv-shows.jpg' },
      ]);

    this.fragenUndAntworten = {
      movies: [
        {
          id: uuidv4(),
          frage:
            'Welcher Film gewann den Oscar für den besten Film im Jahr 1994?',
          a: 'Titanic',
          b: 'Jurassic Park',
          c: 'Forrest Gump',
          d: "Schindler's Liste",
          e: 'Der Pate',
          richtig: 'c',
        },
        {
          id: uuidv4(),
          frage:
            'In welchem Film spielt Tom Hanks einen Schiffbrüchigen auf einer einsamen Insel?',
          a: 'Catch Me If You Can',
          b: 'Forrest Gump',
          c: 'The Terminal',
          d: 'Cast Away',
          e: 'Apollo 13',
          richtig: 'd',
        },
        {
          id: uuidv4(),
          frage: "Wer ist der Regisseur des Films 'Pulp Fiction'?",
          a: 'Steven Spielberg',
          b: 'Christopher Nolan',
          c: 'Quentin Tarantino',
          d: 'Martin Scorsese',
          e: 'James Cameron',
          richtig: 'c',
        },
        {
          id: uuidv4(),
          frage: "Welcher Schauspieler spielte die Hauptrolle in 'Der Pate'?",
          a: 'Al Pacino',
          b: 'Robert De Niro',
          c: 'Marlon Brando',
          d: 'Jack Nicholson',
          e: 'Leonardo DiCaprio',
          richtig: 'c',
        },
        {
          id: uuidv4(),
          frage:
            "In welchem Film wird der Satz 'May the Force be with you' häufig verwendet?",
          a: 'Star Trek: The Motion Picture',
          b: 'Blade Runner',
          c: 'E.T. - Der Außerirdische',
          d: 'Star Wars: Episode IV - Eine neue Hoffnung',
          e: 'The Matrix',
          richtig: 'd',
        },
      ],
      tvShows: [
        {
          id: '1',
          frage:
            'In welcher TV-Serie der 90er Jahre spielt ein sprechendes Baby mit?',
          a: 'Friends',
          b: 'Full House',
          c: 'Family Matters',
          d: 'The Simpsons',
          e: 'Blossom',
          richtig: 'd',
        },
        {
          id: '2',
          frage: 'Welche TV-Show folgt den Abenteuern von Mulder und Scully?',
          a: 'The X-Files',
          b: 'Buffy the Vampire Slayer',
          c: 'Twin Peaks',
          d: 'The Outer Limits',
          e: 'Fringe',
          richtig: 'a',
        },
        {
          id: '3',
          frage:
            'Welche TV-Sendung handelt von einem High-School-Lehrer, der Meth herstellt?',
          a: 'Malcolm mittendrin',
          b: 'The Fresh Prince of Bel-Air',
          c: 'Breaking Bad',
          d: 'The Sopranos',
          e: 'The Wire',
          richtig: 'c',
        },
        {
          id: '4',
          frage:
            'In welcher TV-Show werden Geheimagenten gejagt, die untergetaucht sind?',
          a: 'Alias',
          b: '24',
          c: 'Homeland',
          d: 'Prison Break',
          e: 'The Americans',
          richtig: 'e',
        },
        {
          id: '5',
          frage:
            'Welche TV-Serie folgt den Abenteuern von sechs Freunden in New York City?',
          a: 'Cheers',
          b: 'Seinfeld',
          c: 'How I Met Your Mother',
          d: 'Friends',
          e: 'Will & Grace',
          richtig: 'd',
        },
      ],
    };
  }

  questionSwitch(input: any) {
    if (input == 1) {
      if (this.currentCategorie === 'tvShows') {
        if (this.questionNrTvShows > this.fragenUndAntworten.tvShows.length - 2)
          return;
        this.questionNrTvShows += 1;
      } else if (this.currentCategorie === 'movies') {
        if (this.questionNrMovies > this.fragenUndAntworten.movies.length - 2)
          return;
        this.questionNrMovies += 1;
      }
    } else {
      if (this.currentCategorie === 'tvShows') {
        if (this.questionNrTvShows === 0) return;
        this.questionNrTvShows -= 1;
      } else if (this.currentCategorie === 'movies') {
        if (this.questionNrMovies === 0) return;
        this.questionNrMovies -= 1;
      }
    }
  }

  async changeCategorie(categorie: string, image: HTMLElement | any) {
    const animation: Animation = createAnimation()
      .addElement(image)
      .duration(500) // Animation duration in milliseconds
      .iterations(1) // Number of times the animation should run
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.5)' }, // Enlarge the image
        { offset: 1, transform: 'scale(1)' }, // Return to normal size
      ]);

    await animation.play();

    if (categorie === 'movies') {
      this.currentCategorie = 'movies';
    } else if (categorie === 'tvShows') {
      this.currentCategorie = 'tvShows';
    }
  }
}
