'use strict';


/**
 * Delete an appointment by ID
 *
 * appointmentId Integer 
 * no response value expected for this operation
 **/
exports.dentist_appointmentAppointmentIdDELETE = function(appointmentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get an appointment by ID
 *
 * appointmentId Integer 
 * returns DentistAppointment
 **/
exports.dentist_appointmentAppointmentIdGET = function(appointmentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2023-11-20T00:00:00.000+00:00",
  "patient" : {
    "dob" : "1992-03-25T00:00:00.000+00:00",
    "name" : "Pial",
    "id" : 1
  },
  "id" : 101,
  "time" : "10:00 AM",
  "dentist" : {
    "specialty" : "specialty",
    "name" : "Dr. Tamim",
    "id" : 1
  },
  "status" : "Scheduled"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an appointment by ID
 *
 * body DentistAppointmentInput 
 * appointmentId Integer 
 * no response value expected for this operation
 **/
exports.dentist_appointmentAppointmentIdPUT = function(body,appointmentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete all appointments
 *
 * no response value expected for this operation
 **/
exports.dentist_appointmentDELETE = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all dentist appointment
 *
 * returns List
 **/
exports.dentist_appointmentGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ [ {
  "id" : 101,
  "dentist" : {
    "id" : 1,
    "name" : "Dr. Tamim"
  },
  "patient" : {
    "id" : 1,
    "name" : "Pial",
    "dob" : "1990-05-20"
  },
  "date" : "2023-12-05",
  "time" : "6:00 PM",
  "status" : "Scheduled"
}, {
  "id" : 102,
  "dentist" : {
    "id" : 2,
    "name" : "Dr. Saif"
  },
  "patient" : {
    "id" : 2,
    "name" : "Iqbal",
    "dob" : "1994-05-21"
  },
  "date" : "2023-11-21",
  "time" : "05:30 PM",
  "status" : "Completed"
}, {
  "id" : 103,
  "dentist" : {
    "id" : 3,
    "name" : "Dr. Jamal"
  },
  "patient" : {
    "id" : 3,
    "name" : "Mozahid",
    "dob" : "1993-03-18"
  },
  "date" : "2023-11-25",
  "time" : "8:30 AM",
  "status" : "Canceled"
}, {
  "id" : 104,
  "dentist" : {
    "id" : 4,
    "name" : "Dr. Miraz"
  },
  "patient" : {
    "id" : 4,
    "name" : "Binod kc",
    "dob" : "1995-12-05"
  },
  "date" : "2023-11-21",
  "time" : "03:00 PM",
  "status" : "Scheduled"
}, {
  "id" : 105,
  "dentist" : {
    "id" : 5,
    "name" : "Dr. Sakib"
  },
  "patient" : {
    "id" : 5,
    "name" : "Niruj Khadka",
    "dob" : "1988-06-15"
  },
  "date" : "2023-12-03",
  "time" : "09:00 AM",
  "status" : "Pending"
}, {
  "id" : 106,
  "dentist" : {
    "id" : 6,
    "name" : "Dr. Riad"
  },
  "patient" : {
    "id" : 6,
    "name" : "Ahmed Uddin",
    "dob" : "1989-07-13"
  },
  "date" : "2023-12-02",
  "time" : "1:30 PM",
  "status" : "Scheduled"
}, {
  "id" : 107,
  "dentist" : {
    "id" : 7,
    "name" : "Dr. Mushfiq"
  },
  "patient" : {
    "id" : 7,
    "name" : "Nahid Kamal",
    "dob" : "1991-03-10"
  },
  "date" : "2023-11-24",
  "time" : "12:30 AM",
  "status" : "Scheduled"
}, {
  "id" : 108,
  "dentist" : {
    "id" : 8,
    "name" : "Dr. Liton"
  },
  "patient" : {
    "id" : 8,
    "name" : "Monjur Himu",
    "dob" : "1985-10-20"
  },
  "date" : "2023-11-25",
  "time" : "04:15 PM",
  "status" : "Scheduled"
}, {
  "id" : 109,
  "dentist" : {
    "id" : 9,
    "name" : "Dr. Shanto"
  },
  "patient" : {
    "id" : 9,
    "name" : "Ibrahim Kardi",
    "dob" : "1987-04-11"
  },
  "date" : "2023-11-26",
  "time" : "11:00 AM",
  "status" : "Pending"
}, {
  "id" : 110,
  "dentist" : {
    "id" : 10,
    "name" : "Dr. Hridoy"
  },
  "patient" : {
    "id" : 10,
    "name" : "Shuvro Sarkar",
    "dob" : "1988-03-11"
  },
  "date" : "2023-11-27",
  "time" : "02:00 PM",
  "status" : "Pending"
} ], [ {
  "id" : 101,
  "dentist" : {
    "id" : 1,
    "name" : "Dr. Tamim"
  },
  "patient" : {
    "id" : 1,
    "name" : "Pial",
    "dob" : "1990-05-20"
  },
  "date" : "2023-12-05",
  "time" : "6:00 PM",
  "status" : "Scheduled"
}, {
  "id" : 102,
  "dentist" : {
    "id" : 2,
    "name" : "Dr. Saif"
  },
  "patient" : {
    "id" : 2,
    "name" : "Iqbal",
    "dob" : "1994-05-21"
  },
  "date" : "2023-11-21",
  "time" : "05:30 PM",
  "status" : "Completed"
}, {
  "id" : 103,
  "dentist" : {
    "id" : 3,
    "name" : "Dr. Jamal"
  },
  "patient" : {
    "id" : 3,
    "name" : "Mozahid",
    "dob" : "1993-03-18"
  },
  "date" : "2023-11-25",
  "time" : "8:30 AM",
  "status" : "Canceled"
}, {
  "id" : 104,
  "dentist" : {
    "id" : 4,
    "name" : "Dr. Miraz"
  },
  "patient" : {
    "id" : 4,
    "name" : "Binod kc",
    "dob" : "1995-12-05"
  },
  "date" : "2023-11-21",
  "time" : "03:00 PM",
  "status" : "Scheduled"
}, {
  "id" : 105,
  "dentist" : {
    "id" : 5,
    "name" : "Dr. Sakib"
  },
  "patient" : {
    "id" : 5,
    "name" : "Niruj Khadka",
    "dob" : "1988-06-15"
  },
  "date" : "2023-12-03",
  "time" : "09:00 AM",
  "status" : "Pending"
}, {
  "id" : 106,
  "dentist" : {
    "id" : 6,
    "name" : "Dr. Riad"
  },
  "patient" : {
    "id" : 6,
    "name" : "Ahmed Uddin",
    "dob" : "1989-07-13"
  },
  "date" : "2023-12-02",
  "time" : "1:30 PM",
  "status" : "Scheduled"
}, {
  "id" : 107,
  "dentist" : {
    "id" : 7,
    "name" : "Dr. Mushfiq"
  },
  "patient" : {
    "id" : 7,
    "name" : "Nahid Kamal",
    "dob" : "1991-03-10"
  },
  "date" : "2023-11-24",
  "time" : "12:30 AM",
  "status" : "Scheduled"
}, {
  "id" : 108,
  "dentist" : {
    "id" : 8,
    "name" : "Dr. Liton"
  },
  "patient" : {
    "id" : 8,
    "name" : "Monjur Himu",
    "dob" : "1985-10-20"
  },
  "date" : "2023-11-25",
  "time" : "04:15 PM",
  "status" : "Scheduled"
}, {
  "id" : 109,
  "dentist" : {
    "id" : 9,
    "name" : "Dr. Shanto"
  },
  "patient" : {
    "id" : 9,
    "name" : "Ibrahim Kardi",
    "dob" : "1987-04-11"
  },
  "date" : "2023-11-26",
  "time" : "11:00 AM",
  "status" : "Pending"
}, {
  "id" : 110,
  "dentist" : {
    "id" : 10,
    "name" : "Dr. Hridoy"
  },
  "patient" : {
    "id" : 10,
    "name" : "Shuvro Sarkar",
    "dob" : "1988-03-11"
  },
  "date" : "2023-11-27",
  "time" : "02:00 PM",
  "status" : "Pending"
} ] ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new appointment
 *
 * body DentistAppointmentInput 
 * no response value expected for this operation
 **/
exports.dentist_appointmentPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update all appointments
 *
 * body List 
 * no response value expected for this operation
 **/
exports.dentist_appointmentPUT = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Search an appointment
 *
 * id String appointment provided by the id (optional)
 * dentist String dentist name (optional)
 * patient String Patient name (optional)
 * startDate date Start date of the time period (optional)
 * endDate date End date of the time period (optional)
 * returns List
 **/
exports.dentist_appointmentSearchGET = function(id,dentist,patient,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2023-11-20T00:00:00.000+00:00",
  "patient" : {
    "dob" : "1992-03-25T00:00:00.000+00:00",
    "name" : "Pial",
    "id" : 1
  },
  "id" : 101,
  "time" : "10:00 AM",
  "dentist" : {
    "specialty" : "specialty",
    "name" : "Dr. Tamim",
    "id" : 1
  },
  "status" : "Scheduled"
}, {
  "date" : "2023-11-20T00:00:00.000+00:00",
  "patient" : {
    "dob" : "1992-03-25T00:00:00.000+00:00",
    "name" : "Pial",
    "id" : 1
  },
  "id" : 101,
  "time" : "10:00 AM",
  "dentist" : {
    "specialty" : "specialty",
    "name" : "Dr. Tamim",
    "id" : 1
  },
  "status" : "Scheduled"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

