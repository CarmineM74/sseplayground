'use strict'
angular.module('saStudyApp.member.home',[])
  .controller 'DashboardController',
    class DashboardController
      constructor: (@$scope,@$window,@$timeout) ->
        console.log('[DashboardController] Initializing ...')
        @dati_pronti = false
        @ultime_entrate = "0"
        @pedane_stoccate = "0"
        @carico = 0
        @$timeout( =>
          @dati_pronti = true
          @ultime_entrate = "10,30,5,90,66,15,22,71"
          @pedane_stoccate = "1300, 1877, 2500, 2577, 2000, 2100, \
                              3000, 2700, 3631, 2471, 2700, 3631, 2471"
          @carico = 18

          # A Dialog/Notification Service can be created to DRY code up
          $.bigBox({
            title : "Statistiche disponibili",
            content : "Sono state recuperate le <b>statistiche aggiornate</b>!",
            color : "#3276B1",
            icon : "fa fa-bell swing animated",
            timeout: 2000
          })
        ,2000)
        @$timeout( =>
          @carico = 77
        ,3500)

      carico_color: (value) ->
        return "green" if value < 33
        return "orange" if (value > 33) && (value < 66)
        return "red"
