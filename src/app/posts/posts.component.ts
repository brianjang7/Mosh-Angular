import { Http } from '@angular/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { 
    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
      })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id; 
        this.posts.splice(0, 0, post);
      });
  }

    updatePost(post) {
      this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
        .subscribe(response => {
          console.log(response.json());
        })
    
      //this.http.put(this.url, JSON.stringify(post));
    }

    deletePost(post) {
      this.http.delete(this.url + '/' + post.id)
        .subscribe(response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        });
    }
}

/*
        console.log(response.json());
*/