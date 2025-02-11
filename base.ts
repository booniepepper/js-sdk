/**
 * JavaScript and Node.js SDK for OpenFGA
 *
 * API version: 0.1
 * Website: https://openfga.dev
 * Documentation: https://openfga.dev/docs
 * Support: https://discord.gg/8naAwJfWN6
 * License: [Apache-2.0](https://github.com/openfga/js-sdk/blob/main/LICENSE)
 *
 * NOTE: This file was auto generated by OpenAPI Generator (https://openapi-generator.tech). DO NOT EDIT.
 */


// Some imports not used depending on template conditions
import globalAxios, { AxiosStatic } from "axios";

import { Configuration, UserConfigurationParams } from "./configuration";
import { Credentials } from "./credentials";

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
  protected configuration: Configuration;
  protected credentials: Credentials;

  constructor(configuration: UserConfigurationParams | Configuration, protected axios?: AxiosStatic) {
    if (configuration instanceof Configuration) {
      this.configuration = configuration;
    } else {
      this.configuration = new Configuration(configuration, axios || globalAxios);
    }
    this.configuration.isValid();

    this.credentials = Credentials.init(this.configuration);
  }

  public get storeId() {
    return this.configuration.storeId;
  }

  public set storeId(storeId: string) {
    this.configuration.storeId = storeId;
  }
}
