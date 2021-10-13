const mockData = {
    list: new Array(20).fill({text: 'foo'})
};

export default new class {
    load() {
        return new Promise(resolve => setTimeout(() => resolve(mockData), 2000))
    }
}
