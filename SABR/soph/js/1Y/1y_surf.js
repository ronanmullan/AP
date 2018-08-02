Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function(err, rows){
function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var z_data=[[0.51702,0.47958,0.44752,0.41944,0.39442,0.37182,0.3512,0.33222,0.31461,0.29818,0.28277,0.26825,0.25452,0.24149,0.22911,0.21732,0.20608,0.19537,0.18519,0.17554,0.16645,0.15799,0.15024,0.1433,0.13733,0.13244,0.12872,0.12618,0.12476,0.1243,0.12463,0.12556,0.12695,0.12866,0.13061,0.13272,0.13494,0.13722,0.13954,0.14187,0.14421,0.14653,0.14884,0.15112,0.15336,0.15558],
[0.64411,0.59483,0.55252,0.51538,0.48224,0.45226,0.42486,0.39961,0.37616,0.35426,0.33369,0.3143,0.29595,0.27853,0.26198,0.24623,0.23125,0.21705,0.20366,0.19118,0.17978,0.16974,0.16144,0.15535,0.15186,0.15105,0.15262,0.15598,0.16055,0.16586,0.17159,0.17752,0.18351,0.18948,0.19537,0.20116,0.20682,0.21235,0.21773,0.22297,0.22808,0.23304,0.23788,0.24258,0.24716,0.25161],
[0.58831,0.54692,0.51153,0.48057,0.45303,0.42823,0.40566,0.38494,0.3658,0.34801,0.33142,0.31588,0.30129,0.28758,0.27467,0.26253,0.25113,0.24047,0.23056,0.22141,0.2131,0.20566,0.19919,0.19375,0.18941,0.1862,0.18411,0.18307,0.18297,0.18369,0.18507,0.18697,0.18928,0.19188,0.19471,0.19768,0.20076,0.20389,0.20706,0.21023,0.2134,0.21654,0.21966,0.22273,0.22577,0.22875],
[0.55722,0.52116,0.49048,0.46378,0.44016,0.41899,0.39983,0.38235,0.36629,0.35147,0.33774,0.32499,0.31311,0.30203,0.2917,0.28208,0.27313,0.26482,0.25714,0.25009,0.24365,0.23782,0.2326,0.22799,0.22398,0.22056,0.21771,0.21541,0.21362,0.2123,0.21142,0.21092,0.21077,0.21092,0.21133,0.21195,0.21277,0.21374,0.21484,0.21604,0.21733,0.2187,0.22011,0.22157,0.22307,0.22459],
[0.5631,0.52901,0.50016,0.47519,0.45322,0.43363,0.41599,0.39998,0.38536,0.37195,0.3596,0.34819,0.33763,0.32785,0.31877,0.31037,0.30258,0.29538,0.28874,0.28263,0.27703,0.27192,0.26728,0.26309,0.25933,0.25599,0.25304,0.25045,0.24822,0.24631,0.2447,0.24338,0.2423,0.24146,0.24083,0.24039,0.24012,0.23999,0.24001,0.24014,0.24038,0.24071,0.24113,0.24161,0.24216,0.24276],
[0.54523,0.51461,0.48885,0.46666,0.44722,0.42996,0.41449,0.4005,0.38777,0.37612,0.36542,0.35556,0.34644,0.338,0.33017,0.32289,0.31614,0.30985,0.30402,0.29859,0.29356,0.28889,0.28457,0.28057,0.27687,0.27347,0.27034,0.26746,0.26483,0.26242,0.26023,0.25824,0.25644,0.25482,0.25335,0.25204,0.25087,0.24983,0.24891,0.24811,0.2474,0.2468,0.24628,0.24584,0.24547,0.24517],
[0.47007,0.44819,0.43007,0.41468,0.40136,0.38966,0.37927,0.36996,0.36155,0.3539,0.34692,0.3405,0.33459,0.32912,0.32404,0.31932,0.31491,0.31079,0.30694,0.30332,0.29991,0.29671,0.2937,0.29085,0.28816,0.28562,0.28321,0.28093,0.27877,0.27672,0.27477,0.27291,0.27115,0.26947,0.26788,0.26636,0.2649,0.26352,0.2622,0.26094,0.25973,0.25858,0.25747,0.25642,0.25541,0.25444],
[0.42242,0.40255,0.38629,0.37266,0.36101,0.35093,0.3421,0.33431,0.32738,0.32119,0.31562,0.31061,0.30607,0.30196,0.29821,0.2948,0.29168,0.28883,0.28622,0.28383,0.28163,0.2796,0.27774,0.27603,0.27445,0.273,0.27166,0.27041,0.26927,0.26821,0.26723,0.26632,0.26549,0.26471,0.26399,0.26333,0.26271,0.26214,0.26161,0.26112,0.26067,0.26025,0.25986,0.2595,0.25917,0.25887],
[0.59486,0.55921,0.52894,0.50264,0.47942,0.45863,0.43986,0.42275,0.40707,0.39262,0.37925,0.36683,0.35528,0.34452,0.33447,0.32509,0.31633,0.30817,0.30056,0.29349,0.28693,0.28088,0.2753,0.2702,0.26554,0.26133,0.25755,0.25417,0.25119,0.24857,0.24631,0.24437,0.24275,0.2414,0.24032,0.23947,0.23884,0.2384,0.23814,0.23803,0.23806,0.23821,0.23847,0.23883,0.23926,0.23978],
[0.69282,0.65142,0.61555,0.58387,0.55548,0.52974,0.50619,0.48449,0.46438,0.44564,0.42812,0.4117,0.39625,0.38172,0.36802,0.35511,0.34296,0.33153,0.32082,0.31082,0.30152,0.29294,0.28508,0.27796,0.27158,0.26596,0.26108,0.25693,0.2535,0.25074,0.2486,0.24703,0.24598,0.24539,0.2452,0.24535,0.24579,0.24649,0.2474,0.24848,0.2497,0.25105,0.25249,0.25402,0.2556,0.25724]]

var data = [{
           x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
           y: [0.25,0.5,1,2,3,4,5,10,15,30],
           z: z_data,
           type: 'surface'
        }];

var layout = {
  scene: {
                              xaxis:{title: 'Strike (%)'},
                              yaxis:{title: 'Time unitl Maturity (years)'},
                              zaxis:{title: 'Volatility'},
                              },
  title: 'SABR Volatility',
  autosize: false,
  width: 900,
  height: 600,
  margin: {
    l: 65,
    r: 50,
    b: 65,
    t: 90,
  }
};
Plotly.newPlot('myDiv10', data, layout);
});