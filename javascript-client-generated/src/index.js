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
import {ApiClient} from './ApiClient';
import {Dentist} from './model/Dentist';
import {DentistAppointment} from './model/DentistAppointment';
import {DentistAppointmentInput} from './model/DentistAppointmentInput';
import {DentistAppointmentList} from './model/DentistAppointmentList';
import {DentistInput} from './model/DentistInput';
import {Patient} from './model/Patient';
import {PatientInput} from './model/PatientInput';
import {DefaultApi} from './api/DefaultApi';

/**
* API_for_managing_Dentist_Appointment.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var DentistAppointmentApi = require('index'); // See note below*.
* var xxxSvc = new DentistAppointmentApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new DentistAppointmentApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new DentistAppointmentApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new DentistAppointmentApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Dentist model constructor.
     * @property {module:model/Dentist}
     */
    Dentist,

    /**
     * The DentistAppointment model constructor.
     * @property {module:model/DentistAppointment}
     */
    DentistAppointment,

    /**
     * The DentistAppointmentInput model constructor.
     * @property {module:model/DentistAppointmentInput}
     */
    DentistAppointmentInput,

    /**
     * The DentistAppointmentList model constructor.
     * @property {module:model/DentistAppointmentList}
     */
    DentistAppointmentList,

    /**
     * The DentistInput model constructor.
     * @property {module:model/DentistInput}
     */
    DentistInput,

    /**
     * The Patient model constructor.
     * @property {module:model/Patient}
     */
    Patient,

    /**
     * The PatientInput model constructor.
     * @property {module:model/PatientInput}
     */
    PatientInput,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};