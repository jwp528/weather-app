export default {
    headline: state => {
        let headline = state.data.items[state.curIdx];

        if (typeof headline === 'undefined') {
            window.location.reload();
        }
        return headline;
    },
    currentPhoto: state => {
        const imgSrc = require(`@/assets/anniversary/${state.currentPhoto}.jpg`);
        const img = new Image();
        img.src = imgSrc;

        const orientation = img.height > img.width ? 'portrait' : 'landscape';

        const data = {
            src: imgSrc,
            orientation
        }

        return data;
    }
}