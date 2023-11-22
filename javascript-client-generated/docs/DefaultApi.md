# DentistAppointmentApi.DefaultApi

All URIs are relative to *http://localhost:7070*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dentistAppointmentAppointmentIdDelete**](DefaultApi.md#dentistAppointmentAppointmentIdDelete) | **DELETE** /dentist-appointment/{appointmentId} | Delete an appointment by ID
[**dentistAppointmentAppointmentIdGet**](DefaultApi.md#dentistAppointmentAppointmentIdGet) | **GET** /dentist-appointment/{appointmentId} | Get an appointment by ID
[**dentistAppointmentAppointmentIdPut**](DefaultApi.md#dentistAppointmentAppointmentIdPut) | **PUT** /dentist-appointment/{appointmentId} | Update an appointment by ID
[**dentistAppointmentDelete**](DefaultApi.md#dentistAppointmentDelete) | **DELETE** /dentist-appointment | Delete all appointments
[**dentistAppointmentGet**](DefaultApi.md#dentistAppointmentGet) | **GET** /dentist-appointment | Get all dentist appointment
[**dentistAppointmentPost**](DefaultApi.md#dentistAppointmentPost) | **POST** /dentist-appointment | Add a new appointment
[**dentistAppointmentPut**](DefaultApi.md#dentistAppointmentPut) | **PUT** /dentist-appointment | Update all appointments
[**dentistAppointmentSearchGet**](DefaultApi.md#dentistAppointmentSearchGet) | **GET** /dentist-appointment/search | Search an appointment

<a name="dentistAppointmentAppointmentIdDelete"></a>
# **dentistAppointmentAppointmentIdDelete**
> dentistAppointmentAppointmentIdDelete(appointmentId)

Delete an appointment by ID

### Example
```javascript
import {DentistAppointmentApi} from 'dentist_appointment_api';

let apiInstance = new DentistAppointmentApi.DefaultApi();
let appointmentId = 56; // Number | 

apiInstance.dentistAppointmentAppointmentIdDelete(appointmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appointmentId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dentistAppointmentAppointmentIdGet"></a>
# **dentistAppointmentAppointmentIdGet**
> DentistAppointment dentistAppointmentAppointmentIdGet(appointmentId)

Get an appointment by ID

### Example
```javascript
import {DentistAppointmentApi} from 'dentist_appointment_api';

let apiInstance = new DentistAppointmentApi.DefaultApi();
let appointmentId = 56; // Number | 

apiInstance.dentistAppointmentAppointmentIdGet(appointmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appointmentId** | **Number**|  | 

### Return type

[**DentistAppointment**](DentistAppointment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dentistAppointmentAppointmentIdPut"></a>
# **dentistAppointmentAppointmentIdPut**
> dentistAppointmentAppointmentIdPut(body, appointmentId)

Update an appointment by ID

### Example
```javascript
import {DentistAppointmentApi} from 'dentist_appointment_api';

let apiInstance = new DentistAppointmentApi.DefaultApi();
let body = new DentistAppointmentApi.DentistAppointmentInput(); // DentistAppointmentInput | 
let appointmentId = 56; // Number | 

apiInstance.dentistAppointmentAppointmentIdPut(body, appointmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DentistAppointmentInput**](DentistAppointmentInput.md)|  | 
 **appointmentId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="dentistAppointmentDelete"></a>
# **dentistAppointmentDelete**
> dentistAppointmentDelete()

Delete all appointments

### Example
```javascript
import {DentistAppointmentApi} from 'dentist_appointment_api';

let apiInstance = new DentistAppointmentApi.DefaultApi();
apiInstance.dentistAppointmentDelete((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dentistAppointmentGet"></a>
# **dentistAppointmentGet**
> [DentistAppointmentList] dentistAppointmentGet()

Get all dentist appointment

### Example
```javascript
import {DentistAppointmentApi} from 'dentist_appointment_api';

let apiInstance = new DentistAppointmentApi.DefaultApi();
apiInstance.dentistAppointmentGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DentistAppointmentList]**](DentistAppointmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dentistAppointmentPost"></a>
# **dentistAppointmentPost**
> dentistAppointmentPost(body)

Add a new appointment

### Example
```javascript
import {DentistAppointmentApi} from 'dentist_appointment_api';

let apiInstance = new DentistAppointmentApi.DefaultApi();
let body = new DentistAppointmentApi.DentistAppointmentInput(); // DentistAppointmentInput | 

apiInstance.dentistAppointmentPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DentistAppointmentInput**](DentistAppointmentInput.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="dentistAppointmentPut"></a>
# **dentistAppointmentPut**
> dentistAppointmentPut(body)

Update all appointments

### Example
```javascript
import {DentistAppointmentApi} from 'dentist_appointment_api';

let apiInstance = new DentistAppointmentApi.DefaultApi();
let body = [new DentistAppointmentApi.DentistAppointment()]; // [DentistAppointment] | 

apiInstance.dentistAppointmentPut(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[DentistAppointment]**](DentistAppointment.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="dentistAppointmentSearchGet"></a>
# **dentistAppointmentSearchGet**
> [DentistAppointment] dentistAppointmentSearchGet(opts)

Search an appointment

### Example
```javascript
import {DentistAppointmentApi} from 'dentist_appointment_api';

let apiInstance = new DentistAppointmentApi.DefaultApi();
let opts = { 
  'id': "id_example", // String | appointment provided by the id
  'dentist': "dentist_example", // String | dentist name
  'patient': "patient_example", // String | Patient name
  'startDate': new Date("2013-10-20"), // Date | Start date of the time period
  'endDate': new Date("2013-10-20") // Date | End date of the time period
};
apiInstance.dentistAppointmentSearchGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| appointment provided by the id | [optional] 
 **dentist** | **String**| dentist name | [optional] 
 **patient** | **String**| Patient name | [optional] 
 **startDate** | **Date**| Start date of the time period | [optional] 
 **endDate** | **Date**| End date of the time period | [optional] 

### Return type

[**[DentistAppointment]**](DentistAppointment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

