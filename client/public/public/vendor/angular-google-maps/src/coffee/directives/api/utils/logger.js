angular.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapLogger", [
  "$log", function($log) {
    return {
      doLog: false,
      info: function(msg) {
        if (this.doLog) {
          if ($log != null) {
            return $log.info(msg);
          } else {
            return console.info(msg);
          }
        }
      },
      log: function(msg) {
        if (this.doLog) {
          if ($log != null) {
            return $log.log(msg);
          } else {
            return console.log(msg);
          }
        }
      },
      error: function(msg) {
        if (this.doLog) {
          if ($log != null) {
            return $log.error(msg);
          } else {
            return console.error(msg);
          }
        }
      },
      debug: function(msg) {
        if (this.doLog) {
          if ($log != null) {
            return $log.debug(msg);
          } else {
            return console.debug(msg);
          }
        }
      },
      warn: function(msg) {
        if (this.doLog) {
          if ($log != null) {
            return $log.warn(msg);
          } else {
            return console.warn(msg);
          }
        }
      }
    };
  }
]);
