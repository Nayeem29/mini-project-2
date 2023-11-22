'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.dentist_appointmentAppointmentIdDELETE = function dentist_appointmentAppointmentIdDELETE (req, res, next, appointmentId) {
  Default.dentist_appointmentAppointmentIdDELETE(appointmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dentist_appointmentAppointmentIdGET = function dentist_appointmentAppointmentIdGET (req, res, next, appointmentId) {
  Default.dentist_appointmentAppointmentIdGET(appointmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dentist_appointmentAppointmentIdPUT = function dentist_appointmentAppointmentIdPUT (req, res, next, body, appointmentId) {
  Default.dentist_appointmentAppointmentIdPUT(body, appointmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dentist_appointmentDELETE = function dentist_appointmentDELETE (req, res, next) {
  Default.dentist_appointmentDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dentist_appointmentGET = function dentist_appointmentGET (req, res, next) {
  Default.dentist_appointmentGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dentist_appointmentPOST = function dentist_appointmentPOST (req, res, next, body) {
  Default.dentist_appointmentPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dentist_appointmentPUT = function dentist_appointmentPUT (req, res, next, body) {
  Default.dentist_appointmentPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dentist_appointmentSearchGET = function dentist_appointmentSearchGET (req, res, next, id, dentist, patient, startDate, endDate) {
  Default.dentist_appointmentSearchGET(id, dentist, patient, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
