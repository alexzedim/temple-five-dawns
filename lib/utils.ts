
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const toDate = (date: string) => new Date(date).toLocaleDateString('ru-RU');

export const categoryToPath = (category: string) => category.split('/').map(s => capitalize(s)).join(' / ');

export const toCategoryName = (category: string) => category === 'general' ? 'Общие документы' :
  category.split('/').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' | ');

export const toCategoryNumber = <T>(categoryFiles: Array<T>): string => categoryFiles.length > 4 ? `${categoryFiles.length} документов в категории` :`${categoryFiles.length} документа в категории`
