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
function($scope){

	$scope.test = "party!";



}]);

