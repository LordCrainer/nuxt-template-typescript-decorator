import {
  getAccessorType,
  mutationTree,
  actionTree,
  getterTree,
} from 'typed-vuex'

import * as globals from './modules/globals'

export const accessorType = getAccessorType({
  modules: {
    globals,
  },
})
