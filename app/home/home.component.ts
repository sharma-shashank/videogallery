import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';    // for http request
import {VideoItem} from '../videos/video';
import {VideoService } from '../videos/videos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:  [VideoService],

})
export class HomeComponent implements OnInit, OnDestroy {
    private req: any;
   homeImageList: [VideoItem] = [] as [VideoItem];    //  {image: "assets/image/nature/4.jpg", name:"4", slug:'video-1'}
   videoListDefaultImage = 'assets/image/nature/6.jpg';
  constructor(private http: Http, private router: Router, private _video: VideoService ) { }

  ngOnInit() {
      this.req = this._video.list().subscribe(data => {
      data.filter(item => {
          if(item.featured){
              this.homeImageList.push(item); 
          }
      });
    });
  }
    ngOnDestroy() {
      this.req.unsubscribe();
    }
}