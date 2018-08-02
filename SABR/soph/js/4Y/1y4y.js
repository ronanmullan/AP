var trace1 = {
                    x: [0.009652,0.014652,0.019652,0.024652,0.034652,0.039652,0.044652,0.049652],

                    y: [0.5546,0.4316,0.3419,0.285,0.2442,0.2586,0.2752,0.2918],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.75303,0.69983,0.65433,0.61453,0.57914,0.54726,0.51824,0.49161,0.46701,0.44416,0.42284,0.40288,0.38414,0.36653,0.34998,0.33442,0.31983,0.3062,0.29357,0.28196,0.27144,0.26211,0.25407,0.2474,0.2422,0.23847,0.23619,0.23525,0.23549,0.23673,0.23877,0.24144,0.24458,0.24807,0.25182,0.25573,0.25975,0.26384,0.26795,0.27206,0.27616,0.28022,0.28423,0.28819,0.29209,0.29593],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0297],
                y: [0.2396],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '1Y4Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv2', data, layout);