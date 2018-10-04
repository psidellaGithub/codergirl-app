import { Component, OnInit } from '@angular/core';
// import { Httpclient } from '@angular/common';
@Component({
  selector: 'cg-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  selcetedVideoId: string | undefined;
  videos = [];
  constructor() { }

  ngOnInit() {
  }

}
/* pickVideo(video: any); {
  this.selctedVideoId = video.id;
} */

