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
var HairColor_1 = require("./HairColor");
var LongHairCurvy = /** @class */ (function (_super) {
    __extends(LongHairCurvy, _super);
    function LongHairCurvy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.mask2 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.path2 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    LongHairCurvy.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2;
        return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { d: 'M162.831093,71.6181521 C162.943003,73.0640672 163,74.5253775 163,76 L163,114 C163,136.339168 149.919579,155.623239 131,164.610951 L131,183 L135,183 C136.524404,183 137.037743,183.047374 138.538625,183.140731 C123.625568,210.496321 119.823733,233.574048 137.47212,247.543277 C139.169858,248.745686 140.396085,249.328761 140.607243,249.428275 C142.980035,250.546232 145.444343,251.76781 148.074296,252.382591 C152.696796,253.463231 158.007057,252.010459 162.630756,251.429524 C164.742591,251.164137 166.847633,251.000636 168.977452,250.993519 C171.542066,250.985014 174.188404,251.078221 176.119408,252.691023 C178.003455,254.264772 177.763079,259.889444 172.244213,262.523872 C176.3432,264.37915 181.25603,260.071171 182.931671,257.34666 C184.398107,254.962171 185.526058,252.378599 186.146081,249.741914 C186.917963,246.458686 186.967717,243.016815 186.363678,239.728032 C185.106048,232.88022 182.187563,226.295538 180.201011,219.605673 C179.468692,217.139607 178.51478,214.440611 178.099366,211.916746 C177.986471,211.23167 177.851996,208.701383 177.957698,208.171998 C178.036425,207.778517 178.016643,207.37549 179.372782,206.996069 C183.288539,205.899634 187.379733,204.063449 190.225486,201.476579 C193.590156,198.418295 195.343925,194.445304 196.758409,190.497133 C198.998525,184.244662 200.281132,177.550111 200.870584,171.057073 C200.99307,169.708269 201.062205,168.361722 201.086383,167.009968 C201.10077,166.193153 201.000862,165.263344 201.094375,164.445141 C201.247433,163.105189 201.039826,163.457881 202.341615,162.571291 C206.599454,159.671476 209.921164,155.448546 212.051783,151.200622 C215.39827,144.528634 215.834064,137.49302 213.117591,130.733555 C210.864687,125.12728 207.291411,119.498616 201.725588,115.887863 C199.588776,114.501568 197.334273,113.244582 195.115337,111.95809 C193.906862,111.257566 191.067703,110.342511 190.209501,109.441341 C189.609259,108.810939 190.56477,105.649382 190.685858,104.583322 C191.213967,99.9353218 190.606132,95.4261763 189.520542,90.8868298 C187.127368,80.8793698 177.487944,64.7382958 173.617944,55.2249863 C170.293437,47.0528435 165.481911,-0.0750473139 108.58669,0.198941193 C51.691468,0.4729297 41.4185991,50.4377258 33.7159879,59.7736698 C25.3512665,69.9121239 16.9074766,89.1763214 22.602684,107.035643 C17.099033,113.95809 4.54481227,124.04369 1.3853513,134.125611 C-0.596804833,140.450807 -0.511883829,147.495621 2.0289526,153.633016 C3.46621561,157.104393 5.52490056,160.250502 7.94045353,163.272162 C10.0566849,165.919435 12.4084972,168.423513 14.4577909,171.110359 C15.6946403,172.732013 16.0263318,173.129312 15.5599656,175.128304 C14.6406208,179.068318 12.7411877,182.853334 11.0939201,186.603116 C8.54189405,192.412639 6.39748885,197.82226 6.0799842,204.016065 C5.77766543,209.912373 7.40435223,226.688671 24.3409972,236.576369 C26.3249517,237.73442 28.2831301,238.743202 30.3833764,239.685161 C29.2931905,236.290327 30.5294405,224.161856 32.7263968,219.653578 C33.2860762,221.204589 34.2369916,222.697108 35.2618383,224.05216 C36.8611506,226.167444 40.636039,231.460774 45.4085994,231.706547 C43.4722007,228.722725 41.3891385,226.708805 40.7853002,223.10864 C44.7616013,225.068753 50.4191385,226.855644 55.0466338,226.691448 C58.4512667,226.570818 63.4709972,224.871405 66.0000446,222.74779 C57.6284322,224.074724 49.679027,221.3155 46.4820009,215.419366 C45.8146217,214.188415 45.3084926,212.898625 45.0141664,211.558847 C44.5967546,209.659309 43.9381673,206.615432 44.8227444,204.862039 C45.0375932,204.436124 45.3893685,204.001198 45.806628,203.572743 C45.7407358,203.49425 45.6753213,203.415537 45.6103845,203.336606 C51.303506,198.550494 58.4494475,190.932516 62.2752482,185.367908 C62.3459243,185.245492 62.416066,185.122857 62.4856702,185 L62.5253504,185 C62.5536953,184.957813 62.5818364,184.915755 62.6097716,184.873828 C67.874859,183.648086 73.3617452,183 79,183 L83,183 L83,164.610951 C64.0804213,155.623239 51,136.339168 51,114 L51,76 L51,76 C51,73.537425 51.1589523,71.1119753 51.4671565,68.733351 C55.4088487,67.4702772 59.365485,66.2776957 63.3986046,65.2045441 C67.8552588,64.0189378 77.7980098,62.0907786 81.6887904,61.1941723 L84.4252449,58.215348 L85.4876566,60.1702128 C87.6456492,60.0042337 99.5663601,58.212708 99.5663601,58.212708 L100.896323,54.9898699 C102.612526,56.7530625 103.834989,57.668872 103.834989,57.668872 C106.391211,57.460454 117.488488,57.2113208 120.119841,57.2427023 C120.119841,57.2427023 127.460212,57.5012269 129.240756,57.5714137 L130.907605,56.9328981 L131.456495,58.0098503 C132.910143,58.601117 141.699367,61.6008734 143.434153,62.138079 L145.980784,61.2323702 C147.100342,63.9256202 149.920119,63.586016 152.257345,65.7132858 C154.760315,67.9915694 159.482831,69.7372554 162.831093,71.6181521 Z', id: path2 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Long-Hair/Curvy', mask: "url(#" + mask1 + ")" },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement("path", { d: 'M100.899906,42.4648024 C91.1016204,48.4721303 82.3855283,56.3273858 76.5871222,65.36024 C73.8252914,69.662826 71.5532049,74.1995784 69.4361743,78.7575668 C68.3739624,81.0447336 67.4048638,83.3600237 66.475928,85.6893613 C65.8894735,87.1594817 64.9889112,88.7449062 65.8359233,90.2878445 C66.3526427,89.9857996 66.5492598,90.0943892 66.224362,90.6353417 C68.9162579,91.3693254 72.6583769,89.3003017 74.9906073,88.5362205 C79.7539763,86.9753339 84.5203425,85.5025753 89.3986046,84.2045441 C93.8552588,83.0189378 103.79801,81.0907786 107.68879,80.1941723 L110.425245,77.215348 L111.487657,79.1702128 C113.645649,79.0042337 125.56636,77.212708 125.56636,77.212708 L126.896323,73.9898699 C128.612526,75.7530625 129.834989,76.668872 129.834989,76.668872 C132.391211,76.460454 143.488488,76.2113208 146.119841,76.2427023 C146.119841,76.2427023 153.460212,76.5012269 155.240756,76.5714137 L156.907605,75.9328981 L157.456495,77.0098503 C158.910143,77.601117 167.699367,80.6008734 169.434153,81.138079 L171.980784,80.2323702 C173.100342,82.9256202 175.920119,82.586016 178.257345,84.7132858 C181.34867,87.5271086 187.825645,89.5285179 190.917768,91.9756241 C192.024938,92.8519441 193.059576,93.7675012 194.100208,94.7015404 C195.255933,95.7385867 195.085291,95.890424 195.460742,97.0802141 C195.573237,97.4361731 196.715775,99.2788807 197.202722,99.4296139 C198.935909,99.9660566 187.048767,68.9435732 183.785603,64.9771662 C180.417736,60.8830307 158.574915,33.3231248 129.612057,34.2254634', id: 'Top-Shadow', fillOpacity: '0.16', fill: '#000000', fillRule: 'evenodd' }),
                    React.createElement("g", { id: 'Hair', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', transform: 'translate(26.000000, 16.000000)' },
                        React.createElement("mask", { id: mask2, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path2 })),
                        React.createElement("use", { id: 'Hair-Mask', fill: '#361A0A', xlinkHref: '#' + path2 }),
                        React.createElement(HairColor_1.default, { maskID: mask2 }),
                        React.createElement("path", { d: 'M62.6794556,184.462132 C69.755442,174.755405 62.148959,147.786913 56.1278159,137.800593 C72.9649824,130.137708 106.213574,131.553467 155.87359,142.047871 C151.079203,150.900348 149.123448,158.803527 150.006324,165.757409 C145.469118,171.332534 141.720304,177.127222 138.759883,183.141474 L103.888915,191.746789 C81.8528509,194.400378 68.1163643,191.97216 62.6794556,184.462132 Z', id: 'Shadow', fillOpacity: '0.24', fill: '#000000', mask: "url(#" + mask2 + ")" })),
                    React.createElement("path", { d: 'M79.0404573,170.094305 C78.9812573,169.892618 78.8354573,169.667152 78.6348573,169.428842 C78.7708573,169.650142 78.9074573,169.871269 79.0404573,170.094305 Z M56.409572,120.375261 C57.2661752,126.5406 58.7356083,132.465374 60.8662263,138.377476 C62.9277086,144.09848 65.285915,149.836145 68.678559,155.067858 C71.8402179,159.943234 75.6031176,164.4923 78.6348973,169.428772 C77.8378388,168.48126 76.1633964,167.329804 75.5207941,166.65115 C74.4643769,165.535276 73.4750971,164.385382 72.5369698,163.193485 C70.6143583,160.749982 68.9003527,158.193833 67.243494,155.609567 C63.9913192,150.536843 61.5529875,145.034363 59.4397533,139.530668 C55.2902133,128.722708 51.1268862,115.61687 54.7738936,104.200899 C54.4921557,104.935095 55.2326668,106.688314 55.3491585,107.497319 C55.5525692,108.91069 55.7349995,110.333608 55.8267142,111.757219 C56.0123415,114.639678 56.0109428,117.505994 56.409572,120.375261 Z M68.8553146,165.041212 C67.4967783,163.309515 64.9739252,161.944396 63.4129772,160.279177 C61.9976938,158.769648 60.9019131,157.07822 59.9070386,155.339754 C57.6517365,151.39922 56.1697151,147.374505 55.6897616,142.969154 C55.7992598,143.49177 56.6083072,144.395543 56.8630702,144.824778 C57.4766993,145.858902 58.0839345,146.89424 58.6508072,147.948671 C59.7481863,149.989667 60.6639345,152.099744 61.7731027,154.135533 C63.8106073,157.875421 66.402796,161.495374 68.8553146,165.041212 Z M73.5320242,183.498629 C74.6465874,185.460651 75.5723262,187.464851 76.1569823,189.60079 C76.4654954,190.727599 76.7138643,191.869508 76.9272658,193.013501 C76.9962017,193.382508 77.0093894,194.709963 77.1846264,195.283955 C74.9700864,190.992812 73.2798587,186.448779 70.6421125,182.34214 C68.0381348,178.288092 64.6948448,174.560527 61.1958996,171.061031 C57.5013364,167.36575 53.7855929,163.879099 51.8038364,159.214262 C50.0788411,155.153619 49.4126608,150.996124 49.8138875,146.658464 C49.8160855,148.56911 51.5706533,151.280256 52.1766896,153.126681 C53.0063178,155.654018 53.6655046,158.231689 54.9143429,160.634229 C57.039566,164.722991 60.873,167.876911 64.0792175,171.321558 C67.631513,175.137643 71.0245567,179.084252 73.5320242,183.498629 Z M59.2286696,174.179456 C60.2874847,175.196917 61.2164205,176.28259 62.0352588,177.454354 C62.9328239,178.738937 63.5914112,180.09017 64.1800637,181.504062 C64.6869921,182.721301 64.9105841,184.986375 65.7074428,186.0021 C63.1288415,182.856337 60.4739112,179.884838 58.6955655,176.312444 C58.0893295,175.089825 57.1480051,173.289222 56.4530516,171.817184 C56.6844363,172.409922 58.7059559,173.677148 59.2286696,174.179456 Z M48.9033745,180.528033 C51.7405353,184.777866 55.450684,188.609052 57.877027,193.056233 C60.7067946,198.242644 61.9518364,203.862978 62.202803,209.595957 C62.3216924,212.307277 62.3152983,215.0606 61.9498383,217.764455 C61.7540204,219.211673 61.4399126,220.650211 61.0810465,222.075732 C60.944973,222.616747 60.2406283,224.002173 60.1037556,224.846586 C59.8140251,214.305575 61.5584024,203.763696 56.0767017,193.942823 C53.4811162,189.292219 49.4912277,185.327212 46.398105,180.924811 C43.6164926,176.966226 40.8998197,173.083838 38.6846803,168.851361 C40.0408188,170.567263 42.485145,171.915893 44.0009349,173.619818 C45.8995688,175.753674 47.3488206,178.199606 48.9033745,180.528033 Z M60.1036574,224.846603 C60.0710574,225.050581 60.0700574,225.224111 60.1172574,225.346603 C60.1116574,225.180112 60.1082574,225.01327 60.1036574,224.846603 Z M50.5604331,202.493815 C50.5610325,202.989874 51.376474,204.011501 51.5992667,204.528562 C52.1207816,205.73799 52.5455864,207.007473 52.7573894,208.289626 C53.1752007,210.818004 52.6269108,213.429521 51.6899823,215.850286 C49.7909489,220.757251 46.8161162,225.102895 43.0767946,229.15 C44.4121524,227.402335 44.9438578,224.56136 45.8833838,222.612182 C46.8478866,220.611106 47.8829238,218.6411 48.7335325,216.600624 C50.652947,211.995842 50.4835046,207.289696 50.5604331,202.493815 Z M41.9174331,221.200893 C42.3180604,220.652936 42.1102537,218.018161 42.3222565,217.328919 C42.714092,216.055618 43.3920613,214.827097 44.170737,213.693866 C43.7551236,214.392828 44.3691524,216.160106 44.1663411,217.067177 C43.8338504,218.55553 42.9962296,219.998582 41.9174331,221.200893 Z M99.6077106,42.748374 C99.5269106,42.804974 99.4471106,42.908174 99.3681106,43.044574 C99.4481106,42.945974 99.5267106,42.846574 99.6077106,42.748374 Z M84.8469387,64.3317143 C86.2672175,63.085837 87.0237138,60.1410677 88.0032026,58.5522183 C89.1283559,56.7269681 90.4213532,54.9730547 91.6476125,53.1960567 C94.0795502,49.6719145 96.3744154,46.2123399 99.3680307,43.0054816 C98.7464089,43.9398028 98.1949219,46.7736616 97.8536394,47.5189663 C96.9620688,49.4667561 95.8988578,51.3334892 94.6328355,53.1235049 C91.7722965,57.1680066 88.7029517,60.9266404 84.8469387,64.3317143 Z M84.3117165,54.1218036 C85.0620186,52.7952168 86.2055548,51.6739619 87.4917584,50.7082248 C86.9188913,51.2107066 86.6607314,53.2831189 86.2670976,53.9831221 C85.472237,55.3952784 84.3143141,56.6130375 83.0714703,57.7545999 C83.7352528,57.1726235 83.842553,54.9516363 84.3117165,54.1218036 Z M203.505599,152.127968 C203.498805,152.179518 203.485417,152.282271 203.464637,152.438483 C203.462638,150.913159 202.784469,149.237352 202.704144,147.668984 C202.592048,145.478545 202.906556,143.353715 203.787137,141.277137 C205.526519,137.175704 208.790083,134.069516 212.950612,131.638511 C211.805877,132.313173 210.683921,134.851617 209.949604,135.906916 C208.84663,137.493162 207.668126,139.094161 206.735993,140.757819 C204.793001,144.225725 204.229725,148.375062 203.505599,152.127968 Z M201.998401,130.481881 C201.761221,131.706583 201.448912,132.921738 201.009121,134.107908 C200.534762,135.386937 199.915938,136.630558 199.22578,137.835993 C198.79578,138.586852 197.246621,140.162684 197.24762,140.993211 C197.165296,136.095098 198.975812,131.657983 202.419809,127.7355 C202.04236,128.392806 202.137271,129.766083 201.998401,130.481881 Z M201.196906,165.719988 C204.852905,165.202752 208.302496,166.981313 210.618342,169.271033 C211.855791,170.494694 212.955568,171.900428 213.683091,173.404055 C214.229783,174.534509 214.228783,176.387356 214.9631,177.323587 C213.165772,174.905078 210.886892,172.951214 208.638584,170.859535 C207.075238,169.404855 203.950944,165.678852 201.196906,165.719988 Z M200.41897,176.096698 C200.227148,176.031957 198.485169,175.539368 198.081944,175.776984 C198.679388,175.510035 199.412106,175.184941 200.068895,175.097983 C204.35311,174.529024 209.561066,178.239232 210.13633,181.81909 C209.657576,180.592826 207.111145,179.578489 205.959616,178.968568 C204.136711,178.002484 202.395531,176.832456 200.41897,176.096698 Z M202.227687,183.908269 C202.969797,184.089822 204.54713,185.083504 205.275252,185.072742 C202.345977,185.143906 199.703236,184.81829 196.883858,184.158729 C197.036117,184.200212 198.643022,183.702937 198.694974,183.695647 C199.910043,183.523987 201.052381,183.620492 202.227687,183.908269 Z M190.882541,197.765243 C195.171151,197.522941 200.218656,198.149351 204.314046,199.181739 C206.346955,199.694288 208.253382,200.468058 210.006351,201.476666 C211.420436,202.290531 213.935896,203.408661 214.881616,204.614097 C211.142494,198.162369 203.032039,194.811448 194.722769,196.473197 C193.615199,196.695886 191.914181,197.749796 190.882541,197.765243 Z M189.923153,210.197773 C192.611453,209.233424 195.584487,208.30431 198.505969,208.169273 C201.277391,208.042395 204.351332,208.458613 206.915546,209.342078 C206.033367,209.102206 203.92333,209.674289 202.995793,209.779298 C201.699199,209.926138 200.399608,210.077837 199.099817,210.196558 C197.506299,210.342009 195.898395,210.422718 194.298883,210.41942 C193.159543,210.41699 190.979371,209.87858 189.923153,210.197773 Z M179.458947,227.410508 C179.711912,231.383499 182.010574,234.84533 185.39043,237.491388 C188.973097,240.296087 193.769036,241.572686 196.369816,245.319691 C197.637437,247.145462 198.312809,249.270812 198.20431,251.417686 C198.148362,252.524014 197.870221,253.636069 197.5695,254.712196 C197.371684,255.420184 196.66734,256.580144 196.667939,257.270775 C196.69911,253.384221 196.751661,248.859281 194.031592,245.598095 C191.300932,242.324066 186.539161,241.170701 183.203065,238.482813 C179.924714,235.841442 177.437828,232.389157 176.877749,228.498264 C176.425569,225.354411 176.648562,219.871892 179.90773,217.738557 C179.246345,218.128392 179.377224,220.111764 179.361438,220.669267 C179.298097,222.900321 179.317079,225.185182 179.458947,227.410508 Z M177.005789,242.672904 C177.402221,243.19257 179.575399,243.82436 180.213805,244.182606 C181.67045,245.000116 183.07914,245.92923 184.234665,247.059684 C186.55111,249.326146 188.044121,252.504886 188.151821,255.553623 C188.151821,254.833139 186.505553,253.096583 186.043183,252.481107 C185.275297,251.458613 184.407904,250.511969 183.524526,249.564283 C181.371329,247.253734 179.135209,244.999942 177.005789,242.672904 Z M229.167807,153.791051 C230.371887,154.841663 231.178936,156.147595 231.842519,157.49987 C233.373295,160.619424 233.65823,164.217333 232.431571,167.500388 C232.634582,166.795698 232.030544,165.31585 231.860502,164.601614 C231.488248,163.038626 230.906389,161.56225 230.298355,160.059664 C229.118053,157.144401 228.163741,154.41208 226.113648,151.858014 C226.644354,152.52556 228.442481,153.157872 229.167807,153.791051 Z M171.509602,41.9832998 C171.510002,42.3148163 172.426549,43.2758671 172.633357,43.6374111 C173.149677,44.5392749 173.557297,45.4857459 173.696967,46.4924453 C173.85542,47.6336606 173.6616,48.7505762 173.315522,49.8605491 C173.109914,50.5202844 172.131624,51.7949741 172.132423,52.3894475 C171.972572,48.891167 171.198691,45.5298324 171.509602,41.9832998 Z M179.146978,48.8048339 C179.312224,50.0477605 178.906202,51.4491555 178.183074,52.546805 C178.314952,52.2364639 177.729296,50.1642252 177.710314,49.7849773 C177.650969,48.6118253 177.77925,47.4056953 177.856378,46.2332376 C177.857178,46.8738803 179.039478,47.9958294 179.146978,48.8048339 Z M118.377388,50.3732542 C117.142336,51.8857333 115.738043,53.3032702 114.227248,54.6164922 C113.2036,55.5060327 111.243024,56.5057893 110.46315,57.5267214 C113.964293,51.8147436 118.00913,46.8878178 122.764906,41.8951095 C122.049172,42.8155452 121.862346,44.8121078 121.337434,45.8885819 C120.563354,47.4758692 119.527518,48.9645693 118.377388,50.3732542 Z M124.275361,52.8515919 C124.845431,52.5155626 125.378934,50.859195 125.81333,50.3013446 C126.54465,49.3623371 127.437619,48.4554398 128.390733,47.6728177 C128.186123,47.8927295 127.788693,49.7158968 127.5657,50.0739694 C126.843372,51.2344508 125.56616,52.1809219 124.275361,52.8515919 Z', id: 'Lights', fillOpacity: '0.6', fill: '#FFFFFF', fillRule: 'evenodd' }),
                    React.createElement(facialHair_1.default, null),
                    this.props.children))));
    };
    LongHairCurvy.optionValue = 'Long Hair Curvy';
    return LongHairCurvy;
}(React.Component));
exports.default = LongHairCurvy;
