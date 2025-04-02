// JavaScript for the calculator page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the expected return slider
    const expectedReturnSlider = document.getElementById('expected-return');
    const returnValueDisplay = document.getElementById('return-value');
    
    expectedReturnSlider.addEventListener('input', function() {
        returnValueDisplay.textContent = this.value + '%';
    });
    
    // Handle form submission
    const investmentForm = document.getElementById('investment-form');
    investmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateInvestment();
    });
    
    // Fetch current cryptocurrency prices
    fetchCryptoPrices();
});

// Global variable to store cryptocurrency prices
let cryptoPrices = {};

// Fetch cryptocurrency prices
async function fetchCryptoPrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,cardano,solana&vs_currencies=usd');
        cryptoPrices = await response.json();
    } catch (error) {
        console.error('Error fetching cryptocurrency prices:', error);
    }
}

// Calculate investment returns
function calculateInvestment() {
    // Get form values
    const cryptocurrency = document.getElementById('cryptocurrency').value;
    const initialInvestment = parseFloat(document.getElementById('investment-amount').value);
    const years = parseInt(document.getElementById('investment-duration').value);
    const annualReturn = parseFloat(document.getElementById('expected-return').value) / 100;
    
    // Validate input
    if (isNaN(initialInvestment) || initialInvestment <= 0) {
        alert('Please enter a valid investment amount.');
        return;
    }
    
    // Calculate final value
    const finalValue = initialInvestment * Math.pow((1 + annualReturn), years);
    const totalProfit = finalValue - initialInvestment;
    const roi = (totalProfit / initialInvestment) * 100;
    
    // Update results
    document.getElementById('initial-investment').textContent = formatCurrency(initialInvestment);
    document.getElementById('final-value').textContent = formatCurrency(finalValue);
    document.getElementById('total-profit').textContent = formatCurrency(totalProfit);
    document.getElementById('roi').textContent = roi.toFixed(2) + '%';
    
    // Show results
    document.getElementById('results-container').querySelector('div:first-child').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    
    // Generate projection chart
    generateProjectionChart(initialInvestment, years, annualReturn);
}

// Generate projection chart
function generateProjectionChart(initialInvestment, years, annualReturn) {
    // Generate data points for each year
    const labels = [];
    const values = [];
    
    for (let year = 0; year <= years; year++) {
        labels.push('Year ' + year);
        const yearValue = initialInvestment * Math.pow((1 + annualReturn), year);
        values.push(yearValue);
    }
    
    // Destroy previous chart if it exists
    if (window.projectionChart) {
        window.projectionChart.destroy();
    }
    
    // Create new chart
    const ctx = document.getElementById('projection-chart').getContext('2d');
    window.projectionChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Investment Value',
                data: values,
                backgroundColor: 'rgba(20, 184, 166, 0.1)',
                borderColor: 'rgba(20, 184, 166, 1)',
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(20, 184, 166, 1)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(17, 24, 39, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: 'rgba(55, 65, 81, 1)',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return `Value: ${formatCurrency(context.parsed.y)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        color: 'rgba(156, 163, 175, 1)'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(55, 65, 81, 0.2)',
                        drawBorder: false
                    },
                    ticks: {
                        color: 'rgba(156, 163, 175, 1)',
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}