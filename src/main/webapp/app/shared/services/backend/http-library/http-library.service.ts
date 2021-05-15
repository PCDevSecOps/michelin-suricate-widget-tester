/*
 *  /*
 *  * Copyright 2012-2018 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

import {Injectable} from '@angular/core';

import {AbstractHttpService} from '../abstract-http/abstract-http.service';

/**
 * Manage the asset http calls
 */
@Injectable({ providedIn: 'root' })
export class HttpLibraryService {
  /**
   * Global assets endpoint
   */
  private static readonly assetsApiEndpoint = `${AbstractHttpService.baseApiEndpoint}/v1/libraries`;

  /**
   * Constructor
   */
  constructor() {}

  /**
   * Get the library content url
   *
   * @param libraryName The library name
   * @param widgetPath The path of the widget folder
   */
  public static getContentUrl(libraryName: string, widgetPath: string): string {
    return libraryName ? `${HttpLibraryService.assetsApiEndpoint}/${libraryName}/content?widgetPath=${widgetPath}` : ``;
  }
}
