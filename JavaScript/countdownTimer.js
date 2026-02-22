function countdownTimer(seconds, onTick, onComplete) {
  let remaining = seconds;
  let timerId;

  function tick() {
    if (remaining <= 0) {
      onComplete();
      return;
    }

    onTick(remaining);
    remaining--;
    timerId = setTimeout(tick, 1000);
  }

  tick();

  return {
    pause() {
      clearTimeout(timerId);
    },
    resume() {
      timerId = setTimeout(tick, 1000);
    }
  }
}