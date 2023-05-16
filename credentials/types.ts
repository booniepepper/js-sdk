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


export enum CredentialsMethod {
  None = "none",
  ApiToken = "api_token",
  ClientCredentials = "client_credentials",
}

export interface ClientCredentialsConfig {
  /**
   * Client ID
   *
   * @type {string}
   * @memberof Configuration
   */
  clientId: string;
  /**
   * Client Secret
   *
   * @type {string}
   * @memberof Configuration
   */
  clientSecret: string;
  /**
   * API Token Issuer
   *
   * @type {string}
   */
  apiTokenIssuer: string;
  /**
   * API Audience
   *
   * @type {string}
   */
  apiAudience: string;
}

export interface ApiTokenConfig {
  /**
   * API Token Value
   *
   * @type {string}
   */
  token: string;
  /**
   * API Token Header Name (default = Authorization)
   *
   * @type {string}
   */
  headerName: string;
  /**
   * API Token Value Prefix (default = Bearer)
   *
   * @type {string}
   */
  headerValuePrefix: string;
}

export type AuthCredentialsConfig =
  {
    method: CredentialsMethod.None | undefined;
  } | {
    method: CredentialsMethod.ApiToken;
    config: ApiTokenConfig;
  } | {
    method: CredentialsMethod.ClientCredentials;
    config: ClientCredentialsConfig;
  } | undefined;
