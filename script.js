const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {

    const container = $('.container');
    const dialog = $('.dialog');
    const button = $('.btn-ok');
    const btnDisagree = $('.disagree');
    const heart = $('.hearth');

    return {
        init() {
            button.onclick = () => {
                container.style.display = 'block';
                dialog.style.display = 'none';
            }
            btnDisagree.onmousemove = (e) => {
                let x = Math.round(Math.random() * screen.width / 1.5) + 200;
                let y = Math.round(Math.random() * screen.height / 1.5);
                if (x > screen.width) {
                    x -= 100;
                }
                if (y > screen.height) {
                    y -= 100;
                }
                btnDisagree.style.transform = `translate(${x}px, ${y}px)`;
            }
            heart.onclick = (e) => {
                setTimeout(() => {
                    alert('cxqntnt');
                }, 2000);
            }
            container.style.display = 'none';
        },
    }
})();

app.init();