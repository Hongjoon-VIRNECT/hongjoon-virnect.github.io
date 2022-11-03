function myfunction(){
    document.write("This is var display test");

    if ('Accelerometer' in window) {
        // The `Accelerometer` interface is supported by the browser.
        // Does the device have an accelerometer, though?
        document.write("Yes, acc sensor is available.")
    }
    else {
        document.write("No, acc sensor is not available.")
    }
}
