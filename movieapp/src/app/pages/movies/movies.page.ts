import { Component, OnInit } from '@angular/core';
import { MovieService, searchType } from 'src/app/services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})

export class MoviesPage implements OnInit {

  results:Observable<any>;
  searchTerm = '';
  type:searchType = searchType.all;

  constructor(private _movieService:MovieService) { }

  ngOnInit() {
    //this.GetMovie();
  }
  searchChange()
  {
    this.results = this._movieService.searchData(this.searchTerm, this.type);
      // this.result.subscribe(res=>{

      // })
  }
  GetMovie()
  {
    this._movieService.getallData().subscribe((data)=>{
      console.log(data);
    })
  }
}
