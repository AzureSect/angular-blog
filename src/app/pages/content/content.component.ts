import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/data';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() photoCover: string = '';
  @Input() contentTitle: string = '';
  @Input() contentDescription: string = '';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null): void {
    const result = dataFake.filter((article) => article.id == id);

    if (result.length > 0) {
      const item = result[0];
      console.log('this.id');
      this.contentTitle = item.title;
      this.contentDescription = item.description;
      this.photoCover = item.photoCover;
      console.log(result);
    }
  }
}
