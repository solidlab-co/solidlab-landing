class OnScroll {
    constructor() {
        document.addEventListener('scroll', () => {
            console.log('hello');
            this.changeHeaderTransition('sl-trans-size', 100);
            this.changeHeaderTransition('sl-trans-background', 100);
        });
    }
    changeHeaderTransition(className, scrollBound) {
        const scroll = this.getCurrentScroll();
        const header = document.getElementsByClassName('sl-header')[0];
        console.log(header.classList);

        if (scroll >= scrollBound) {
            header.classList.add(className);
        } else {
            header.classList.remove(className);
        }
    }
    getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
}

const scroll = new OnScroll();