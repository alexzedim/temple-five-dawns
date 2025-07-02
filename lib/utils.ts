
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const toDate = (date: string) => new Date(date).toLocaleDateString('ru-RU');

export const categoryToPath = (category: string) => category.split('/').map(s => capitalize(s)).join(' / ');
