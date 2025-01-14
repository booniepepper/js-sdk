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


export function chunkArray<T>(inputArray: T[], maxChunkSize: number): T[][] {
  const arrayOfArrays = [];

  const inputArrayClone = [...inputArray];
  while (inputArrayClone.length > 0) {
    arrayOfArrays.push(inputArrayClone.splice(0, maxChunkSize));
  }

  return arrayOfArrays;
}
