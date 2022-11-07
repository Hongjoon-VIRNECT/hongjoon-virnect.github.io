function checkSensors(){
    let accelerometer = null;
    try {
        accelerometer = new Accelerometer({ frequency: 10 });
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
        accelerometer.onreading = (e) => {
            //console.log(e);
            document.write(e);
        };
        accelerometer.start();
    } catch (error) {
        // Handle construction errors.
        if (error.name === 'SecurityError') {
            alert('Sensor construction was blocked by the Permissions Policy.');
            //console.log('Sensor construction was blocked by the Permissions Policy.');
        } else if (error.name === 'ReferenceError') {
            alert('Sensor is not supported by the User Agent.');
            //console.log('Sensor is not supported by the User Agent.');
        } else {
            throw error;
        }
    }
}
