import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { FormGroup } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formService: FormService,
    public globalService: GlobalService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    if (
      (this.globalService.isPlatform('android') ||
        this.globalService.isPlatform('ios')) &&
      !(
        this.globalService.isPlatform('android') &&
        this.globalService.isPlatform('mobileweb')
      )
    ) {
      this.globalService.setLightStatusBar();
    }
    this.loginForm = this.formService.loginForm();
  }

  async formSubmit() {
    console.log(this.loginForm);
  }
}
