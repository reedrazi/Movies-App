import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../model/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  popularMovies:Movie[]=[];
  topRatedMovies:Movie[]=[];
  upcomingMovies:Movie[]=[];

  constructor(private moviesService:MoviesService){}

  ngOnInit():void{
    this.moviesService.getMovies('popular').subscribe((movies)=>{
      this.popularMovies=movies;
      
    }),
    this.moviesService.getMovies('top_rated').subscribe((movies)=>{
      this.topRatedMovies=movies;
      
    }),
    this.moviesService.getMovies('upcoming').subscribe((movies)=>{
      this.upcomingMovies=movies;
      
    })
  }

}
