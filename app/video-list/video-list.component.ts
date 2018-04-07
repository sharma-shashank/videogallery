import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import {VideoItem} from '../videos/video';
import {VideoService } from '../videos/videos.service';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService],
})

export class VideoListComponent implements OnInit, OnDestroy {
    private req: any;
    title = "Video List";
    videoList: [VideoItem];

  constructor(private http: Http, private _video: VideoService) {}

  ngOnInit() {
    this.req = this._video.list().subscribe(data => {
      this.videoList = data as [VideoItem];
    });
  }
  ngOnDestroy() {
    this.req.unsubscribe();
  }



}




