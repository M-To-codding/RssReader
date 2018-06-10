import {Component, OnInit} from '@angular/core';
import {FeedServiceService} from '../../services/feed-service/feed-service.service';
import {feedUrls} from '../../resources/feed-urls';
import {Feed} from "../../models/feed/Feed";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [FeedServiceService]
})
export class FeedComponent implements OnInit {
  urls = feedUrls;
  private data: any;
  private allFeeds = [];
  private items = [];
  item: any;

  public feedData = {
    feedsCount: 0,
    messagesCount: 0,
    authorsCount: 0,
    selectedFeedCharsCount: [0, 0, 0]
  };

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

    this.getStatistics('feedsCount', this.allFeeds);

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

      this.getStatistics('messagesCount', this.items);
      this.getStatistics('authorsCount', feed.items);
    }

  }

  showMessageContent(item) {
    this.item = item;
    this.item.isRead = true;

    this.handleMessage(this.item);
  }

  getStatistics(type, data) {
    if (type === 'feedsCount' && data) {
      this.feedData.feedsCount = data.length;

    }
    if (type === 'messagesCount' && data) {
      this.feedData.messagesCount = data.length;

    }
    if (type === 'authorsCount' && data) {
      let authors = [];

      data.forEach(val => {
        if (val.author) {
          authors.push(val.author);
        }
      });

      const result = authors.filter(function(item, index) {
        return authors.indexOf(item) === index;
      })

      this.feedData.authorsCount = result.length || 0;
    }
  }

  handleMessage(message) {
    let html,
      div,
      allChars = '',
      latChars = '',
      otherChars = '';

    if (message) {
      html = message.content;
      div = document.createElement('div');
      div.innerHTML = html;
      allChars = div.textContent;
      otherChars = allChars.replace(/[^а-яА-Я]+/g, '');
      latChars = allChars.replace(/[^a-zA-Z]+/g, '');
      allChars = (+otherChars.length) + (+latChars.length) + '';
    }
    this.feedData.selectedFeedCharsCount = [+allChars, latChars.length, otherChars.length];
  }

}
