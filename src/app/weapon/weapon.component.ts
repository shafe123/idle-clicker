import { Component, inject } from '@angular/core';
import { Weapon } from '../../interfaces/weapon';
import { Input } from '@angular/core';

@Component({
  selector: 'app-weapon',
  standalone: true,
  imports: [],
  templateUrl: './weapon.component.html',
  styleUrl: './weapon.component.scss'
})
export class WeaponComponent {
  @Input() weapon!: Weapon;
}
