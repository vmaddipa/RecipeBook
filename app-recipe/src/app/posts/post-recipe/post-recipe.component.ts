import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-recipe',
  templateUrl: './post-recipe.component.html',
  styleUrls: ['./post-recipe.component.scss']
})
export class PostRecipeComponent implements OnInit {
  constructor() {}
  enteredValue = '';
  ngOnInit() {}
}
