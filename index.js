let topPaper = 1;

class Paper {
    holdingPaper = false;

    prevX = 0;
    prevY = 0;
    currentX = 0;
    currentY = 0;
    velX = 0;
    velY = 0;


    init(paper) {
        
        paper.addEventListener('mousedown', (e) => {
            this.holdingPaper = true;

            this.prevX = e.clientX;
            this.prevY = e.clientY;
            paper.style.zIndex = topPaper;
            topPaper++;
        })
        
        
        document.addEventListener('mousemove', (e) => {
            
            if(this.holdingPaper) {
                this.velX = e.clientX - this.prevX;
                this.velY = e.clientY - this.prevY;
                this.currentX += this.velX;
                this.currentY += this.velY;
                console.log(this.currentX, this.currentY);
                paper.style.transform = `translateX(${this.currentX}px) translateY(${this.currentY}px)`;
                this.prevX += this.velX;
                this.prevY += this.velY;
            }

        })

        window.addEventListener('mouseup', (e) => {
            this.holdingPaper = false;
        })
    }
}


Array.from(document.querySelectorAll('.paper')).forEach(paper => {
    const p = new Paper();
    p.init(paper);
})