export default {
    set: (state, { lastBuildDate, items }) => {
        let d = {
            lastBuildDate,
            items
        }
        state.data = d;
    }
}