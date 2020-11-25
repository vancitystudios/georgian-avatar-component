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
var Helmet = /** @class */ (function (_super) {
    __extends(Helmet, _super);
    function Helmet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    Helmet.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, path1 = _a.path1;
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
            })), React.createElement("mask", {
              id: mask1,
              fill: "white"
            }, React.createElement("use", {
              xlinkHref: '#' + path1
            })), React.createElement("g", {
              id: "Mask"
            }), React.createElement("g", {
              id: 'Top/Accesories/Helmet',
              mask: "url(#" + mask1 + ")"
            }, React.createElement("g", {
              transform: "translate(-1.000000, 0.000000)"
            }, React.createElement("g", {
              id: "Helmet",
              strokeWidth: "1",
              fillRule: "evenodd",
              transform: "translate(56.000000, 8.000000)"
            }, React.createElement("path", {
              d: "M129.684664,142.698072 L127.6413,139.308075 C118.723391,150.639438 121.651118,165.999469 128.396118,183.090634 C133.923391,197.089288 128.6483,205.087799 98.9461182,203.333135 L97.1635727,207.060955 C97.1635727,207.060955 131.259936,212.414024 134.4813,196.225402 C137.702664,180.036779 115.5573,161.342215 129.684664,142.698072",
              id: "Right-Strap",
              fill: "#B29A76"
            }), React.createElement("path", {
              d: "M49.8373478,182.692502 C48.2787523,179.421747 42.6499286,168.947113 39.1768247,166.217101 C35.7020339,163.487089 34.1687403,162.476277 34.5735703,152 L30.0327272,156.565908 C30.0327272,156.565908 29.3681313,164.562 34.0287366,166.936996 C38.6893419,169.308704 44.404192,178.470105 45.7198894,182.150115 C47.0322133,185.828482 51.7569167,195.80675 55.5876205,197 L59,192.121809 C59,192.121809 54.3663834,192.212206 49.8373478,182.692502",
              id: "Left-Strap",
              fill: "#B29A76"
            }), React.createElement("path", {
              d: "M77.377498,0.825768421 C18.7770696,0.825768421 1.00050197,42.0552421 1.00050197,88.9689263 C1.00050197,115.422821 11.7293566,141.083453 28.6458757,158.435874 C31.6075214,161.472505 35.5195711,158.174821 36.4465495,154.050189 C42.3547818,127.715874 22.1352747,121.011032 20.376693,106.725558 C19.9065108,102.905768 21.0878226,88.8106105 23.6077314,85.8969263 C26.1293134,82.9832421 29.7602576,81.2653474 33.6137436,81.1710316 L119.173515,79.0522947 C123.569133,78.9428211 127.789059,80.7904 130.682102,84.0965053 C133.575145,87.4026105 134.843465,102.077137 134.140702,106.413979 C131.953769,119.907874 114.322774,125.795874 118.539354,150.626189 C119.260524,154.873768 124.245124,159.864084 127.20175,156.709558 C143.433911,139.407663 153.756167,114.567242 153.756167,88.9689263 C153.756167,42.0552421 135.977926,0.825768421 77.377498,0.825768421",
              id: "Helmet-Body",
              fill: "#D3D3D3"
            }), React.createElement("path", {
              d: "M9.61437341,40.4642294 C3.47690635,54.5611133 1.00050197,71.2957837 1.00050197,88.8236464 C1.00050197,115.331459 11.7293566,141.046079 28.6458757,158.432179 C31.6075214,161.475 35.5195711,158.170595 36.4465495,154.037556 C42.3547818,127.651254 22.1352747,120.932747 20.376693,106.618157 C19.9065108,102.788894 21.0878226,88.6650079 23.6077314,85.7453851 C26.1293134,82.8257623 29.7602576,81.1060539 33.6137436,81.0098582 L119.175188,78.886803 C123.569133,78.7771062 127.789059,80.6284508 130.682102,83.9429821 C133.575145,87.2558258 134.843465,101.958574 134.140702,106.305943 C131.953769,119.825653 114.322774,125.725653 118.539354,150.608265 C119.260524,154.862814 124.245124,159.864989 127.20175,156.702345 C143.433911,139.366874 153.75784,114.474136 153.75784,88.8236464 C153.75784,82.3414087 153.401439,75.9773061 152.665211,69.8055947 C141.001011,34.8359392 34.4235948,20.6783 9.61437341,40.4642294",
              id: "Helmet-Body-Shine",
              fill: "#E4E4E4"
            }), React.createElement("path", {
              d: "M21.8137215,35.1568295 C14.5676522,37.9545316 13.1194739,38.5540391 9.88653254,41.0561856 C3.55528373,55.0816402 0.998964354,71.7335088 0.998964354,89.1763245 C0.998964354,115.552979 12.0682933,141.138686 29.5189273,158.440441 C32.5723567,161.468206 36.6096498,158.18015 37.5658962,154.067562 C37.6539261,153.683004 37.7177909,153.315239 37.7971904,152.937398 C-0.545874163,128.082183 4.42350024,60.337827 21.8137215,35.1568295",
              id: "Left-Shadow",
              fill: "#A4A4A4"
            }), React.createElement("path", {
              d: "M152.683705,70.0754781 C151.563819,63.4682674 146.475242,59.5787143 141.684525,55.6874846 C156.354536,110.45474 141.10711,134.735946 120.193692,153.834993 C122.064052,156.700185 125.235676,158.67011 127.360631,156.400086 C143.501637,139.178754 153.768647,114.449914 153.768647,88.9699883 C153.768647,82.5287542 153.414211,76.2065539 152.683705,70.0754781",
              id: "Right-Shadow",
              fill: "#A4A4A4"
            }), React.createElement("path", {
              d: "M130.967226,28.1983777 C129.386926,21.4581896 117.407178,10.8425624 98.4066696,6.54459388 C82.2060773,2.88210953 64.2624578,3.15759866 63.0797491,7.47246832 C61.9003956,11.7907182 73.9405375,18.8418879 89.9733697,23.2260524 C106.007879,27.6068366 132.050956,32.8157784 130.967226,28.1983777",
              id: "Helmet-Reflection-1",
              fill: "#C1C1C1"
            }), React.createElement("path", {
              d: "M74,1 C70.1539055,1.1199431 66.4878049,1.39699475 63,1.81426158 L63,77 L74,76.7736285 L74,1 Z",
              id: "Left-Stripe",
              fill: "#DADADA"
            }), React.createElement("path", {
              d: "M81,2 L81,77 L92,76.7753738 L92,2.81301267 C88.5104971,2.39728661 84.8460945,2.12404729 81,2",
              id: "Right-Stripe",
              fill: "#DADADA"
            }), React.createElement("path", {
              d: "M142.539312,39.953592 C140.706063,37.0394136 137.860955,35.3704261 136.182461,36.2226422 C134.502266,37.0763994 134.628111,40.130816 136.46136,43.0449945 C138.292908,45.959173 141.138016,47.6297015 142.818211,46.7774854 C144.496706,45.9237282 144.372562,42.8693116 142.539312,39.953592",
              id: "Helmet-Reflection-3",
              fill: "#C1C1C1"
            }), React.createElement("path", {
              d: "M127.336562,31.0762232 C125.406145,30.7066896 123.911561,31.716595 124.004073,33.3301483 C124.092474,34.948292 125.730965,36.5526643 127.663438,36.9244931 C129.593855,37.2917314 131.088439,36.2841213 130.995927,34.6682728 C130.907526,33.0501291 129.26698,31.4434615 127.336562,31.0762232",
              id: "Helmet-Reflection-2",
              fill: "#C1C1C1"
            }), React.createElement("path", {
              d: "M120.83148,148.383703 C116.245345,123.968987 135.414921,118.177489 137.793165,104.908549 C138.558077,100.645662 137.178563,86.2157724 134.033737,82.9631266 C130.88724,79.712137 126.301105,77.8953588 121.519567,78.0046636 L28.5025277,80.0864231 C24.3122098,80.1808227 20.3640586,81.8700786 17.6250705,84.7335331 C14.8844122,87.5986437 13.600094,101.458823 14.109479,105.214933 C16.0217604,119.262256 38.0054804,125.856979 31.5805491,151.752279 C30.9342147,154.354064 28.9484483,156.611374 26.760598,157.113182 C26.9910738,157.350009 27.2081887,157.601741 27.4403347,157.836912 C30.3964377,160.822921 34.301166,157.580212 35.2264095,153.524341 C41.1235846,127.630697 20.9419183,121.037631 19.1866278,106.990308 C18.7173255,103.232542 19.8964265,89.3723624 22.4116193,86.5072518 C24.9284822,83.6421413 28.5526311,81.9545414 32.3989053,81.8601418 L117.800221,79.7767262 C122.187613,79.6690775 126.397972,81.4858557 129.2856,84.7385015 C132.173229,87.9894911 133.439176,102.41938 132.737728,106.683924 C130.554888,119.952863 112.956889,125.742705 117.165578,150.159078 C117.885397,154.33419 122.860669,159.242969 125.811762,156.139376 C126.115723,155.821398 126.402982,155.483547 126.700263,155.158945 C124.03476,154.387187 121.365916,151.217348 120.83148,148.383703",
              id: "Inner-Rim",
              fill: "#8B8B8B"
            }), React.createElement("path", {
              d: "M20.1194786,84.1145922 C22.2218925,88.8695994 40.0775117,83.1312527 81.1821867,83.1312527 C117.272522,83.1312527 133.901457,85.5846516 136.881256,82.0505692 C139.16908,79.3381362 107.972237,58 80.0415857,58 C53.0247394,58 17.682665,78.5923822 20.1194786,84.1145922",
              id: "Visor",
              fill: "#DDDDDD"
            }), React.createElement("path", {
              d: "M80.4374638,59.7652886 C105.290314,59.7652886 132.705757,76.7606026 136.841002,82.4323507 C136.85259,82.4207248 136.869144,82.409099 136.880732,82.3958123 C139.168525,79.6654013 108.11943,57 80.1891505,57 C53.1726638,57 17.6837273,78.9147043 20.1188531,84.4735156 C20.2099013,84.6744765 20.3290917,84.8438816 20.4681471,85 C21.9464389,78.2786049 54.9009243,59.7652886 80.4374638,59.7652886",
              id: "Visor-Top-Rim",
              fill: "#BBBBBB"
            }), React.createElement("path", {
              d: "M135.328718,80.2924285 C132.812394,82.0724786 111.40708,83.3986697 89.1243626,82.6232633 C48.0486737,81.1893768 30.7456309,81.7924707 28.8285888,77.28619 C28.6713185,76.9184874 28.7226383,76.4830905 28.9295729,76 C22.835763,79.6924116 19.2913873,83.0694297 20.1191257,84.8202482 C22.2215811,89.2542191 39.8805515,85.551038 80.9843835,85.551038 C117.075432,85.551038 133.905008,86.1895175 136.883211,82.8955786 C137.270593,82.4678743 136.679587,81.5355404 135.328718,80.2924285",
              id: "Visor-Bottom-Rim",
              fill: "#BBBBBB"
            }), React.createElement("path", {
              d: "M125.988469,77.4364641 C126.20037,75.6796326 123.46637,73.1713601 119.881581,71.8245947 C116.298385,70.484074 113.220246,70.8108779 113.011531,72.5656279 C112.79963,74.3182963 115.53363,76.8286504 119.116826,78.1733342 C122.700022,79.5180181 125.776568,79.187051 125.988469,77.4364641",
              id: "Visor-Reflection-2",
              fill: "#F2F2F2"
            }), React.createElement("path", {
              d: "M114.999839,70.7403417 C115.021796,69.7139506 112.800459,68.5512971 110.03751,68.1425103 C107.276392,67.7337235 105.020289,68.2345316 105.000161,69.2591531 C104.978204,70.2855443 107.201371,71.4481977 109.96066,71.8569845 C112.723608,72.267541 114.979711,71.7631936 114.999839,70.7403417",
              id: "Visor-Reflection-1",
              fill: "#F2F2F2"
            }), React.createElement("path", {
              d: "M90.8415999,7.02206942 L90.8415999,7.00072957 C90.7721012,7.00072957 90.7026024,6.99908804 90.6331037,7.00072957 C88.1874097,7.06310759 85.740061,6.92521933 83.2910575,7.17965601 C81.8961184,7.32411038 80.4962151,7.45214949 79.0996212,7.58839623 C78.0372832,7.69181243 77.0130041,7.95938133 75.957285,8.07757127 C75.265607,8.15472304 74.6814866,8.47974538 74.2231258,9.04771372 C73.5149005,9.92757218 72.7355217,10.7499772 72.0256417,11.6298357 C71.1469789,12.7214511 70.2898277,13.8327649 69.4574975,14.9588524 C68.0542847,16.8613822 66.7884147,18.8525544 65.6350665,20.9077462 C64.897056,22.2209678 64.2649483,23.5916428 63.5898176,24.9376949 C63.5666514,24.9852992 63.5451399,25.0837908 63.5683061,25.1018476 C63.6146386,25.1379612 63.7039942,25.1625841 63.7536361,25.1412443 C64.9334601,24.6684845 66.1728544,24.4370292 67.4188676,24.2449705 C68.330625,24.1037992 69.2539655,24.0266475 70.1739965,23.9314389 C70.2650068,23.9215897 70.3642907,23.9790432 70.4602651,24.0036661 C70.4106232,24.0857424 70.3709096,24.1727434 70.3113393,24.2449705 C68.6400599,26.252558 67.2567039,28.4505627 66.0719157,30.7651157 C65.2031814,32.4640962 64.3873985,34.1975487 63.66759,35.9638317 C62.7210833,38.291517 61.8904078,40.6668065 61.0200188,43.0223977 C60.9769957,43.1373046 61.0167093,43.2834005 61.0167093,43.4147227 C61.1308858,43.3884582 61.2599549,43.3868167 61.3592388,43.3310048 C61.6868758,43.1455122 61.9963107,42.9271892 62.3272571,42.7466212 C64.6240252,41.4941361 67.1177064,40.755449 69.6229707,40.0528754 C69.6808863,40.0364601 69.7520398,40.0660076 69.8165744,40.0758568 C69.8000271,40.1300272 69.7967176,40.1940467 69.7685871,40.238368 C69.6362086,40.4369927 69.5071395,40.6421836 69.3598683,40.8276761 C67.7812539,42.7827348 66.5666806,44.9659657 65.3818925,47.1590457 C64.0167385,49.6820727 62.95771,52.3479125 61.8440753,54.9874879 C61.6041392,55.5488901 61.4072261,56.1299907 61.2053487,56.7061667 C61.1739088,56.7915261 61.2202413,56.9015084 61.228515,57 C61.3013232,56.9326974 61.3989524,56.878527 61.4419754,56.7964507 C62.4811472,54.8085615 63.8810505,53.0685429 65.403404,51.4483557 C66.8132357,49.944717 68.330625,48.5330038 69.87449,47.1639703 C71.6996595,45.5503493 73.5446857,43.9498605 75.4873411,42.4806938 C78.0521758,40.5404089 80.712985,38.721597 83.3506279,36.8748792 C84.4444058,36.1082861 85.5845161,35.407354 86.703115,34.6735915 C86.7643401,34.6341948 86.8007442,34.5554015 86.8487314,34.4963066 C86.7858516,34.4733252 86.7246265,34.4273624 86.6634015,34.4273624 C85.7632272,34.432287 84.856434,34.3813997 83.9645335,34.463476 C82.3660623,34.612855 80.7758648,34.8361027 79.1856673,35.0445766 C78.3070046,35.161125 77.4316513,35.3088624 76.5546433,35.4369015 C76.4586689,35.4500337 76.3544207,35.4188447 76.2551368,35.4089956 C76.2733389,35.3252777 76.2749936,35.2317107 76.3163619,35.161125 C76.4834898,34.8623671 76.6340704,34.5521185 76.840912,34.2812665 C77.7973471,33.0320645 78.7322707,31.7631641 79.7482762,30.5632079 C81.1200491,28.9413792 82.5182976,27.3359659 83.9810808,25.794572 C85.548112,24.1448374 87.1945704,22.570613 88.8228268,20.9783318 C89.3870904,20.4284203 89.9993413,19.926113 90.5851164,19.3958998 C90.6827456,19.3056158 90.7522444,19.1841428 90.834981,19.0758021 C90.7059119,19.0429715 90.5768428,18.9838766 90.4461189,18.982235 C88.3330261,18.9723859 86.221588,18.9691028 84.1101499,18.9641782 C83.8321549,18.9625367 83.5558146,18.9641782 83.2794744,18.9559706 C83.2149398,18.9543291 83.1537148,18.9149324 83.0891802,18.891951 C83.1355127,18.8541959 83.1801905,18.8147993 83.2232135,18.7770442 C85.1112628,17.1289511 87.0919771,15.605614 89.1587374,14.1840517 C92.6452578,11.7841392 96.3320009,9.73879658 100.141194,7.90028636 C100.389404,7.78045489 100.635959,7.66226494 100.875895,7.53258431 C100.932156,7.5013953 100.958632,7.42588506 101,7.37007314 C100.927192,7.32903496 100.854384,7.25352472 100.778266,7.24860014 C99.1979968,7.16816532 97.6177277,7.06474912 96.0358038,7.03027705 C94.3049541,6.99252193 92.5724496,7.02206942 90.8415999,7.02206942",
              id: "Lightning-Bolt",
              fill: "#F15A24"
            })), React.createElement(facialHair_1.default, null), this.props.children))));
    };
    Helmet.optionValue = 'Charlie Helmet';
    return Helmet;
}(React.Component));
exports.default = Helmet;
