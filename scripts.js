let lastScrollTop = 0; // Son kaydırma pozisyonunu saklar
let isMenuVisible = true; // Menünün görünürlük durumunu takip eder
const topNav = document.querySelector('.top-nav'); // Menü elemanını seçer
let hideTimeout; // Menüyü gizlemek için timeout

function handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Şu anki kaydırma pozisyonu

    if (currentScroll > lastScrollTop) {
        // Kullanıcı aşağı kaydırıyorsa
        clearTimeout(hideTimeout); // Menü gizleme zamanlayıcısını temizle
        if (isMenuVisible) {
            // Menü hala görünüyse
            hideTimeout = setTimeout(() => {
                topNav.classList.add('hidden'); // Menü gizlenir
                isMenuVisible = false; // Menü görünür değil
            }, 700); // 2000ms (2 saniye) sonra gizler
        }
    } else {
        // Kullanıcı yukarı kaydırıyorsa
        clearTimeout(hideTimeout); // Menü gizleme zamanlayıcısını temizle
        if (!isMenuVisible) {
            // Menü gizli ise göster
            topNav.classList.remove('hidden'); // Menü tekrar görünür
            isMenuVisible = true; // Menü görünür
        }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Kaydırma pozisyonunu günceller
}

window.addEventListener('scroll', handleScroll);