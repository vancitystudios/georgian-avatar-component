"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var facialHair_1 = require("./facialHair");
var HatColor_1 = require("./HatColor");
var Turban2 = /** @class */ (function (_super) {
    __extends(Turban2, _super);
    function Turban2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.mask2 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.path2 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    Turban2.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2;
        return (
        
            React.createElement("g", {
              id: "Top",
              strokeWidth: "1",
              fillRule: "evenodd"
            }, React.createElement("defs", null, React.createElement("rect", {
              id: path1,
              x: "0",
              y: "0",
              width: "264",
              height: "280"
            }), React.createElement("path", {
              d: "M77.033294,0 C106.959787,0 149.735358,8.92089622 149.815629,56.0961473 C149.847575,74.3577074 150.493881,100.580277 144.033513,120 C139.7266,132.946482 134.614721,140.613149 128.697876,143 C138.714318,86.6708036 103.431937,71.3862213 78.9668352,57.8957619 C49.6150383,68.6023717 13.6672388,83.1211736 21.3126221,143 C14.7444532,139.946482 9.30691249,131.946482 5,119 C-1.46036874,99.5802769 1.18657342,74.3577074 1.21788361,56.0961473 C1.29815417,8.92089622 44.0737254,0 74.0002187,0 C74.4226472,0 74.859587,0.0217757791 75.3095534,0.0644707921 C75.8816633,0.0221144324 76.4560341,0 77.033294,0 Z",
              id: path2
            })), React.createElement("mask", {
              id: mask1,
              fill: "white"
            }, React.createElement("use", {
              xlinkHref: '#' + path1
            })), React.createElement("g", {
              id: "Mask"
            }), React.createElement("g", {
              id: "Top/Accesories/Turban-2",
              mask: `url(#${mask1})`
            }, React.createElement("g", {
              transform: "translate(-1.000000, 0.000000)"
            }, React.createElement("g", {
              id: "Turban-2",
              transform: "translate(57.000000, 3.000000)"
            }, React.createElement("path", {
              d: "M76,54 C108.5848,54 135,68.7746033 135,87 C135,89.579787 134.470742,92.0904336 133.469644,94.4998241 C127.397224,79.8874705 103.971815,69 76,69 C48.0275463,69 24.6017061,79.8879678 18.5303563,94.5001759 C17.5294049,92.0911291 17,89.5801444 17,87 C17,68.7746033 43.4151998,54 76,54 Z",
              id: "Band",
              fill: "#25557C"
            }), React.createElement("g", null, React.createElement("mask", {
              id: mask2,
              fill: "white"
            }, React.createElement("use", {
              xlinkHref: '#' + path2
            })), React.createElement("use", {
              id: "Turban-Mask",
              fill: "#124C74",
              xlinkHref: '#' + path2
            }), React.createElement("g", {
              id: "Group",
              mask: `url(#${mask2})`
            }, React.createElement("g", {
              transform: "translate(-56.000000, -3.000000)",
              id: "\u21B3-\uD83C\uDFA8Turban-Color"
            }, React.createElement("rect", {
              id: "\uD83D\uDD8DColor",
              fill: "#25557C",
              x: "0",
              y: "0",
              width: "264",
              height: "280"
            })))), React.createElement("path", {
              d: "M120.50869,18.8106399 C120.609395,18.9621797 120.705368,19.1153229 120.796536,19.2700601 C126.68741,29.2684599 110.285183,42.135462 84.1611361,48.0093136 C58.0370894,53.8831652 32.0838685,50.5395581 26.1929947,40.5411583 C26.1744022,40.5096018 26.1560318,40.4780169 26.1378831,40.4464036 C36.7579228,44.9702324 57.7576768,45.1860019 79.3893791,40.3289075 C101.256082,35.419047 117.226963,26.7943225 120.412277,19.052582 Z M112.550167,11.0007505 C112.663041,11.2453105 112.755046,11.4939677 112.82559,11.746617 C114.996921,19.5231013 96.0141158,28.1369469 70.4263078,30.9861796 C44.8384998,33.8354123 22.3352715,29.8410856 20.1639406,22.0646013 C20.0705272,21.730047 20.0162665,21.3939429 20,21.0568147 C28.6594059,24.7970573 47.5299442,26.0459709 68.5129076,23.7558144 C89.1713838,21.5010736 106.010247,16.4562435 112.318815,11.197212 Z",
              id: "Shadow",
              fillOpacity: "0.16",
              fill: "#000000",
              opacity: "0.899999976",
              transform: "translate(70.997383, 30.952805) rotate(-180.000000) translate(-70.997383, -30.952805)"
            })), this.props.children)))
        
        );
    };
    Turban2.optionValue = 'Turban 2';
    return Turban2;
}(React.Component));
exports.default = Turban2;
