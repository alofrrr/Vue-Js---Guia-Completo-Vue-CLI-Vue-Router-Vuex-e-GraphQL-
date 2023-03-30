new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    logs: [],
  },
  computed: {
    hasResult() {
      return this.playerHealth == 0 || this.monsterHealth == 0;
    },
  },
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
        this.logs = [];
    },
    attack(special) {
      this.hurt(
        "monsterHealth",
        5,
        10,
        special,
        "Jogador",
        "Monstro",
        "player"
      );
      if (this.monsterHealth > 0) {
        this.hurt(
          "playerHealth",
          7,
          12,
          false,
          "Monstro",
          "Jogador",
          "monster"
        );
      }
    },
    hurt(prop, min, max, special, source, target, cls) {
      const plus = special ? 5 : 0;
      const hurt = this.getRandom(min + plus, max + plus);
      this[prop] = Math.max(this[prop] - hurt, 0);
        this.registerLog(
            `${source} atingiu ${target} com ${hurt}.`,
            cls
        );
    },
    healAndHurt() {
      this.heal(10, 15);
      this.hurt("playerHealth", 7, 12, false, "Monstro", "Jogador", "monster");
    },
    heal(min, max) {
      const heal = this.getRandom(min, max);
      this.playerHealth = Math.min(this.playerHealth + heal, 100);
        this.registerLog(
            `Jogador ganhou força de ${heal}.`,
            'player'
        );
    },
    getRandom(min, max) {
      return Math.round(Math.floor(Math.random() * (max - min)) + min);
    },
    registerLog(text, cls) {
      this.logs.unshift({ text, cls });
    },
  },
  watch: {
    hasResult(value) {
      if (value) this.gameIsRunning = false;
    },
  },
});
