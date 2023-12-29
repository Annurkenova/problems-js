interface TimerState {
  h: number;
  m: number;
  s: number;
  ms: number;
}

interface TimerMethods {
  start(): void;
  pause(): void;
  reset(): void;
  log(): TimerState;
}

class Timer implements TimerMethods {
  private first: number | null;
  private last: number | null;

  constructor() {
    this.first = null;
    this.last = null;
  }

  private getCurrentTime(): number {
    const now = new Date().getTime();
    return this.last ? now - this.last : 0;
  }

  private formatTime(ms: number): TimerState {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = ms % 1000;

    return { h: hours, m: minutes, s: seconds, ms: milliseconds };
  }

  start(): void {
    this.first = this.first || new Date().getTime();
    this.last = null;
  }

  pause(): void {
    this.last = new Date().getTime();
  }

  reset(): void {
    this.first = null;
    this.last = null;
  }

  log(): TimerState {
    const elapsed = this.first ? this.getCurrentTime() : 0;
    const formattedTime = this.formatTime(elapsed);
    console.log(formattedTime);
    return formattedTime;
  }
}

const timer = new Timer();

// use this as a test
timer.start();
setTimeout(() => {
  timer.log(); // should log -> { h: 0, m: 0, s: 1, ms: 234 }
  timer.pause();
  timer.log(); // should log -> { h: 0, m: 0, s: 1, ms: 234 }
  timer.start();

  setTimeout(() => {
    timer.log(); // should log -> { h: 0, m: 0, s: 3, ms: 221 }
    timer.reset();

    setTimeout(() => {
      timer.log(); // should log -> { h: 0, m: 0, s: 1, ms: 0 }
    }, 1000);
  }, 1987);
}, 1234);

export default Timer;

