interface IGlobalState {
  header: string
  nav: string
}

const initialGlobal: IGlobalState = {
  header: '',
  nav: '',
}

export const state = () => initialGlobal
