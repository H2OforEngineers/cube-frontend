const initialState = {
    categories: [
        { category: 'electrical', name: "ELECTRICAL", description: 'Here you can find a lot of electrical products and services ' },
        { category: 'civil', name: "CIVIL", description: 'Here you can find a lot of CIVIL products and services' },
        { category: 'architect', name: "ARCHITECT", description: 'Here you can find a lot of ARCHITECT products and services' },
        { category: 'mechanic', name: "MECHANIC", description: 'Here you can find a lot of MECHANIC products and services' },
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