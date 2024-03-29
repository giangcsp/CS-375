/*
 *
 * Stats actions
 *
 */

import { LOAD_STATS, LOAD_STATS_SUCCESS, LOAD_STATS_ERROR } from "./constants";

export function loadStats() {
  return {
    type: LOAD_STATS
  };
}

export function statsLoaded(stats) {
  return {
    type: LOAD_STATS_SUCCESS,
    stats
  };
}

export function statsError(error) {
  return {
    type: LOAD_STATS_ERROR,
    error
  };
}
