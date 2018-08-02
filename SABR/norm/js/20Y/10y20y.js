var trace1 = {
                    x: [0.009103,0.014103,0.019103,0.024103,0.034103,0.039103,0.044103,0.049103],

                    y: [0.312,0.2808,0.2614,0.2507,0.2361,0.2325,0.2306,0.2289],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.36417,0.34768,0.33423,0.32296,0.31335,0.30505,0.29779,0.29139,0.28571,0.28063,0.27607,0.27196,0.26824,0.26486,0.26179,0.25898,0.25642,0.25406,0.2519,0.24992,0.24809,0.2464,0.24485,0.24341,0.24207,0.24084,0.23969,0.23863,0.23764,0.23672,0.23587,0.23507,0.23433,0.23363,0.23299,0.23238,0.23182,0.23129,0.2308,0.23034,0.22991,0.2295,0.22912,0.22877,0.22844,0.22813],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0291],
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
                title: '10Y20Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv7', data, layout);