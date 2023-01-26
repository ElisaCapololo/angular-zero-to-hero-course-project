import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**Variabel that take the trendingMovies and send a response to that */
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  /**Function that inject our json (data) */
  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json')
    .subscribe((movies) => {
      this.trendingMovies = movies;
      console.log(movies)
    });
  }

   /**Function that inject our json (data) */
   getTheatreMovies(){
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json')
    .subscribe((movies) => {
      this.theatreMovies = movies;
      console.log(movies)
    });
  }

   /**Function that inject our json (data) */
   getPopularMovies(){
    this.http.get('http://localhost:4200/assets/data/popular-movies.json')
    .subscribe((movies) => {
      this.popularMovies = movies;
      console.log(movies)
    });
  }

  goToMovie(type: string, id: string){
    this.router.navigate(['movie', type, id]);
  }

}
