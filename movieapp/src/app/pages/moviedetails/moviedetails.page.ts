import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
})
export class MoviedetailsPage implements OnInit {

  detailInfo = null;

  constructor(private acivatedRout: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    let id = this.acivatedRout.snapshot.paramMap.get('id');
    this.movieService.getDetail(id).subscribe(resp => {
      console.log("detail respnse : " + resp);
      this.detailInfo = resp;
    })
  }
  openwebsite()
  {
    window.open(this.detailInfo.Website, '_blank');
  }

}
