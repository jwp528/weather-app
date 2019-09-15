export default{
    headline: state => {
        return state.data.items[state.curIdx];
    }
}