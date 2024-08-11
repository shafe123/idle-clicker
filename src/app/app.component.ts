import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeaponComponent } from "./weapon/weapon.component";
import { DataLoaderService } from '../services/data-loader.service';
import { Weapon } from '../interfaces/weapon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WeaponComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'idle-clicker';

  dataLoader: DataLoaderService = inject(DataLoaderService);
  weapons: Weapon[] = this.dataLoader.weapons;
}
