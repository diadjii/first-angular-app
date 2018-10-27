import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: ['.post-like{background-color:rgb(159, 216, 174);}.post-dislike{background-color:rgb(213, 112, 132);}']
})

export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number = 0;
  @Input() postDontLoveIts: number = 0;
  @Input() postCreated_at: Date;
  postStatus = null;

  constructor() { }

  ngOnInit() {
  }

  dislike(this){
    this.postDontLoveIts++;
    if(this.postLoveIts > this.postDontLoveIts)
        this.postStatus = true;
     else
        this.postStatus = false;
         
    console.log(this.postDontLoveIts);
  }

  like(this){
    this.postLoveIts++;
     if(this.postLoveIts < this.postDontLoveIts)
        this.postStatus = false;
     else
        this.postStatus = true;
   
    console.log(this.postLoveIts);
  }

  getS
}
