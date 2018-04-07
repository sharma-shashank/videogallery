import { Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',                     // we can use a component multiple times by using its selector  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'application';
  private routeSub: any;
  query: string;
  constructor(private route: ActivatedRoute ) {}
ngOnInit() { this.routeSub = this.route.params.subscribe(params => {
      console.log(params); 
      this.query = params['q'];

})
} 
OnDestroy(){
  this.routeSub.unsubscribe();
}

}

/*The CSS selector in the @Component decorator specifies an element named <app-root>.
 That element is a placeholder in the body of your index.html file */