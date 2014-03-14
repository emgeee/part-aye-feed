"use strict";

/* JShint config settings */
/* jshint -W097 */
/* global angular, $ */

// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
angular.module('PartyApp', [
'ui.bootstrap',
'ngAnimate'
]);

angular.module('PartyApp').controller('PartyCtrl', [
'$scope',
'$http',
'$interval',
function($scope, $http, $interval){

	$scope.messages = [
	{
		"ToCountry": "US",
		"ToState": "VA",
		"SmsMessageSid": "SM154b23dc63f9ef947c8babaf455b938d",
		"NumMedia": "0",
		"ToCity": "VIENNA",
		"FromZip": "20181",
		"SmsSid": "SM154b23dc63f9ef947c8babaf455b938d",
		"FromState": "VA",
		"SmsStatus": "received",
		"FromCity": "MANASSAS",
		"Body": "keep it going allllll night #smileyface",
		"FromCountry": "US",
		"To": "+17037634332",
		"ToZip": "22182",
		"MessageSid": "SM154b23dc63f9ef947c8babaf455b938d",
		"AccountSid": "AC50cf5db22487012e70e1eb2e4335bcba",
		"From": "+17037919734",
		"ApiVersion": "2010-04-01"
	},
	{
		"ToCountry": "US",
		"ToState": "VA",
		"SmsMessageSid": "SM6d91e0d17216bd4506cbe1d5e4fedf81",
		"NumMedia": "0",
		"ToCity": "VIENNA",
		"FromZip": "20181",
		"SmsSid": "SM6d91e0d17216bd4506cbe1d5e4fedf81",
		"FromState": "VA",
		"SmsStatus": "received",
		"FromCity": "MANASSAS",
		"Body": "WOOOOOOO",
		"FromCountry": "US",
		"To": "+17037634332",
		"ToZip": "22182",
		"MessageSid": "SM6d91e0d17216bd4506cbe1d5e4fedf81",
		"AccountSid": "AC50cf5db22487012e70e1eb2e4335bcba",
		"From": "+17037919734",
		"ApiVersion": "2010-04-01"
	},
	{
		"ToCountry": "US",
		"ToState": "VA",
		"SmsMessageSid": "SM09752a68e4fdcb1ce0a96215499198cf",
		"NumMedia": "0",
		"ToCity": "VIENNA",
		"FromZip": "20181",
		"SmsSid": "SM09752a68e4fdcb1ce0a96215499198cf",
		"FromState": "VA",
		"SmsStatus": "received",
		"FromCity": "MANASSAS",
		"Body": "This is a fun party!",
		"FromCountry": "US",
		"To": "+17037634332",
		"ToZip": "22182",
		"MessageSid": "SM09752a68e4fdcb1ce0a96215499198cf",
		"AccountSid": "AC50cf5db22487012e70e1eb2e4335bcba",
		"From": "+17037919734",
		"ApiVersion": "2010-04-01"
	}
	];

	$interval(function(){
		$http.get('/retrieve_messages').success(function(data){
			$scope.messages = $scope.messages;
		});
	}, 5000);



}]);

