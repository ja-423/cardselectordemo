import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatListModule} from '@angular/material/list';
import { CommonModule } from "@angular/common";
import { MatSelectModule} from '@angular/material/select'; 
import { MatCardModule} from '@angular/material/card';
import { MatExpansionModule} from '@angular/material/expansion'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatSidenavModule,
    MatFormFieldModule,
    MatListModule,
    CommonModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cardselectordemo';
}
