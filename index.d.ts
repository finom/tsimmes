declare module 'balajs' {
  interface Bala {
    (
      element?: string | HTMLElement | HTMLElement[] | Node | Node[] | null, context?: string | HTMLElement
    ): HTMLElement[];
    one: (
      element?: string | HTMLElement | HTMLElement[] | Node | Node[] | null, context?: string | HTMLElement
    ) => HTMLElement | undefined;
  }

  const $: Bala;

  export default $;
}
