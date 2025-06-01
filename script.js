//各セクションに遷移
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.header-nav a[href^="#"]'); // '#'で始まるhrefを持つすべてのaタグを選択
    // または、ナビゲーションリンクがセクションのIDと一致するようにhref属性を修正してください。
    // 例: <li class="nav-item"><a href="#ourvision">Our Vision</a></li>

    for (const link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    }
});


// スムーズスクロール,フェードインアニメーション
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.section-wrap'); // フェードインさせたい要素を選択

    const observerOptions = {
        root: null, // ビューポートをルートとする
        rootMargin: '0px',
        threshold: 0.1 // 要素の10%が見えたらコールバックを実行
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'is-visible');
                observer.unobserve(entry.target); // 一度アニメーションしたら監視を停止
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        element.classList.add('fade-in'); // まずは初期状態のクラスを追加
        observer.observe(element);
    });
});


 //トップに戻る
document.addEventListener('DOMContentLoaded', () => {

    const pageTopBtn = document.getElementById('page-top');

    // スクロールイベントを監視
    window.addEventListener('scroll', () => {
        // ページのスクロール位置が一定量を超えたらボタンを表示
        if (window.scrollY > 200) { // 例: 200pxスクロールしたら表示
            pageTopBtn.classList.add('show');
        } else {
            pageTopBtn.classList.remove('show');
        }
    });

    // ボタンがクリックされたらページトップへスムーズスクロール
    pageTopBtn.addEventListener('click', (event) => {
        event.preventDefault(); // デフォルトのアンカーリンクの動作をキャンセル
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
