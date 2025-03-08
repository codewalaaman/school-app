import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  standalone: false,
})
export class OnboardingComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  async navigation() {
    this.router.navigate(['/onboarding/login']);
  }
}
