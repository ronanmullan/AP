var trace1 = {
                    x: [0.009713,0.014713,0.019713,0.024713,0.034713,0.039713,0.044713,0.049713],

                    y:[0.5291,0.4118,0.3264,0.2722,0.2333,0.247,0.2628,0.2787],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.71454,0.66462,0.62194,0.58464,0.55149,0.52165,0.4945,0.4696,0.44662,0.42529,0.40541,0.38682,0.36938,0.35302,0.33765,0.32323,0.30973,0.29714,0.28547,0.27476,0.26506,0.25643,0.24894,0.24267,0.23768,0.23396,0.2315,0.23021,0.22998,0.23065,0.23206,0.23408,0.23657,0.23942,0.24253,0.24583,0.24926,0.25278,0.25636,0.25995,0.26355,0.26713,0.27069,0.27421,0.27768,0.28111],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0297],
                y: [0.2289],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '1Y20Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv2', data, layout);