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
import {ApiClient} from "../ApiClient";
import {DentistAppointment} from '../model/DentistAppointment';
import {DentistAppointmentInput} from '../model/DentistAppointmentInput';
import {DentistAppointmentList} from '../model/DentistAppointmentList';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.0
*/
export class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the dentistAppointmentAppointmentIdDelete operation.
     * @callback moduleapi/DefaultApi~dentistAppointmentAppointmentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an appointment by ID
     * @param {Number} appointmentId 
     * @param {module:api/DefaultApi~dentistAppointmentAppointmentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    dentistAppointmentAppointmentIdDelete(appointmentId, callback) {
      
      let postBody = null;
      // verify the required parameter 'appointmentId' is set
      if (appointmentId === undefined || appointmentId === null) {
        throw new Error("Missing the required parameter 'appointmentId' when calling dentistAppointmentAppointmentIdDelete");
      }

      let pathParams = {
        'appointmentId': appointmentId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/dentist-appointment/{appointmentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the dentistAppointmentAppointmentIdGet operation.
     * @callback moduleapi/DefaultApi~dentistAppointmentAppointmentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DentistAppointment{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an appointment by ID
     * @param {Number} appointmentId 
     * @param {module:api/DefaultApi~dentistAppointmentAppointmentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    dentistAppointmentAppointmentIdGet(appointmentId, callback) {
      
      let postBody = null;
      // verify the required parameter 'appointmentId' is set
      if (appointmentId === undefined || appointmentId === null) {
        throw new Error("Missing the required parameter 'appointmentId' when calling dentistAppointmentAppointmentIdGet");
      }

      let pathParams = {
        'appointmentId': appointmentId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DentistAppointment;

      return this.apiClient.callApi(
        '/dentist-appointment/{appointmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the dentistAppointmentAppointmentIdPut operation.
     * @callback moduleapi/DefaultApi~dentistAppointmentAppointmentIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an appointment by ID
     * @param {module:model/DentistAppointmentInput} body 
     * @param {Number} appointmentId 
     * @param {module:api/DefaultApi~dentistAppointmentAppointmentIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    dentistAppointmentAppointmentIdPut(body, appointmentId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling dentistAppointmentAppointmentIdPut");
      }
      // verify the required parameter 'appointmentId' is set
      if (appointmentId === undefined || appointmentId === null) {
        throw new Error("Missing the required parameter 'appointmentId' when calling dentistAppointmentAppointmentIdPut");
      }

      let pathParams = {
        'appointmentId': appointmentId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/dentist-appointment/{appointmentId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the dentistAppointmentDelete operation.
     * @callback moduleapi/DefaultApi~dentistAppointmentDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete all appointments
     * @param {module:api/DefaultApi~dentistAppointmentDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    dentistAppointmentDelete(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/dentist-appointment', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the dentistAppointmentGet operation.
     * @callback moduleapi/DefaultApi~dentistAppointmentGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DentistAppointmentList>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all dentist appointment
     * @param {module:api/DefaultApi~dentistAppointmentGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    dentistAppointmentGet(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DentistAppointmentList];

      return this.apiClient.callApi(
        '/dentist-appointment', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the dentistAppointmentPost operation.
     * @callback moduleapi/DefaultApi~dentistAppointmentPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new appointment
     * @param {module:model/DentistAppointmentInput} body 
     * @param {module:api/DefaultApi~dentistAppointmentPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    dentistAppointmentPost(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling dentistAppointmentPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/dentist-appointment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the dentistAppointmentPut operation.
     * @callback moduleapi/DefaultApi~dentistAppointmentPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update all appointments
     * @param {Array.<module:model/DentistAppointment>} body 
     * @param {module:api/DefaultApi~dentistAppointmentPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    dentistAppointmentPut(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling dentistAppointmentPut");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/dentist-appointment', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the dentistAppointmentSearchGet operation.
     * @callback moduleapi/DefaultApi~dentistAppointmentSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DentistAppointment>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search an appointment
     * @param {Object} opts Optional parameters
     * @param {String} opts.id appointment provided by the id
     * @param {String} opts.dentist dentist name
     * @param {String} opts.patient Patient name
     * @param {Date} opts.startDate Start date of the time period
     * @param {Date} opts.endDate End date of the time period
     * @param {module:api/DefaultApi~dentistAppointmentSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    dentistAppointmentSearchGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'id': opts['id'],'dentist': opts['dentist'],'patient': opts['patient'],'startDate': opts['startDate'],'endDate': opts['endDate']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DentistAppointment];

      return this.apiClient.callApi(
        '/dentist-appointment/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}