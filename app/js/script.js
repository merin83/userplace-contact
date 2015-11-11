var app = angular.module('app', []);

app.run(function(){
Parse.initialize("hWQ3mHFRpX9MboxnPNETTXQPmKzUyQ8qHNJTh9Rf", "92aXyfJFbA6OSC7fy2parCYLIeoIo1IDE2xcBk81");
})

app.controller('customerCtrl', function($scope) {

$scope.post=function(){
var email_info = Parse.Object.extend('Information');

email_info= new email_info();

email_info.set('name',$scope.name);
email_info.set('email',$scope.email);
email_info.set('message',$scope.message);
email_info.set('seen',0);
email_info.set('reply',0);


$scope.name  = '';
$scope.email = '';
$scope.message ='';

email_info.save({success:function(){

	console.log('saved');

}, error:function(error){

console.log(error);

}

});

}



});
