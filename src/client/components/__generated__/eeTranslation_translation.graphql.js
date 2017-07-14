/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule eeTranslation_translation.graphql
 * @generated SignedSource<<8c4baf192091a77fa3d570f1fae595e3>>
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type eeTranslation_translation = {
  id: string;
  lang?: ?string;
  translation?: ?string;
  fuzzy?: ?boolean;
};
*/

/* eslint-disable comma-dangle, quotes */

const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "eeTranslation_translation",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "lang",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "translation",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "fuzzy",
      "storageKey": null
    }
  ],
  "type": "Translation"
};

module.exports = fragment;