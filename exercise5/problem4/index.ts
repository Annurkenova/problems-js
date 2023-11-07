class Timer {
  private startTime: Date | null;
  private pausedTime: number;
  private isPaused: boolean;

  constructor() {
    this.startTime = null;
    this.pausedTime = 0;
    this.isPaused = false;
  }

  start(): void {
    if (!this.startTime) {
      this.startTime = new Date();
      this.isPaused = false;
    } else if (this.isPaused) {
      const pauseEndTime = new Date();
      this.pausedTime += pauseEndTime.getTime() - this.startTime.getTime();
      this.isPaused = false;
    }
  }

  pause(): void {
    if (this.startTime && !this.isPaused) {
      const pauseStartTime = new Date();
      this.isPaused = true;
      this.pausedTime += pauseStartTime.getTime() - this.startTime.getTime();
    }
  }

  reset(): void {
    this.startTime = null;
    this.pausedTime = 0;
    this.isPaused = false;
  }

  log(): { h: number; m: number; s: number; ms: number } {
    if (this.startTime) {
      let currentTime = new Date().getTime();
      if (this.isPaused) {
        currentTime -= this.pausedTime;
      } else {
        currentTime -= this.startTime.getTime();
      }

      const h = Math.floor(currentTime / 3600000);
      currentTime %= 3600000;
      const m = Math.floor(currentTime / 60000);
      currentTime %= 60000;
      const s = Math.floor(currentTime / 1000);
      const ms = currentTime % 1000;

      return { h, m, s, ms };
    }

    return { h: 0, m: 0, s: 0, ms: 0 };
  }
}

export default Timer;
