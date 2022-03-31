import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { appVersionAsyncValidator } from './shared/form-validators/async-form.validators';
import { createFormControl2 } from './shared/general.utils';
import { AppVersionService } from './shared/services/version.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stopwatch';
  versionFc: FormControl;

  constructor(private fb: FormBuilder, private as: AppVersionService) {
    this.versionFc = createFormControl2(null, false, [Validators.required], [appVersionAsyncValidator(this.as)]);
  }
}
