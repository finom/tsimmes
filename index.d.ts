declare module 'tsimmes' {
  interface Tsimmes {
    (
      element?: string | HTMLElement | HTMLElement[] | Node | Node[] | null, context?: string | HTMLElement
    ): HTMLElement[];
    one: (
      element?: string | HTMLElement | HTMLElement[] | Node | Node[] | null, context?: string | HTMLElement
    ) => HTMLElement | undefined;
  }

  const $: Tsimmes;

  export default $;
}
