import { AbstractControl, AsyncValidatorFn, FormControl } from "@angular/forms";
import { delay, map } from "rxjs/operators";
import { PackageJson } from "src/app/store/meta/meta.state";
import { AppVersionService } from "../services/version.service";


export function appVersionAsyncValidator(vs: AppVersionService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return vs.getAppVersion().pipe(
      //delay(2000),
      map((res: PackageJson) => {
        if (res) {
          const currentVersion = res.version + '';
          if (currentVersion === control.value) {
            return { appVersionExist: true };
          }
          return null;
        }
        return { appVersionError: true };
      })
    );
  };
}
