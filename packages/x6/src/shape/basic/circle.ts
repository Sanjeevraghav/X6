import { createShape } from './util'

export const Circle = createShape('circle', {
  width: 60,
  height: 60,
  attrs: {
    circle: {
      r: 30,
      cx: 30,
      cy: 30,
    },
    text: {
      refX: 0.5,
      refY: 0.5,
    },
  },
})
