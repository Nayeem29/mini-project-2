# DentistAppointmentApi.DentistAppointmentInput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dentist** | [**DentistInput**](DentistInput.md) |  | [optional] 
**patient** | [**PatientInput**](PatientInput.md) |  | [optional] 
**dob** | **Date** |  | [optional] 
**_date** | **Date** |  | [optional] 
**time** | **String** |  | [optional] 
**status** | **String** | dentist appointment status | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `scheduled` (value: `"Scheduled"`)
* `completed` (value: `"Completed"`)
* `cancele` (value: `"Cancele"`)
* `pending` (value: `"Pending"`)

