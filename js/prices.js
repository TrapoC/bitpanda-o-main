// JavaScript for the prices page

document.addEventListener('DOMContentLoaded', function() {
    // Fetch cryptocurrency data
    fetchCryptocurrencyData();
    
    // Initialize Bitcoin chart
    initializeBitcoinChart('24h');
    
    // Add event listeners to time buttons
    document.querySelectorAll('.time-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.time-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            initializeBitcoinChart(this.dataset.time);
        });
    });
    
    // Add event listeners to filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterCryptoTable(this.dataset.filter);
        });
    });
    
    // Add event listener to search input
    document.getElementById('crypto-search').addEventListener('input', function() {
        searchCryptoTable(this.value);
    });
});

// Fetch cryptocurrency data
async function fetchCryptocurrencyData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h,7d');
        const data = await response.json();
        
        // Store data globally for filtering
        window.cryptoData = data;
        
        // Render the table
        renderCryptoTable(data);
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        document.getElementById('crypto-table-body').innerHTML = `
            <tr>
                <td colspan="7" class="px-4 py-8 text-center text-red-400">
                    Failed to load cryptocurrency data. Please try again later.
                </td>
            </tr>
        `;
    }
}

// Render cryptocurrency table
function renderCryptoTable(data) {
    const tableBody = document.getElementById('crypto-table-body');
    tableBody.innerHTML = '';
    
    data.forEach((crypto, index) => {
        const priceChange24hClass = crypto.price_change_percentage_24h >= 0 ? 'price-up' : 'price-down';
        const priceChange7dClass = crypto.price_change_percentage_7d_in_currency >= 0 ? 'price-up' : 'price-down';
        
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-800';
        row.innerHTML = `
            <td class="px-4 py-4">${index + 1}</td>
            <td class="px-4 py-4">
                <div class="flex items-center">
                    <img src="${crypto.image}" alt="${crypto.name}" class="w-6 h-6 mr-3">
                    <div>
                        <div class="font-medium">${crypto.name}</div>
                        <div class="text-sm text-gray-400">${crypto.symbol.toUpperCase()}</div>
                    </div>
                </div>
            </td>
            <td class="px-4 py-4 font-medium">${formatCurrency(crypto.current_price)}</td>
            <td class="px-4 py-4 ${priceChange24hClass}">${crypto.price_change_percentage_24h >= 0 ? '+' : ''}${crypto.price_change_percentage_24h.toFixed(2)}%</td>
            <td class="px-4 py-4 ${priceChange7dClass}">${crypto.price_change_percentage_7d_in_currency >= 0 ? '+' : ''}${crypto.price_change_percentage_7d_in_currency.toFixed(2)}%</td>
            <td class="px-4 py-4">${formatNumber(crypto.market_cap)}</td>
            <td class="px-4 py-4">${formatNumber(crypto.total_volume)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Filter cryptocurrency table
function filterCryptoTable(filter) {
    if (!window.cryptoData) return;
    
    let filteredData = [...window.cryptoData];
    
    if (filter === 'gainers') {
        filteredData = filteredData.filter(crypto => crypto.price_change_percentage_24h > 0)
            .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    } else if (filter === 'losers') {
        filteredData = filteredData.filter(crypto => crypto.price_change_percentage_24h < 0)
            .sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
    }
    
    renderCryptoTable(filteredData);
}

// Search cryptocurrency table
function searchCryptoTable(query) {
    if (!window.cryptoData) return;
    
    query = query.toLowerCase().trim();
    
    if (query === '') {
        renderCryptoTable(window.cryptoData);
        return;
    }
    
    const filteredData = window.cryptoData.filter(crypto => 
        crypto.name.toLowerCase().includes(query) || 
        crypto.symbol.toLowerCase().includes(query)
    );
    
    renderCryptoTable(filteredData);
}

// Initialize Bitcoin chart
async function initializeBitcoinChart(timeframe) {
    try {
        let days;
        switch (timeframe) {
            case '24h': days = 1; break;
            case '7d': days = 7; break;
            case '30d': days = 30; break;
            case '90d': days = 90; break;
            case '1y': days = 365; break;
            default: days = 1;
        }
        
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`);
        const data = await response.json();
        
        const prices = data.prices;
        const labels = prices.map(price => {
            const date = new Date(price[0]);
            if (days === 1) {
                return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            } else if (days <= 30) {
                return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
            } else {
                return date.toLocaleDateString([], { month: 'short', year: '2-digit' });
            }
        });
        
        const priceValues = prices.map(price => price[1]);
        
        // Destroy previous chart if it exists
        if (window.bitcoinChart) {
            window.bitcoinChart.destroy();
        }
        
        // Create new chart
        const ctx = document.getElementById('bitcoin-chart').getContext('2d');
        window.bitcoinChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Bitcoin Price (USD)',
                    data: priceValues,
                    backgroundColor: 'rgba(20, 184, 166, 0.1)',
                    borderColor: 'rgba(20, 184, 166, 1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(20, 184, 166, 1)',
                    pointHoverBorderColor: '#fff',
                    fill: true,
                    tension: 0.1
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
                        mode: 'index',
                        intersect: false,
                        backgroundColor: 'rgba(17, 24, 39, 0.9)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: 'rgba(55, 65, 81, 1)',
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return `Price: ${formatCurrency(context.parsed.y)}`;
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
                            color: 'rgba(156, 163, 175, 1)',
                            maxRotation: 0,
                            maxTicksLimit: 8
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
                },
                interaction: {
                    mode: 'nearest',
                    intersect: false
                }
            }
        });
    } catch (error) {
        console.error('Error fetching Bitcoin chart data:', error);
        document.getElementById('bitcoin-chart').innerHTML = `
            <div class="flex items-center justify-center h-full">
                <p class="text-red-400">Failed to load chart data. Please try again later.</p>
            </div>
        `;
    }
}