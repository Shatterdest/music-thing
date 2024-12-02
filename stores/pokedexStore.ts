import { defineStore } from 'pinia';

export const usePokedexStore = defineStore('pokedex', {
  state: () => ({
    showPokedex: false,
  }),
  actions: {
    togglePokedex() {
      this.showPokedex = !this.showPokedex;
    },
  },
});
