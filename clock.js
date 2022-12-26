setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();

    hrotation = (30*htime) + (mtime/2);
    mrotation = 6*mtime;
    srotation = 6*stime;

    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minHand.style.transform = `rotate(${mrotation}deg)`;
    secHand.style.transform = `rotate(${srotation}deg)`;
}, 1000);

