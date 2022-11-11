function startSensors() {
    if('Gyroscope' in window) {
        let gyro = new Gyroscope({ frequency: 200 });
        gyro.addEventListener("reading", () => {
            var gyroX = gyro.x;
            var gyroY = gyro.y;
            var gyroZ = gyro.z;
            var gyroXStr = 'X-Pitch(rad/s): ' + gyroX;
            var gyroYStr = 'Y-Roll(rad/s): ' + gyroY;
            var gyroZStr = 'Z-Yaw(rad/s): ' + gyroZ;
            document.getElementById("gyro_x_result").innerHTML = gyroXStr;
            document.getElementById("gyro_y_result").innerHTML = gyroYStr;
            document.getElementById("gyro_z_result").innerHTML = gyroZStr;
        });
        gyro.start();
    } else {
        alert("Your browser doesn't support Gyroscope sensor!");
    }

    if('Accelerometer' in window) {
        let accel = new Accelerometer({ frequency: 1  });
        accel.addEventListener("reading", () => {
            let accX  = accel.x;
            let accY  = accel.y;
            let accZ  = accel.z;
            //let accTS = accel.timestamp;
            let accTS = performance.now();
            var accXStr  = 'Acc X(m/s^2): ' + accX;
            var accYStr  = 'Acc Y(m/s^2): ' + accY;
            var accZStr  = 'Acc Z(m/s^2): ' + accZ;
            var accTSStr = 'timestamp: '    + accTS;
            //document.getElementById("acc_x_result").innerHTML  = accXStr;
            //document.getElementById("acc_y_result").innerHTML  = accYStr;
            //document.getElementById("acc_z_result").innerHTML  = accZStr;
            //document.getElementById("acc_timestamp").innerHTML = accTSStr;
            document.write (accTSStr + '<br>');
        });
        accel.start();
    } else {
        alert("Your browser doesn't support Accelerometer sensor!");
    }
}
