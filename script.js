// Set the date we're counting down to
// Month is 0-indexed, so February is 1
const countDownDate = new Date("2037-02-21T00:00:00").getTime();

// Get elements to display the time
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownTimerEl = document.getElementById("countdown-timer");
const countdownMessageEl = document.getElementById("countdown-message");


// Update the count down every 1 second
const countdownFunction = setInterval(() => {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements
    // Use padStart to add leading zeros if needed
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');

    // If the count down is finished, write some text, hide timer, show message
    if (distance < 0) {
        clearInterval(countdownFunction);
        countdownTimerEl.style.display = "none"; // Hide the timer blocks
        countdownMessageEl.style.display = "block"; // Show the completion message
        // Optionally reset numbers to 0 if needed, though they are hidden
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
    }
}, 1000);

// Initial call to display immediately without waiting 1 second (optional but good UX)
// Manually calculate once outside interval
const now = new Date().getTime();
const distance = countDownDate - now;
if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
} else {
    countdownTimerEl.style.display = "none";
    countdownMessageEl.style.display = "block";
}
