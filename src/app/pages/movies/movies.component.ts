import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(private movieService:MoviesService){

  }

@Input() movies:Movie[]=[];

ngOnInit(): void {
  this.getPagedMovies(1);
    
}
getPagedMovies(page:number){
  this.movieService.searchMovies(3).subscribe(movies=>{
    this.movies=movies;
  })
}
onPageChange(event:any){
  this.getPagedMovies(event.page +1)
}
}
