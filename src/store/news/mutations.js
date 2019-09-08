export default {
    set: (state, {lastBuildDate, items}) => {
        let d = {
            lastBuildDate,
            items
        }
        state.data = d;
    },
    next: (state) => {
        if(state.curIdx == (state.data.items.length-1))
            state.curIdx = 0;
        else
            state.curIdx += 1;
    }
}