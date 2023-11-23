import Bot from "./Bot";

type Piece = "x" | "o" | "";

class SlytherinBot extends Bot {
  constructor() {
    super("Slytherin Bot", "/public/bot.jpg");
  }
  move(board: Piece[]) {
    // нужнад ургая логика, бот туповат, проиграл мне на крестиках
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
      return -1;
    }
  }
}

export default SlytherinBot;