# DentistAppointmentApi.DentistAppointment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**dentist** | [**Dentist**](Dentist.md) |  | [optional] 
**patient** | [**Patient**](Patient.md) |  | [optional] 
**_date** | **Date** |  | [optional] 
**time** | **String** |  | [optional] 
**status** | **String** | dentist appointment status | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `scheduled` (value: `"Scheduled"`)
* `completed` (value: `"Completed"`)
* `canceled` (value: `"Canceled"`)
* `pending` (value: `"Pending"`)

