var trace1 = {
                    x: [0.009554,0.014554,0.019554,0.024554,0.034554,0.039554,0.044554,0.049554],

                    y:[0.3838,0.3257,0.2856,0.2617,0.2295,0.2216,0.217,0.2137],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.47865,0.45183,0.42925,0.4098,0.39275,0.37761,0.36403,0.35175,0.34057,0.33033,0.32093,0.31225,0.30423,0.29679,0.28989,0.28347,0.27751,0.27196,0.2668,0.262,0.25754,0.2534,0.24956,0.246,0.24271,0.23968,0.23688,0.23431,0.23196,0.2298,0.22783,0.22604,0.22442,0.22295,0.22163,0.22044,0.21938,0.21844,0.2176,0.21686,0.21622,0.21566,0.21518,0.21477,0.21443,0.21415],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0296],
                y: [0.2410],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '4Y20Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv5', data, layout);