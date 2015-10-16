
angular.module('th.Profiling').controller('index', ['$scope', 'API_RESOURCES', 'ServerRequest', '$http', '$location','$cookies',   function($scope,  AR, SR,$http,location,$cookies){


    $('.bxslider').bxSlider();

    $scope.loginForm = function(loginData, validity){

        if(validity){

            console.log("check login data",loginData);

             var loginDataobj = {
                email:loginData.username,
                password:loginData.password
            };

            SR.sendPostData(AR.LOGIN, loginDataobj)
                .success(function(data, status, headers, config){

                    if(data.status == 'success'){
						$cookies.put('username',loginDataobj.email);
                        location.path('/home');
                    }

                    else{
                        $scope.Messages = [];
                        $scope.Messages.push (data.ErrorMessage);
                        location.path("/");
                    }
                })
                .error(function(data, status, headers, config){
                    console.log(data);
                });

        }
        else{
            $scope.Messages = [];
            $scope.Messages.push("Please Enter Valid Email and Password..");
        }

    }


//    ======================== Sign Up Service Call===========================

    var sginupDataobj = {
        email:'',
        password:''
    };
    $scope.signupForm = function(data, isValid){

        if(isValid) {
            sginupDataobj.email=data.email;
            sginupDataobj.password=data.password;
        }
console.log("data of signup obj",data);
        SR.sendPostData(AR.REGISTER, sginupDataobj)
            .success(function(data, status, headers, config){
                if(data.status=='success'){

                    $scope.Messages1=[];
                    $scope.Messages1.push(data.SuccessMessage);
                }
                else{
                    $scope.Messages1=[];
                    $scope.Messages1.push(data.ErrorMessage);
                }
            });
    }






}]);