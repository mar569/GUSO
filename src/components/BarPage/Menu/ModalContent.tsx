import { memo, useMemo, lazy, Suspense } from 'react';
import LoadingSpinner from '../../Fps/LoadingSpinner/LoadingSpinner';

const MenuItem = lazy(() => import('./MenuItem'));

const menuSections = [
    {
        category: 'Кофейная карта',
        items: [
            { name: 'Эспрессо', price: '150 ₽', volume: '30 мл' },
            { name: 'Американо', price: '180 ₽', volume: '200 мл' },
            { name: 'Капучино', price: '220 ₽', volume: '200 мл' },
            { name: 'Латте', price: '240 ₽', volume: '250 мл' },
            { name: 'Раф', price: '260 ₽', volume: '250 мл' },
            { name: 'Флэт уайт', price: '280 ₽', volume: '200 мл' },
        ]
    },
    {
        category: 'Коктейли',
        items: [
            { name: 'Spell', price: '750 ₽', details: 'Джин на анчане, персик, груша, тоник', volume: '190 мл' },
            { name: 'San Andreas', price: '750 ₽', details: 'Тропические фрукты, клубника, кокос, игристое', volume: '140 мл' },
            { name: 'Areana', price: '750 ₽', details: 'Водка, бузина, черника, лайм, сухой вермут', volume: '100 мл' },
            { name: 'Overtime', price: '750 ₽', details: 'Виски, вермут манго, какао, груша', volume: '90 мл' },
        ]
    },
    {
        category: 'Вино',
        items: [
            { name: 'Cava, Dos Caprichos', price: '3300 ₽', details: 'Испания / сухое-игристое', volume: '750 мл' },
            { name: 'Рислинг / Пино Блан', price: '2350 ₽', details: 'Россия / сухое-белое', volume: '750 мл' },
            { name: 'Zweigelt, Nigi', price: '4700 ₽', details: 'Австрия / сухое-красное', volume: '750 мл' },
            { name: 'Мальбек / мерло', price: '2550 ₽', details: 'Россия / сухое-rose', volume: '750 мл' },
        ]
    },
    {
        category: 'Лимонады',
        items: [
            { name: 'Лимон-лайм', price: '400 ₽', volume: '400 мл' },
            { name: 'Киви-яблоко', price: '400 ₽', volume: '400 мл' },
            { name: 'Ягодный', price: '400 ₽', volume: '400 мл' },
            { name: 'Манго-маракуя', price: '400 ₽', volume: '400 мл' }
        ]
    },
    {
        category: 'Основные блюда',
        items: [
            { name: 'Куриный суп-лапша', price: '590 ₽', volume: '300 г' },
            { name: 'Удон с курицей', price: '490 ₽', volume: '250 г' },
            { name: 'Паста с море-тами', price: '640 ₽', volume: '250 г' },
            { name: 'Карбонара', price: '490 ₽', volume: '230 г' }
        ]
    },
    {
        category: 'Пицца',
        items: [
            { name: 'Баварская мясная', price: '800 ₽', volume: '465 г' },
            { name: 'Ветчина-грибы', price: '800 ₽', volume: '420 г' },
            { name: 'Груша-горгонзола', price: '800 ₽', volume: '450 г' },
            { name: 'Пепперони', price: '800 ₽', volume: '400 г' },
        ]
    },
    {
        category: 'Десерты',
        items: [
            { name: 'Мороженное', price: '200 / 300 ₽', details: 'Шоколад / карамель / клубника', volume: '3 / 6 шт' },
            { name: 'Брауни', price: '350 ₽', volume: '120 г' },
            { name: 'Чизкейк', price: '350 ₽', volume: '120 г' },
            { name: 'Наполеон', price: '540 ₽', volume: '180 г' },
        ]
    }
];




const ModalContent = memo(() => {
    const sections = useMemo(() => menuSections, []);

    return (
        <div className="p-6 overflow-y-auto max-h-[46vh] md:max-h-[70vh] custom-scroll ">
            {sections.map((section) => (
                <section key={section.category} className="mb-8">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-4 pb-2 border-b-2 border-[#B734EB]"
                        style={{ fontFamily: 'Permanent Marker, cursive' }}>
                        {section.category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {section.items.map((item) => (
                            <Suspense key={`${section.category}-${item.name}`} fallback={<LoadingSpinner />}>
                                <MenuItem {...item} />
                            </Suspense>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
});

export default ModalContent;

