function startSensors() {
    let accIntNew = 0;
    let accIntOld = 0;
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
        let accel = new Accelerometer({ frequency: 500  });
        accel.addEventListener("reading", () => {
            accIntNew = performance.now() - accIntOld;
            accIntOld = accIntNew;
            let accX  = accel.x;
            let accY  = accel.y;
            let accZ  = accel.z;
            //This accel.timestamp is not correct in Redmi device
            //let accTS = accel.timestamp;
            //let accTS = System.currentTimeMillis() + Math.round((accel.timestamp - System.nanoTime()) / 1000000.0);
            let accTS = System.currentTimeMillis() + (accel.timestamp - System.nanoTime()) / 1000000.0;
            var accXStr   = 'Acc X(m/s^2): ' + accX;
            var accYStr   = 'Acc Y(m/s^2): ' + accY;
            var accZStr   = 'Acc Z(m/s^2): ' + accZ;
            var accTSStr  = 'timestamp: '    + accTS;
            var accIntStr = 'Interal[ms]: '  + accIntNew;
            document.getElementById("acc_x_result").innerHTML  = accXStr;
            document.getElementById("acc_y_result").innerHTML  = accYStr;
            document.getElementById("acc_z_result").innerHTML  = accZStr;
            document.getElementById("acc_timestamp").innerHTML = accTSStr;
            //if (accNew % 1000) < 1) 
            document.getElementById("acc_interval").innerHTML  = accIntStr;
        });
        accel.start();
    } else {
        alert("Your browser doesn't support Accelerometer sensor!");
    }
}
