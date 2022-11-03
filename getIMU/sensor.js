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

    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", (event) => {
            const rotateDegrees = event.alpha; // alpha: rotation around z-axis
            const leftToRight = event.gamma; // gamma: left to right
            const frontToBack = event.beta; // beta: front back motion

            handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
            document.write(rotateDegrees)
        }, true);
    }

    const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
        // do something amazing
        document.write("It is moving around!!")
    };
}
