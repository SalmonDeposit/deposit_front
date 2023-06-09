import {TestModuleMetadata} from "@angular/core/testing";
import {MockProvider} from "ng-mocks";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {SnotifyService, SnotifyToast, ToastDefaults} from "ng-snotify";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {of} from "rxjs";
import {Title} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";
import {environment} from "./environments/environment";
import {Type} from "@angular/core";
import {GoogleLoginProvider, SocialAuthServiceConfig} from "@abacritt/angularx-social-login";

abstract class AbstractTestBed {
  abstract services: any[];
  abstract pipes: any[];
  abstract modules: any[];
  abstract providers: any[];
  public forService(): TestModuleMetadata {
    return {
      providers: [
        MockProvider('env', { apiUrl: 'mafausseurl' }),
        MockProvider(HttpClient),
        MockProvider(SnotifyService)
      ],
    };
  }
  forComponent(component: Type<any>): {
    declarations: any;
    imports: any;
    providers: any;
  } {
    const declarations = [...this.pipes];
    if (component) {
      declarations.push(component);
    }
    const providers = this.buildProviders();
    const imports = this.provideImports();
    return {
      declarations,
      imports,
      providers,
    };
  }
  provideImports() {
    return [BrowserAnimationsModule, CommonModule, FormsModule, ...this.modules];
  }

  private buildProviders() {
    let providers = [
      {
        provide: 'env',
        useValue: environment
      },
      {
        provide: 'SnotifyToastConfig',
        useValue: ToastDefaults
      },
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                '692533076797-at27d6jb36bqdkdb9kg7s8qehors39ht.apps.googleusercontent.com'
              )
            }
          ]
        } as SocialAuthServiceConfig,
      },
      HttpHandler,
      SnotifyService,
      MockProvider(Router),
      MockProvider(ActivatedRoute, {
        params: of({}),
        queryParams: of({}),
      }),
      MockProvider(Location),
      MockProvider(HttpClient),
      MockProvider(Title),
      RouterTestingModule
    ];
    providers = [...providers, ...this.pipes];
    return providers;
  }
}
export class DepositTestBed extends AbstractTestBed{
  modules: any[] = [];
  pipes: any[] = [];
  providers: any[] = [];
  services: any[] = [
    HttpHandler,
    HttpClient,
    MockProvider(SnotifyService),
  ];

}


export const DEPOSIT_TEST_BED = new DepositTestBed()
