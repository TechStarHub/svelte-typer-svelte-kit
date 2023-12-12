// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export const ssr = true;

import json from "../../data/paras.json";
/** @type {import('./$types').PageServerLoad} */

export async function load() {
  return {
    paras: json,
  };
}
