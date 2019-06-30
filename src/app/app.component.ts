import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = {
    title: 'Review applications',
    assignee: null
  }
}

/* 

  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  }


  canSave = true;

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangeEventArgs ){
    console.log("Favorite changed: ", eventArgs);
  }


courses = [1, 2];

viewMode = 'somethingElse';


  onAdd() {
    this.courses.push({ id: 4, name: 'course4'});
  }

  onChange(course) {
    course.name = 'UPDATED';
    
    // let index = this.courses.indexOf(course);
    // this.courses.splice(index, 1);
  }

  courses = [
    { id: 1, name: 'course1 '},
    { id: 2, name: 'course2 '},
    { id: 3, name: 'course3 '}
  ];

    courses;

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1 '},
      { id: 2, name: 'course2 '},
      { id: 3, name: 'course3 '}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

*/


