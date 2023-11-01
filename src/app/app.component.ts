import { Component } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes, group } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divAnimate', [
      state('normal', style({
        'background-color': 'blue',
        transform: 'translateX(0)'
      })),
      state('marked', style({
        'background-color': 'red',
        transform: 'translateX(100px)'
      })),
      transition('normal => marked', animate(400)),
      transition('marked => normal', animate(800))
    ]),
    trigger('divShrink', [
      state('normal', style({
        'background-color': 'blue',
        transform: 'translateX(0) scale(1)'
      })),
      state('shrinked', style({
        'background-color': 'green',
        transform: 'translateX(100px) scale(0.5)'
      })),
      state('marked', style({
        'background-color': 'red',
        transform: 'translateX(100px) scale(1)'
      })),
      transition('normal <=> marked', animate(400)),
      transition('shrinked <=> *', [
        style({
          'background-color': 'yellow'
        }),
        animate(1000, style({
          'border-radius': '50px'
        })),
        animate(500)
      ])
    ]),
    trigger('list', [
      state('insert', style({
        'opacity': 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            'opacity': 0,
            transform: 'translateX(-100px)',
            offset: 0
          }),
          style({
            'opacity': 0.5,
            transform: 'translateX(-40px)',
            offset: 0.3
          }),
          style({
            'opacity': 0.8,
            transform: 'translateX(-20px)',
            offset: 0.8
          }),
          style({
            'opacity': 1,
            transform: 'translateX(0)',
            offset: 1
          }),
        ]))
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            'color': 'blue'
          })),
          animate(900, style({
            opacity: 0,
            transform: 'translateX(100px)'
          }))
        ])
      ]),
    ])
  ]
})
export class AppComponent {
  state: string = 'normal';
  asterisk: string = 'normal';

  items: any[] = [];

  animate() {
    this.state === 'normal' ? this.state = 'marked' : this.state = 'normal';
    this.asterisk === 'normal' ? this.asterisk = 'marked' : this.asterisk = 'normal';
  }

  shrink() {
    this.asterisk = 'shrinked';
  }

  addItem(item: any) {
    if (item === '') {
      alert('Must enter a value!')
    } else {
      this.items.push(item);
    }
  }

  deleteItem(item: any) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  animationStarted(event: any) {
    console.log('On animation start', event)
  }

  animationFinished(event: any) {
    console.log('On animation finished', event)
  }

}
