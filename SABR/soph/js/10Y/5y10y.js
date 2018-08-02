var trace1 = {
                    x: [0.009936,0.014936,0.019936,0.024936,0.034936,0.039936,0.044936,0.049936],

                    y: [0.3639,0.3254,0.2987,0.2815,0.2562,0.2481,0.2421,0.2371],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.43981,0.41928,0.40225,0.38777,0.37523,0.3642,0.35441,0.34562,0.33769,0.33047,0.32387,0.31781,0.31222,0.30705,0.30225,0.29778,0.29362,0.28972,0.28608,0.28266,0.27944,0.27642,0.27357,0.27088,0.26835,0.26595,0.26368,0.26153,0.2595,0.25757,0.25574,0.254,0.25234,0.25077,0.24927,0.24785,0.24649,0.2452,0.24397,0.24279,0.24167,0.2406,0.23957,0.2386,0.23766,0.23677],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0299],
                y: [0.2661],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '5Y10Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv6', data, layout);