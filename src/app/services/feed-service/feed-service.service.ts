import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedServiceService {
  private rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';

  constructor(private http: HttpClient) {
  }

  getFeedData(url: string) {
    return this.http.get(this.rssToJsonServiceBaseUrl + url).map(this.extractFeeds);
  }

  private extractFeeds(res: Response) {
    return res || {};
  }

}
