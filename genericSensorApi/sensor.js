function checkSensors(){
    //let accelerometer = new LinearAccelerationSensor({ frequency: 1 });
    const accelerometer = new Accelerometer({ frequency: 200 });
    const gyroscope = new Gyroscope({ frequency: 200 });
    //accelerometer.onerror = (event) => {
    //// Handle runtime errors.
    //  if (event.error.name === 'NotAllowedError') {
    //      alert("Permission to access sensor was denied.");
    //      //console.log('Permission to access sensor was denied.');
    //  } else if (event.error.name === 'NotReadableError') {
    //        alert('Cannot connect to the sensor.');
    //        //console.log('Cannot connect to the sensor.');
    //  }
    //};
    gyroscope.addEventListener("reading", () => {
        let gyroX = gyroscope.x;
        let gyroY = gyroscope.y;
        let gyroZ = gyroscope.z;
        var gyroXStr = 'gyro X(deg): ' + gyroX;
        var gyroYStr = 'gyro Y(deg): ' + gyroY;
        var gyroZStr = 'gyro Z(deg): ' + gyroZ;
        document.getElementById("gyro_x_result").innerHTML = gyroXStr;
        document.getElementById("gyro_y_result").innerHTML = gyroYStr;
        document.getElementById("gyro_z_result").innerHTML = gyroZStr;
    });
    accelerometer.addEventListener("reading", () => {
        let accX = accelerometer.x;
        let accY = accelerometer.y;
        let accZ = accelerometer.z;
        var accXStr = 'Acc X(m/s^2): ' + accX;
        var accYStr = 'Acc Y(m/s^2): ' + accY;
        var accZStr = 'Acc Z(m/s^2): ' + accZ;
        document.getElementById("acc_x_result").innerHTML = accXStr;
        document.getElementById("acc_y_result").innerHTML = accYStr;
        document.getElementById("acc_z_result").innerHTML = accZStr;
    });
    gyroscope.start();
    accelerometer.start();
}
