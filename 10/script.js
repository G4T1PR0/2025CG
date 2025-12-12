document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('graph').getContext('2d');
    let graph = null;

    const drawBtn = document.getElementById('drawBtn');

    function initChart(labels, data) {
        if (graph) {
            graph.destroy();
        }

        graph = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: `f(x) = ${document.getElementById('functionInput').value}`,
                    data: data,
                    borderColor: '#4e54c8',
                    backgroundColor: 'rgba(78, 84, 200, 0.1)',
                    borderWidth: 2,
                    pointRadius: 1,
                    pointHoverRadius: 5,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'linear',
                        position: 'center',

                        title: {
                            display: true,
                            text: 'x'
                        },
                        grid: {
                            color: (context) => context.tick.value === 0 ? '#333' : '#e0e0e0',
                            lineWidth: (context) => context.tick.value === 0 ? 2 : 1
                        }
                    },
                    y: {
                        position: 'center',

                        title: {
                            display: true,
                            text: 'y'
                        },
                        grid: {
                            color: (context) => context.tick.value === 0 ? '#333' : '#e0e0e0',
                            lineWidth: (context) => context.tick.value === 0 ? 2 : 1
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            }
        });
    }


    function drawGraph() {
        const funcStr = document.getElementById('functionInput').value;
        const xMin = parseFloat(document.getElementById('xMinInput').value);
        const xMax = parseFloat(document.getElementById('xMaxInput').value);
        const step = parseFloat(document.getElementById('stepInput').value);

        if (isNaN(xMin) || isNaN(xMax) || isNaN(step) || step <= 0) {
            console.log("Parameter error");
            return;
        }
        if (xMin >= xMax) {
            console.log("X range error");
            return;
        }

        const labels = [];
        const data = [];

        try {
            const expr = math.compile(funcStr);
            console.log(`Function parsed: ${funcStr}`);

            for (let x = xMin; x <= xMax + step / 100; x += step) {
                let cleanX = Math.round(x * 1000) / 1000;

                try {
                    let scope = { x: cleanX };
                    let y = expr.evaluate(scope);

                    if (isFinite(y)) {
                        labels.push(cleanX);
                        data.push({ x: cleanX, y: y });
                    } else {
                        labels.push(cleanX);
                        data.push({ x: cleanX, y: null });
                    }
                } catch (calcErr) {
                    console.log(`Calculation error: x=${cleanX}: ${calcErr}`);
                }
            }

            if (data.length === 0) {
                console.log('No data');
                return;
            }

            initChart(labels, data);

        } catch (err) {
            console.error(err);
        }
    }

    drawBtn.addEventListener('click', drawGraph);

    drawGraph();
});
