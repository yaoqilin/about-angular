angular.module('app',[])
.controller('MyCtrl',function($scope){
    $scope.message='';
    $scope.user={name:'',password:''};
    $scope.errormessage='';
    $scope.reverse = function(){
        return $scope.message.split('').reverse().join('');
    }
    $scope.login=function(){
        // console.log($scope.user);
        if($scope.user.name == 'admin'&&$scope.user.password == '123'){
            alert('登录成功');
        }else{
            $scope.errormessage = '用户名或者密码错误'
        }
    }
})