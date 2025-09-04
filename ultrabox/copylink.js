function copy() {
    navigator.clipboard.writeText(event.target.textContent);
    // thank you so much https://github.com/macedeveloper <3
    // no prob :3  ~macedev

    const textContent = "successfully copied:\n" + event.target.textContent + "\nto clipboard!";
    alert(textContent);
    // alert is bad but man it's the easiest way to do this
    // the old one is cooler but i scrapped it because it interfered with the copy thing
}