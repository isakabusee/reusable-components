import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  }
  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }
  viewMode = 'somethingElse';

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs);
  }
  courses = [1,2];
}
