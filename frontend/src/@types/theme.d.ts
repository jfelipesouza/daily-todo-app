import 'styled-components'

import { light } from '../styles/themes'

export type LightTheme = typeof light

declare module 'styled-components' {
  export interface DefaultTheme extends LightTheme {}
}
