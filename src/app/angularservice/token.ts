import {InjectionToken} from '@angular/core'
import {ProductserviceService } from './productservice.service'

export const APIURL = new InjectionToken('');
export const USE_FAKE = new InjectionToken<boolean>('Fake');
export const PRODUCTSERVICE_SERVICE = new InjectionToken<ProductserviceService>
('Productservice.Service');
export const APP_CONFIG = new InjectionToken<any>('Application.Config')