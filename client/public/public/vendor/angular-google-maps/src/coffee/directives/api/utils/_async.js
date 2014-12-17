angular.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmap_sync", [
  function() {
    return {
      fakePromise: function() {
        var _cb;
        _cb = void 0;
        return {
          then: function(cb) {
            return _cb = cb;
          },
          resolve: function() {
            return _cb.apply(void 0, arguments);
          }
        };
      }
    };
  }
]).service("uiGmap_async", [
  "$timeout", "uiGmapPromise", function($timeout, uiGmapPromise) {
    var defaultChunkSize, doChunk, each, map, waitOrGo;
    defaultChunkSize = 20;

    /*
    utility to reduce code bloat. The whole point is to check if there is existing synchronous work going on.
    If so we wait on it.
    
    Note: This is fully intended to be mutable (ie existingPiecesObj is getting existingPieces prop slapped on)
     */
    waitOrGo = function(existingPiecesObj, fnPromise) {
      if (!existingPiecesObj.existingPieces) {
        return existingPiecesObj.existingPieces = fnPromise();
      } else {
        return existingPiecesObj.existingPieces = existingPiecesObj.existingPieces.then(function() {
          return fnPromise();
        });
      }
    };

    /*
      Author: Nicholas McCready & jfriend00
      _async handles things asynchronous-like :), to allow the UI to be free'd to do other things
      Code taken from http://stackoverflow.com/questions/10344498/best-way-to-iterate-over-an-array-without-blocking-the-ui
    
      The design of any functionality of _async is to be like lodash/underscore and replicate it but call things
      asynchronously underneath. Each should be sufficient for most things to be derived from.
    
      Optional Asynchronous Chunking via promises.
     */
    doChunk = function(array, chunkSizeOrDontChunk, pauseMilli, chunkCb, pauseCb, overallD, index) {
      var cnt, e, i;
      try {
        if (chunkSizeOrDontChunk && chunkSizeOrDontChunk < array.length) {
          cnt = chunkSizeOrDontChunk;
        } else {
          cnt = array.length;
        }
        i = index;
        while (cnt-- && i < (array ? array.length : i + 1)) {
          chunkCb(array[i], i);
          ++i;
        }
        if (array) {
          if (i < array.length) {
            index = i;
            if (chunkSizeOrDontChunk) {
              if (typeof pauseCb === "function") {
                pauseCb();
              }
              return $timeout(function() {
                return doChunk(array, chunkSizeOrDontChunk, pauseMilli, chunkCb, pauseCb, overallD, index);
              }, pauseMilli, false);
            }
          } else {
            return overallD.resolve();
          }
        }
      } catch (_error) {
        e = _error;
        return overallD.reject("error within chunking iterator: " + e);
      }
    };
    each = function(array, chunk, pauseCb, chunkSizeOrDontChunk, index, pauseMilli) {
      var overallD, ret;
      if (chunkSizeOrDontChunk == null) {
        chunkSizeOrDontChunk = defaultChunkSize;
      }
      if (index == null) {
        index = 0;
      }
      if (pauseMilli == null) {
        pauseMilli = 1;
      }
      ret = void 0;
      overallD = uiGmapPromise.defer();
      ret = overallD.promise;
      if (!pauseMilli) {
        overallD.reject("pause (delay) must be set from _async!");
        return ret;
      }
      if (array === void 0 || (array != null ? array.length : void 0) <= 0) {
        overallD.resolve();
        return ret;
      }
      doChunk(array, chunkSizeOrDontChunk, pauseMilli, chunk, pauseCb, overallD, index);
      return ret;
    };
    map = function(objs, iterator, pauseCb, chunkSizeOrDontChunk, index, pauseMilli) {
      var results;
      results = [];
      if (!((objs != null) && (objs != null ? objs.length : void 0) > 0)) {
        return uiGmapPromise.resolve(results);
      }
      return each(objs, function(o) {
        return results.push(iterator(o));
      }, pauseCb, chunkSizeOrDontChunk, index, pauseMilli).then(function() {
        return results;
      });
    };
    return {
      each: each,
      map: map,
      waitOrGo: waitOrGo,
      defaultChunkSize: defaultChunkSize
    };
  }
]);
