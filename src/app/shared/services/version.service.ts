import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PackageJson } from 'src/app/store/meta/meta.state';
import { HttpService } from './http.service';

export const versionUrl: string = 'https://raw.githubusercontent.com/yiqu/stopwatch/master/package.json';

@Injectable({
  providedIn: 'root'
})
export class AppVersionService {


  constructor(private apiService: HttpService) {
  }

  getAppVersion(): Observable<PackageJson> {
    return this.apiService.get<PackageJson>(versionUrl);
  }

}
