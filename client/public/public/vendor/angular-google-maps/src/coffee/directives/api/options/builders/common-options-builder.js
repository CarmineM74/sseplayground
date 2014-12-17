var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("google-maps.directives.api.options.builders".ns()).service("CommonOptionsBuilder".ns(), [
  "BaseObject".ns(), "Logger".ns(), function(BaseObject, $log) {
    var CommonOptionsBuilder;
    return CommonOptionsBuilder = (function(_super) {
      __extends(CommonOptionsBuilder, _super);

      function CommonOptionsBuilder() {
        this.watchProps = __bind(this.watchProps, this);
        this.buildOpts = __bind(this.buildOpts, this);
        return CommonOptionsBuilder.__super__.constructor.apply(this, arguments);
      }

      CommonOptionsBuilder.prototype.props = [
        'clickable', 'draggable', 'editable', 'visible', {
          prop: 'stroke',
          isColl: true
        }
      ];

      CommonOptionsBuilder.prototype.buildOpts = function(customOpts, forEachOpts) {
        var hasModel, model, opts, _ref, _ref1, _ref2;
        if (customOpts == null) {
          customOpts = {};
        }
        if (forEachOpts == null) {
          forEachOpts = {};
        }
        if (!this.scope) {
          $log.error("this.scope not defined in CommonOptionsBuilder can not buildOpts");
          return;
        }
        if (!this.map) {
          $log.error("this.map not defined in CommonOptionsBuilder can not buildOpts");
          return;
        }
        hasModel = _(this.scope).chain().keys().contains('model').value();
        model = hasModel ? this.scope.model : this.scope;
        opts = angular.extend(customOpts, this.DEFAULTS, {
          map: this.map,
          strokeColor: (_ref = model.stroke) != null ? _ref.color : void 0,
          strokeOpacity: (_ref1 = model.stroke) != null ? _ref1.opacity : void 0,
          strokeWeight: (_ref2 = model.stroke) != null ? _ref2.weight : void 0
        });
        angular.forEach(angular.extend(forEachOpts, {
          clickable: true,
          draggable: false,
          editable: false,
          "static": false,
          fit: false,
          visible: true,
          zIndex: 0
        }), (function(_this) {
          return function(defaultValue, key) {
            if (angular.isUndefined(model[key] || model[key] === null)) {
              return opts[key] = defaultValue;
            } else {
              return opts[key] = model[key];
            }
          };
        })(this));
        if (opts["static"]) {
          opts.editable = false;
        }
        return opts;
      };

      CommonOptionsBuilder.prototype.watchProps = function(props) {
        if (props == null) {
          props = this.props;
        }
        return props.forEach((function(_this) {
          return function(prop) {
            if ((_this.attrs[prop] != null) || (_this.attrs[prop != null ? prop.prop : void 0] != null)) {
              if (prop != null ? prop.isColl : void 0) {
                return _this.scope.$watchCollection(prop.prop, _this.setMyOptions);
              } else {
                return _this.scope.$watch(prop, _this.setMyOptions);
              }
            }
          };
        })(this));
      };

      return CommonOptionsBuilder;

    })(BaseObject);
  }
]);
