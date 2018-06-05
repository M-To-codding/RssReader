import {Component, Input, OnInit} from '@angular/core';
import {FeedServiceService} from '../services/feed-service/feed-service.service';
import {feedUrls} from '../resources/feed-urls';
import {Feed} from "../models/feed/Feed";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  urls = feedUrls;
  private data: any;
  private allFeeds = [];
  private items = [];

  constructor(private fs: FeedServiceService) {
  }

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    for (let i = 0; i < this.urls.length; i++) {
      this.fs.getFeedData(this.urls[i])
        .subscribe(
          res => this.data = res,
          error => console.log(error),
          () => this.handleData()
        );
    }
  }

  handleData() {
    const feed = new Feed;

    feed.feed = this.data.feed;
    feed.items = this.data.items;
    feed.feedsCount = this.data.items.length;
    feed.showMessages = false;

    this.allFeeds.push(feed);
  }

  showMessages(feed) {
    if (feed.showMessages === false) {
      this.allFeeds.forEach(function (val) {
        if (val.showMessages) {
          val.showMessages = false;
        }
        feed.showMessages = true;
      });
      this.items = feed.items;
    }

  }
}
