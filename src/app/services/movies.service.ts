import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MovieDto } from '../model/movies';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { APIKEY } from '../constants/secrets';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
baseUrl:String='https://api.themoviedb.org/3';
ApiKey:String=APIKEY;
  constructor(private http:HttpClient ) {}

  getMovies(type: String='upcoming', count :number=12){
    return this.http.get<MovieDto>( `${this.baseUrl}/movie/${type}?api_key=${this.ApiKey}`).pipe(switchMap(res=>{
      return of(res.results.slice(0,count))
    }))
  }
  searchMovies(page:number){
    return this.http.get<MovieDto>( `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.ApiKey}`).pipe(switchMap(res=>{
      return of(res.results)
    }))
  }
}
