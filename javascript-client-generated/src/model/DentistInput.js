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
import {ApiClient} from '../ApiClient';

/**
 * The DentistInput model module.
 * @module model/DentistInput
 * @version 1.0.0
 */
export class DentistInput {
  /**
   * Constructs a new <code>DentistInput</code>.
   * @alias module:model/DentistInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DentistInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DentistInput} obj Optional instance to populate.
   * @return {module:model/DentistInput} The populated <code>DentistInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DentistInput();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('specialty'))
        obj.specialty = ApiClient.convertToType(data['specialty'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
DentistInput.prototype.name = undefined;

/**
 * @member {String} specialty
 */
DentistInput.prototype.specialty = undefined;

