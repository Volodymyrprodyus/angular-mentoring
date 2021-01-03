import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/service/loading.service';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.css']
})
export class LoadingBlockComponent implements OnInit {

  loading: boolean;

  constructor(private loadingService: LoadingService) {

    this.loadingService.isLoading.subscribe((v) => {
      console.log(v);
      this.loading = v;
    });

  }
  ngOnInit() {
  }

}
