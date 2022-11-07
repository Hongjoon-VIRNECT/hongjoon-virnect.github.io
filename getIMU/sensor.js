function checkSensors(){
    //document.write("This is sensor information available on your device"+'<br>');

    //if ('Accelerometer' in window) {
    //    // The `Accelerometer` interface is supported by the browser.
    //    // Does the device have an accelerometer, though?
    //    document.write("Yes, Acc sensor is available."+'<br>');
    //}
    //else {
    //    document.write("No, Acc sensor is not available."+'<br>');
    //}

    //if ('Gyroscope' in window) {
    //    document.write("Yes, Gyro sensor is avaialble."+'<br>');
    //}
    //else {
    //    document.write("No, Gyro sensor is not available."+'<br>');
    //}

    if ((DeviceMotionEvent) || (window.DeviceOrientationEvent)) {
    //if (typeof(DeviceMotionEvent) !== "undefined" && typeof(DeviceMotionEvent.requestPermission) === "function") {
        DeviceMotionEvent.requestPermission()
            .then(response => {
                if (response == "granted") {
                    window.addEventListener("deviceorientation", (orientationEvent) => {
                        const rotateDegrees = orientationEvent.alpha;
                        const leftToRight = orientationEvent.gamma;
                        const frontToBack = orientationEvent.beta;

                        handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
                    }, true);
                    window.addEventListener("devicemotion", (motionEvent) => {
                        //accelerationIncludeGravity seems not be defined on iOS device
                        //const accX = motionEvent.accelerationIncludingGravity.x;
                        //const accY = motionEvent.accelerationIncludingGravity.y;
                        //const accZ = motionEvent.accelerationIncludingGravity.z;
                        const accX = motionEvent.acceleration.x;
                        const accY = motionEvent.acceleration.y;
                        const accZ = motionEvent.acceleration.z;
                        handleMotionEvent(accX, accY, accZ);
                    }, true);
                } else {
                    alert('Device orientation permission not granted');
                }
            }).catch((err) => {console.log(err)});
    } else {
        alert("Device motion permission access method not available");
        //Since requestPermission is not supported chrome android 17, call them directly without permission grant
//               window.addEventListener("deviceorientation", (orientationEvent) => {
//                   const rotateDegrees = orientationEvent.alpha;
//                   const leftToRight = orientationEvent.gamma;
//                   const frontToBack = orientationEvent.beta;
//                   handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
//               }, true);
//               window.addEventListener("devicemotion", (motionEvent) => {
//                   const accX = motionEvent.acceleration.x;
//                   const accY = motionEvent.acceleration.y;
//                   const accZ = motionEvent.acceleration.z;
//                   handleMotionEvent(accX, accY, accZ);
//               }, true);
    }
//    if (window.DeviceOrientationEvent) {
//        window.addEventListener("deviceorientation", (event) => {
//            const rotateDegrees = event.alpha; // alpha: rotation around z-axis
//            const leftToRight = event.gamma; // gamma: left to right
//            const frontToBack = event.beta; // beta: front back motion
//
//            handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
//        }, true);
//    } else {
//        console.log("Sorry, your browser doens't support Device Orientation");
//    }

    const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
        //when event is occured the display current values
        //This way (calling document.write) shows the values without overwriting (it makes many lines)
        //document.write('<p>Alpha: ' + rotateDegrees + '<br>' + 'Beta: ' + frontToBack + '<br>' + 'Gamma: ' + leftToRight + '</p>');
        //So that showing values using document.getElementById
        var alphaValStr = 'Alpha: ' + rotateDegrees;
        var gammaValStr = 'Gamma: ' + leftToRight;
        var betaValStr = 'Beta: ' + frontToBack;
        document.getElementById('rotateDegrees_result').innerHTML = alphaValStr;
        document.getElementById('leftToRight_result').innerHTML = gammaValStr;
        document.getElementById('frontToBack_result').innerHTML = betaValStr;
    };

    const handleMotionEvent = (accX, accY, accZ) => {
        var accXStr = 'X: ' + accX;
        var accYStr = 'Y: ' + accY;
        var accZStr = 'Z: ' + accZ;

        document.getElementById('acc_x_result').innerHTML = accXStr;
        document.getElementById('acc_y_result').innerHTML = accYStr;
        document.getElementById('acc_z_result').innerHTML = accZStr;
    }
}
