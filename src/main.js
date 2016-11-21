/*
 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
 * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
 */

/* eslint-disable no-param-reassign */

import { Interval } from './Interval';

import './_init';

/**
 * plugin Function, call using js-jodas use()
 *
 * @param jsJoda
 */
export default function (jsJoda) {
    jsJoda.Interval = Interval;
}
