class Timer {
  private startTime: number | null;
  private pausedTime: number;
  private isPaused: boolean;

  constructor() {
    this.startTime = null;
    this.pausedTime = 0;
    this.isPaused = false;
  }

  private getCurrentTime(): number {
    return this.isPaused
      ? this.pausedTime
      : this.startTime
      ? this.pausedTime + (Date.now() - this.startTime)
      : 0;
  }

  start(): void {
    if (!this.startTime) {
      this.startTime = Date.now();
      this.isPaused = false;
    }
  }

  pause(): void {
    if (this.startTime && !this.isPaused) {
      this.pausedTime += Date.now() - this.startTime;
      this.startTime = null;
      this.isPaused = true;
    }
  }

  reset(): void {
    this.startTime = null;
    this.pausedTime = 0;
    this.isPaused = false;
  }

  log(): { h: number; m: number; s: number; ms: number } {
    const currentTime = this.getCurrentTime();

    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = currentTime % 1000;

    const timerState = { h: hours, m: minutes, s: seconds, ms: milliseconds };
    console.log(timerState);
    return timerState;
  }
}

export default Timer;
