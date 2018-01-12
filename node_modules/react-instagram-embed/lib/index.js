'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jsonpP = require('jsonp-p');

var _jsonpP2 = _interopRequireDefault(_jsonpP);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InstagramEmbed = function (_Component) {
  _inherits(InstagramEmbed, _Component);

  function InstagramEmbed() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, InstagramEmbed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = InstagramEmbed.__proto__ || Object.getPrototypeOf(InstagramEmbed)).call.apply(_ref, [this].concat(args))), _this2), _initialiseProps.call(_this2), _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(InstagramEmbed, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      if (window.instgrm || document.getElementById('react-instagram-embed-script')) {
        this.fetchEmbed(this.getQueryParams(this.props));
      } else {
        var protocolToUse = window.location.protocol.indexOf('file') === 0 ? this.props.protocol : '';

        var s = document.createElement('script');
        s.async = s.defer = true;
        s.src = protocolToUse + '//platform.instagram.com/en_US/embeds.js';
        s.id = 'react-instagram-embed-script';
        var body = document.body;
        if (body) {
          body.appendChild(s);
        }
        this.checkAPI().then(function () {
          return _this3.fetchEmbed(_this3.getQueryParams(_this3.props));
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          url = _props.url,
          hideCaption = _props.hideCaption,
          maxWidth = _props.maxWidth,
          containerTagName = _props.containerTagName;

      if (nextProps.url !== url || nextProps.hideCaption !== hideCaption || nextProps.maxWidth !== maxWidth || nextProps.containerTagName !== containerTagName) {
        this.jsonp.cancel();
        this.fetchEmbed(this.getQueryParams(nextProps));
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _props2 = this.props,
          url = _props2.url,
          hideCaption = _props2.hideCaption,
          maxWidth = _props2.maxWidth,
          containerTagName = _props2.containerTagName,
          onLoading = _props2.onLoading,
          onSuccess = _props2.onSuccess,
          onAfterRender = _props2.onAfterRender,
          onFailure = _props2.onFailure;
      var __html = this.state.__html;

      if (nextProps.url !== url || nextProps.hideCaption !== hideCaption || nextProps.maxWidth !== maxWidth || nextProps.containerTagName !== containerTagName || nextProps.onLoading !== onLoading || nextProps.onSuccess !== onSuccess || nextProps.onAfterRender !== onAfterRender || nextProps.onFailure !== onFailure || nextState.__html !== __html) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(this.props.containerTagName, _extends({}, this.omitComponentProps(), { dangerouslySetInnerHTML: { __html: this.state.__html } }));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.cancel();
    }
  }, {
    key: 'omitComponentProps',
    value: function omitComponentProps() {
      // eslint-disable-next-line no-unused-vars
      var _props3 = this.props,
          url = _props3.url,
          hideCaption = _props3.hideCaption,
          maxWidth = _props3.maxWidth,
          containerTagName = _props3.containerTagName,
          onLoading = _props3.onLoading,
          onSuccess = _props3.onSuccess,
          onAfterRender = _props3.onAfterRender,
          onFailure = _props3.onFailure,
          protocol = _props3.protocol,
          rest = _objectWithoutProperties(_props3, ['url', 'hideCaption', 'maxWidth', 'containerTagName', 'onLoading', 'onSuccess', 'onAfterRender', 'onFailure', 'protocol']);

      return rest;
    }
  }, {
    key: 'checkAPI',
    value: function checkAPI() {
      var _this4 = this;

      return new Promise(function (resolve) {
        (function checkAPI(_this) {
          _this._timer = setTimeout(function () {
            if (window.instgrm) {
              clearTimeout(_this._timer);
              resolve();
            } else {
              checkAPI(_this);
            }
          }, 20);
        })(_this4);
      });
    }
  }, {
    key: 'fetchEmbed',
    value: function fetchEmbed(queryParams) {
      this.jsonp = (0, _jsonpP2.default)('https://api.instagram.com/oembed/?' + queryParams);
      this.props.onLoading && this.props.onLoading();
      this.jsonp.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure);
    }
  }, {
    key: 'getQueryParams',
    value: function getQueryParams(_ref2) {
      var url = _ref2.url,
          hideCaption = _ref2.hideCaption,
          maxWidth = _ref2.maxWidth;

      return _queryString2.default.stringify({
        url: url,
        hidecaption: hideCaption,
        maxwidth: typeof maxWidth === 'number' && maxWidth >= 320 ? maxWidth : undefined,
        omitscript: true
      });
    }

    // Public

  }]);

  return InstagramEmbed;
}(_react.Component);

InstagramEmbed.defaultProps = { hideCaption: false, containerTagName: 'div', protocol: 'https:' };

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.state = { __html: null };

  this.handleFetchSuccess = function (response) {
    _this5.props.onSuccess && _this5.props.onSuccess(response);
    _this5.setState({ __html: response.html }, function () {
      window.instgrm.Embeds.process();
      _this5.props.onAfterRender && _this5.props.onAfterRender();
    });
  };

  this.handleFetchFailure = function () {
    var _props4;

    clearTimeout(_this5._timer);
    _this5.props.onFailure && (_props4 = _this5.props).onFailure.apply(_props4, arguments);
  };

  this.cancel = function () {
    if (_this5.jsonp) {
      _this5.jsonp.cancel();
    }
  };
};

exports.default = InstagramEmbed;