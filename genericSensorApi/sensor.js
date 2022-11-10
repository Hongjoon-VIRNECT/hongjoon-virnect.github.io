function checkSensors(){
    let accelerometer = new Accelerometer({ frequency: 200 });
    //let accelerometer = new LinearAccelerationSensor({ frequency: 1 });
    accelerometer.onerror = (event) => {
    // Handle runtime errors.
      if (event.error.name === 'NotAllowedError') {
          alert("Permission to access sensor was denied.");
          //console.log('Permission to access sensor was denied.');
      } else if (event.error.name === 'NotReadableError') {
            alert('Cannot connect to the sensor.');
            //console.log('Cannot connect to the sensor.');
      }
    };
    accelerometer.addEventListener("reading", () => {
        let accX = accelerometer.x;
        let accY = accelerometer.y;
        let accZ = accelerometer.z;
        let accInt = accelerometer.interval;
        var accXStr = 'X(m/s^2): ' + accX;
        var accYStr = 'Y(m/s^2): ' + accY;
        var accZStr = 'Z(m/s^2): ' + accZ;
        var accIntervalStr = 'Acc Interval(ms): ' + accInt;
        document.getElementById("acc_x_result").innerHTML = accXStr;
        document.getElementById("acc_y_result").innerHTML = accYStr;
        document.getElementById("acc_z_result").innerHTML = accZStr;
        document.getElementById("acc_interval_result").innerHTML = accIntervalStr;
    });
    accelerometer.start();
}
