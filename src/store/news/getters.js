export default {
    headline: state => {
        let headline = state.data.items[state.curIdx];

        if (typeof headline === 'undefined') {
            window.location.reload();
        }
        return headline;
    }
}