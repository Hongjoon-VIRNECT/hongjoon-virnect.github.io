function checkSensors(){
    //let accelerometer = new Accelerometer({ frequency: 60 });
    let accelerometer = new LinearAccelerationSensor({ frequency: 1 });
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
        let x = accelerometer.x;
        let y = accelerometer.y;
        let z = accelerometer.z;
        let interval = accelerometer.interval;
        document.getElementById("acc_x_result").innerHTML = x;
        document.getElementById("acc_y_result").innerHTML = y;
        document.getElementById("acc_z_result").innerHTML = z;
        document.getElementById("acc_interval_result").innerHTML = interval;
    });
    accelerometer.start();
}
