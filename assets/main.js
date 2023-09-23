let second = 30;
const counter = document.querySelector(".counter");
const btn = document.querySelector(".btn");
function delay(cb, mls) {
    const startTime = performance.now();
    function check(currentTime) {
        const lastTime = currentTime - startTime;
        if (lastTime >= mls) {
            cb();
        } else {
            requestAnimationFrame(check);
        }
    }
    requestAnimationFrame(check);
}

function countDown() {
    counter.innerHTML = second;
    if (second > 0) {
        btn.style.backgroundColor = "#b6b6b6";
        btn.style.color = "gray";

        delay(() => {
            --second;
            countDown();
        }, 1000);
    } else {
        btn.style.cursor = "pointer";
        btn.style.backgroundColor = "#03bdf0";
        btn.style.color = "#fff";

        btn.addEventListener("click", () => {
            window.location.href = "https://fullstack.edu.vn";
        });
    }
}
countDown();
