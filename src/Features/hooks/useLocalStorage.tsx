import { useState } from 'react';

/**
 * Хук для работы с localStorage
 * @param key - ключ в localStorage
 * @param initialValue - начальное значение, которое будет установлено, если в localStorage нет данных
 * @returns [value, setValue] - текущие значение и функция для обновления
 */
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
   // Получаем сохранённое значение из localStorage при монтировании компонента
   const [storedValue, setStoredValue] = useState<T>(() => {
      try {
         const item = window.localStorage.getItem(key);
         return item ? JSON.parse(item) : initialValue;
      } catch (error) {
         console.error("Ошибка при чтении из localStorage", error);
         return initialValue;
      }
   });

   // Сохраняем новое значение в localStorage при его изменении
   const setValue = (value: T) => {
      try {
         setStoredValue(value);
         window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
         console.error("Ошибка при записи в localStorage", error);
      }
   };

   return [storedValue, setValue];
}

export default useLocalStorage;
