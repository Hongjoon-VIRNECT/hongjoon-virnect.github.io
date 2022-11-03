function checkSensors(){
    document.write("This is sensor information available on your device.\n");

    if ('Accelerometer' in window) {
        // The `Accelerometer` interface is supported by the browser.
        // Does the device have an accelerometer, though?
        document.write("Yes, Acc sensor is available.");
    }
    else {
        document.write("No, Acc sensor is not available.");
    }

    if ('Gyroscope' in window) {
        document.write("Yes, Gyro sensor is avaialble.\n");
    }
    else {
        document.write("No, Gyro sensor is not available.\n");
    }
}
