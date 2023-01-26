import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**Variabel that take the trendingMovies and send a response to that */
  trendingMovies: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTrendingMovies();
  }

  /**Function that inject our json (data) */
  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json')
    .subscribe((movies) => {
      this.trendingMovies = movies;
      console.log(movies)
    });
  }

}
