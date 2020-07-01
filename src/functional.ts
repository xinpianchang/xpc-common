/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export function once<T extends Function>(this: any, fn: T): T {
  const _this = this
  let didCall = false
  let result: any

  return (function() {
    if (didCall) {
      return result
    }

    didCall = true
    result = fn.apply(_this, arguments)

    return result
  } as any) as T
}

export function debounce<T extends Function>(this: any, fn: T, interval: number): T {
  const _this = this
  let result: any
  let last = 0

  return (function() {
    const now = Date.now()
    if (now - last < interval) {
      return result
    }

    result = fn.apply(_this, arguments)
    last = now

    return result
  } as any) as T
}
