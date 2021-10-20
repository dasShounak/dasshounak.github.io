// Greeting Function
const greet = () => {
    let date = new Date();
    let hrs = date.getHours();

    let message;

    if (hrs < 12) {
        message = "Morning";
    } else if (hrs >= 12 && hrs <= 17) {
        message = "Afternoon";
    } else if (hrs > 17 && hrs < 24) {
        message = "Evening";
    } else {
        message = "Morning";
    }

    document.getElementById("greetings").innerHTML = message;
};

greet();
