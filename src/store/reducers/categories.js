const initialState = {
    categories: [
        { category: 'electrical', name: "ELECTRICAL", description: 'Here you can find a lot of Electronic products' },
        { category: 'civil', name: "CIVIL", description: 'Here you can find a lot of MOBILE PHONES' },
        { category: 'architect', name: "ARCHITECT", description: 'Here you can find a lot of food' },
        { category: 'mechanic', name: "MECHANIC", description: 'Here you can find a lot of food' },
    ],
    activeCategory: {},
}
export default function reducer(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case 'ChangeActive':
            let modified = {};
            state.categories.forEach(item => {
                if (item.category === payload) {
                    modified = item;
                }
            });
            return {
                categories: state.categories,
                activeCategory: modified
            };
        default:
            return state;
    }
}