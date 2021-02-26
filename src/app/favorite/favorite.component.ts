import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: [
    `
    .btn {
      color: yellow;
  }
    `
  ]
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();


  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
