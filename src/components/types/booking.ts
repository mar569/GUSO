/**
 * Основные типы для системы бронирования
 */

// Тип ключа зоны - возможные варианты зон для бронирования
export type ZoneKey = 'standard' | 'comfort' | 'vip' | 'bootcamp' | 'vip-pc';

// Интерфейс временного слота с ценой
export interface TimeSlot {
  time: string; // Формат времени, например "12:00"
  price: string; // Стоимость, например "500₽"
}

// Полные данные о зоне бронирования
export interface ZoneData {
  id: ZoneKey; // Идентификатор зоны
  name: string; // Название зоны
  mainImage: string; // URL основного изображения зоны
  prices: TimeSlot[]; // Доступные временные слоты с ценами
}

// Формат данных для создания бронирования
export interface BookingRequest {
  zoneId: ZoneKey; // Идентификатор зоны
  name: string; // Имя клиента
  phone: string; // Телефон клиента
  date: string; // Дата в формате "YYYY-MM-DD"
  time: string; // Время в формате "HH:MM"
}

// Базовый интерфейс ответа API
export interface ApiResponse<T = unknown> {
  success: boolean; // Успешность запроса
  data?: T; // Данные ответа (опционально)
  error?: string; // Ошибка (если success=false)
}
