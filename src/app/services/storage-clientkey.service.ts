import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageClientKeyService {

  constructor() { }

  /**
 * Retrieves clientkey.
 * @returns ClientKey
 */
  getClientKey(): string | null {
    return localStorage.getItem(environment.STORAGE_CLIENT_KEY);
  }

  /**
   * Retrieves refresh clientkey.
   * @returns Refresh clientkey
   */
  getRefreshClientKey(): string | null {
    return localStorage.getItem(environment.STORAGE_REFRESH_CLIENT_KEY);
  }

  /**
   * Sets clientkey.
   * @param clientkey ClientKey
   */
  setClientKey(clientkey: string): void {
    localStorage.setItem(environment.STORAGE_CLIENT_KEY, clientkey);
  }

  /**
   * Sets refresh clientkey.
   * @param clientkey Refresh clientkey
   */
  setRefreshClientKey(clientkey: string): void {
    localStorage.setItem(environment.STORAGE_REFRESH_CLIENT_KEY, clientkey);
  }

  /**
   * Removes clientkey and refresh clientkey from storage.
   */
  clear(): void {
    localStorage.removeItem(environment.STORAGE_CLIENT_KEY);
    localStorage.removeItem(environment.STORAGE_REFRESH_CLIENT_KEY);
  }
  
}
