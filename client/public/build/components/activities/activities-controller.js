define(["app"],function(a){"use strict";function b(a,b,c){a.activeTab="default",a.currentActivityItems=[],a.template_url="app/components/activities/tabs/tab-"+a.activeTab+".html",c.get(function(b){a.activities=b.activities}),a.isActive=function(b){return a.activeTab===b},a.setTab=function(b){a.activeTab=b,a.template_url="app/components/activities/tabs/tab-"+b+".html",c.getbytype(b,function(b){a.currentActivityItems=b.data})}}return b.$inject=["$scope","$log","activityService"],a.controller("ActivitiesCtrl",b)});