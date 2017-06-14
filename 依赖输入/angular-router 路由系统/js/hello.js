/**
 * Created by hama on 2016/2/13.
 */
//angular的指令封装
(function(){
    var app = angular.module('lzyhello',[]);
    app.directive('hello',[function(){
        return {
            restrict:'E',
            replace:true,
            //指令想要嵌套，第一步是设置transclude属性为true
            transclude:true,
            controller:function($scope){
                //这里定义指令当中的数据
                //只能在内部找到$scope
                //$scope.name = 'lzy';
                //如果想让外部的指令访问的到，就必须用this,这样指令和指令之间就可以进行交互了
                this.name = 'lzy';
            },
            template:'<div>hello angular<h1 ng-transclude></h1></div>'
        }


    }])

})();
