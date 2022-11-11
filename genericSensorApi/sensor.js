function startSensors() {
    const accelerometer = new Accelerometer({ frequency: 200 });
    const gyroscope = new Gyroscope({ frequency: 200 });
    gyroscope.addEventListener("reading", () => {
        let gyroX = gyroscope.x;
        let gyroY = gyroscope.y;
        let gyroZ = gyroscope.z;
        var gyroXStr = 'X-Pitch(rad/s): ' + gyroX;
        var gyroYStr = 'Y-Roll(rad/s): ' + gyroY;
        var gyroZStr = 'Z-Yaw(rad/s): ' + gyroZ;
        document.getElementById("gyro_x_result").innerHTML = gyroXStr;
        document.getElementById("gyro_y_result").innerHTML = gyroYStr;
        document.getElementById("gyro_z_result").innerHTML = gyroZStr;
    });
    accelerometer.addEventListener("reading", () => {
        let accX = accelerometer.x;
        let accY = accelerometer.y;
        let accZ = accelerometer.z;
        let accTS = accelerometer.timestamp;
        var accXStr = 'Acc X(m/s^2): ' + accX;
        var accYStr = 'Acc Y(m/s^2): ' + accY;
        var accZStr = 'Acc Z(m/s^2): ' + accZ;
        var accTSStr = 'timestamp: ' + accTS;
        document.getElementById("acc_x_result").innerHTML = accXStr;
        document.getElementById("acc_y_result").innerHTML = accYStr;
        document.getElementById("acc_z_result").innerHTML = accZStr;
        document.getElementById("acc_timestamp").innerHTML = accTSStr;
    });
    gyroscope.start();
    accelerometer.start();
}
