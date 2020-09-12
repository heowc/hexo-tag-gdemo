'use strict';

var _config = _interopRequireDefault(require("./config"));

var _stringBuilder = _interopRequireDefault(require("./string-builder"));

var _content = _interopRequireDefault(require("./content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (hexo) {
  var config = new _config.default(hexo);
  hexo.extend.tag.register('gdemo_terminal', function (args, content) {
    if (!args[0]) {
      console.error('command is empty');
      return;
    }

    var command = args[0];
    var minHeight = args[1] || '0px';
    var windowTitle = args[2] || 'bash';
    var onCompleteDelay = args[3] || 0;
    var promptString = args[4] || '$';
    var id = args[5] || 'demo-terminal';
    var highlightLang = args[6] || 'javascript';
    var commands = command.split(';');
    var sb = new _stringBuilder.default();
    sb.append("\n        new GDemo('#".concat(id, "')\n          .openApp('terminal', {minHeight: '").concat(minHeight, "', windowTitle: '").concat(windowTitle, "', promptString: '").concat(promptString, "'})\n    "));

    for (var i = 0; i < commands.length; i++) {
      var highlightedCode = _content.default.highlight(commands[i], highlightLang);

      sb.append(".command(`".concat(highlightedCode, "`, {onCompleteDelay: ").concat(onCompleteDelay, "})"));
    }

    sb.append("\n        .respond(`".concat(content, "`)\n        .end();\n    "));
    return "<link rel=\"stylesheet\" href=\"".concat(config.getStyleUrl(), "\">\n            <link rel=\"stylesheet\" href=\"").concat(config.getPrismjsThemeStyleUrl(), "\">\n            <script src=\"").concat(config.getScriptUrl(), "\"></script>\n            <div id='").concat(id, "' style='height: ").concat(minHeight, "'></div>\n            <script>").concat(sb.toString(), "</script>");
  }, {
    ends: true
  });
  hexo.extend.tag.register('gdemo_editor', function (args, content) {
    if (!content) {
      console.error('content is empty');
      return;
    }

    var minHeight = args[0] || '0px';
    var windowTitle = args[1] || 'bash';
    var onCompleteDelay = args[2] || 0;
    var id = args[3] || 'demo-editor';
    var highlightLang = args[4] || 'javascript';

    var highlightedCode = _content.default.highlight(content, highlightLang);

    var demo = "\n        new GDemo('#".concat(id, "')\n          .openApp('editor', {minHeight: '").concat(minHeight, "', windowTitle: '").concat(windowTitle, "'})\n          .write(`").concat(highlightedCode, "`, {onCompleteDelay: ").concat(onCompleteDelay, "})\n          .end();\n    ");
    return "<link rel=\"stylesheet\" href=\"".concat(config.getStyleUrl(), "\">\n            <link rel=\"stylesheet\" href=\"").concat(config.getPrismjsThemeStyleUrl(), "\">\n            <script src=\"").concat(config.getScriptUrl(), "\"></script>\n            <div id='").concat(id, "' style='height: ").concat(minHeight, "'></div>\n            <script>").concat(demo, "</script>");
  }, {
    ends: true
  });
};