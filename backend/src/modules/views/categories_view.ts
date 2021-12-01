import { Category } from "../Notices/entities/Category";

export default {
    render(category: Category) {
        return {
            id: category.id,
            name: category.name,
            description: category.description,
            icon: category.icon
        }
    },

    renderMany(categories: Category[]) {
        return categories.map(category => this.render(category))
    }
}