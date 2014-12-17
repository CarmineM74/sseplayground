angular.module("google-maps.extensions".ns()).service('ExtendGWin'.ns(), function() {
  return {
    init: _.once(function() {
      if (!(google || (typeof google !== "undefined" && google !== null ? google.maps : void 0) || (google.maps.InfoWindow != null))) {
        return;
      }
      google.maps.InfoWindow.prototype._open = google.maps.InfoWindow.prototype.open;
      google.maps.InfoWindow.prototype._close = google.maps.InfoWindow.prototype.close;
      google.maps.InfoWindow.prototype._isOpen = false;
      google.maps.InfoWindow.prototype.open = function(map, anchor, recurse) {
        if (recurse != null) {
          return;
        }
        this._isOpen = true;
        this._open(map, anchor, true);
      };
      google.maps.InfoWindow.prototype.close = function(recurse) {
        if (recurse != null) {
          return;
        }
        this._isOpen = false;
        this._close(true);
      };
      google.maps.InfoWindow.prototype.isOpen = function(val) {
        if (val == null) {
          val = void 0;
        }
        if (val == null) {
          return this._isOpen;
        } else {
          return this._isOpen = val;
        }
      };

      /*
      Do the same for InfoBox
      TODO: Clean this up so the logic is defined once, wait until develop becomes master as this will be easier
       */
      if (window.InfoBox) {
        window.InfoBox.prototype._open = window.InfoBox.prototype.open;
        window.InfoBox.prototype._close = window.InfoBox.prototype.close;
        window.InfoBox.prototype._isOpen = false;
        window.InfoBox.prototype.open = function(map, anchor) {
          this._isOpen = true;
          this._open(map, anchor);
        };
        window.InfoBox.prototype.close = function() {
          this._isOpen = false;
          this._close();
        };
        window.InfoBox.prototype.isOpen = function(val) {
          if (val == null) {
            val = void 0;
          }
          if (val == null) {
            return this._isOpen;
          } else {
            return this._isOpen = val;
          }
        };
      }
      if (window.MarkerLabel_) {
        window.MarkerLabel_.prototype.setContent = function() {
          var content;
          content = this.marker_.get("labelContent");
          if (!content || _.isEqual(this.oldContent, content)) {
            return;
          }
          if (typeof (content != null ? content.nodeType : void 0) === "undefined") {
            this.labelDiv_.innerHTML = content;
            this.eventDiv_.innerHTML = this.labelDiv_.innerHTML;
            this.oldContent = content;
          } else {
            this.labelDiv_.innerHTML = "";
            this.labelDiv_.appendChild(content);
            content = content.cloneNode(true);
            this.eventDiv_.appendChild(content);
            this.oldContent = content;
          }
        };

        /*
        Removes the DIV for the label from the DOM. It also removes all event handlers.
        This method is called automatically when the marker's <code>setMap(null)</code>
        method is called.
        @private
         */
        return window.MarkerLabel_.prototype.onRemove = function() {
          if (this.labelDiv_.parentNode != null) {
            this.labelDiv_.parentNode.removeChild(this.labelDiv_);
          }
          if (this.eventDiv_.parentNode != null) {
            this.eventDiv_.parentNode.removeChild(this.eventDiv_);
          }
          if (!this.listeners_) {
            return;
          }
          if (!this.listeners_.length) {
            return;
          }
          this.listeners_.forEach(function(l) {
            return google.maps.event.removeListener(l);
          });
        };
      }
    })
  };
});
