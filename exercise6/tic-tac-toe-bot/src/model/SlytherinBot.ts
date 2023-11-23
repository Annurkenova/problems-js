import Bot from "./Bot";

type Piece = "x" | "o" | "";

class SlytherinBot extends Bot {
  constructor() {
    super("Slytherin Bot", "/public/bot.jpg");
  }

  // Реализуйте логику хода для SlytherinBot
  move(board: Piece[]) {
    // Ваш код для хода SlytherinBot
    // Возможно, вы захотите реализовать более умную логику для SlytherinBot
    // В текущей реализации это просто пример
    const emptyCells = board.reduce((acc, cell, index) => {
      if (cell === "") {
        acc.push(index);
      }
      return acc;
    }, [] as number[]);

    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      return emptyCells[randomIndex];
    } else {
      // Доска полностью заполнена, бот не может сделать ход
      return -1;
    }
  }
}

export default SlytherinBot;