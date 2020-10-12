declare module 'balajs' {
  interface BalaPure {
    (
      element?: string | HTMLElement | HTMLElement[] | Node | Node[] | null, context?: string
    ): HTMLElement[];
    one: (
      element?: string | HTMLElement | HTMLElement[] | Node | Node[] | null, context?: string
    ) => HTMLElement | undefined;
    // TODO how to define methods?
    fn: { [key: string]: (...args: any[]) => any }
  }

  const $: BalaPure;

  export default $;
}
