/*
 * Dentist Appointment API
 * API for managing Dentist Appointment
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.50
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DentistAppointmentApi);
  }
}(this, function(expect, DentistAppointmentApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('DentistAppointment', function() {
      beforeEach(function() {
        instance = new DentistAppointmentApi.DentistAppointment();
      });

      it('should create an instance of DentistAppointment', function() {
        // TODO: update the code to test DentistAppointment
        expect(instance).to.be.a(DentistAppointmentApi.DentistAppointment);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property dentist (base name: "dentist")', function() {
        // TODO: update the code to test the property dentist
        expect(instance).to.have.property('dentist');
        // expect(instance.dentist).to.be(expectedValueLiteral);
      });

      it('should have the property patient (base name: "patient")', function() {
        // TODO: update the code to test the property patient
        expect(instance).to.have.property('patient');
        // expect(instance.patient).to.be(expectedValueLiteral);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property time (base name: "time")', function() {
        // TODO: update the code to test the property time
        expect(instance).to.have.property('time');
        // expect(instance.time).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

    });
  });

}));
