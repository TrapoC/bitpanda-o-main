// Main JavaScript file for BitInvest

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Format currency
function formatCurrency(amount, currency = 'USD', maximumFractionDigits = 2) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: maximumFractionDigits
    }).format(amount);
}

// Format percentage
function formatPercentage(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value / 100);
}

// Format large numbers
function formatNumber(num) {
    if (num >= 1e9) {
        return (num / 1e9).toFixed(2) + 'B';
    }
    if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + 'M';
    }
    if (num >= 1e3) {
        return (num / 1e3).toFixed(2) + 'K';
    }
    return num.toFixed(2);
}

// Fetch cryptocurrency data for homepage
if (document.getElementById('featured-cryptos')) {
    fetchFeaturedCryptos();
}

async function fetchFeaturedCryptos() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false');
        const data = await response.json();
        
        const featuredCryptosContainer = document.getElementById('featured-cryptos');
        featuredCryptosContainer.innerHTML = '';
        
        data.forEach(crypto => {
            const priceChangeClass = crypto.price_change_percentage_24h >= 0 ? 'price-up' : 'price-down';
            const priceChangeIcon = crypto.price_change_percentage_24h >= 0 ? '↑' : '↓';
            
            const cryptoCard = document.createElement('div');
            cryptoCard.className = 'bg-gray-800 rounded-lg p-6 shadow-lg hover-card';
            cryptoCard.innerHTML = `
                <div class="flex items-center mb-4">
                    <img src="${crypto.image}" alt="${crypto.name}" class="w-10 h-10 mr-3">
                    <h3 class="text-xl font-bold">${crypto.name} <span class="text-gray-400 text-sm">${crypto.symbol.toUpperCase()}</span></h3>
                </div>
                <div class="text-2xl font-bold mb-2">${formatCurrency(crypto.current_price)}</div>
                <div class="${priceChangeClass} flex items-center">
                    ${priceChangeIcon} ${Math.abs(crypto.price_change_percentage_24h).toFixed(2)}% (24h)
                </div>
            `;
            
            featuredCryptosContainer.appendChild(cryptoCard);
        });
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        document.getElementById('featured-cryptos').innerHTML = `
            <div class="col-span-1 md:col-span-3 text-center py-8">
                <p class="text-red-400">Failed to load cryptocurrency data. Please try again later.</p>
            </div>
        `;
    }
}