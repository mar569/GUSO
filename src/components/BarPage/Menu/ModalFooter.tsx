import { memo } from 'react';

const ModalFooter = ({ onClose }: { onClose: () => void }) => (
    <div className="bg-black p-4 border-t flex flex-col sm:flex-row justify-between items-center">
        <div className="font-light text-white text-sm mb-2 sm:mb-0">
            Все цены указаны в рублях с учетом НДС
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
            <a
                href="/public/menu_aero.pdf"
                download
                className="bg-transparent hover:bg-[#694e78] duration-500 border border-[#b17e36] text-white px-4 py-2 rounded-lg text-sm font-light transition-colors whitespace-nowrap"
            >
                Скачать PDF
            </a>
            <a
                href="/public/menu_aero.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-[#694e78] duration-500 border border-[#413452] text-white px-4 py-2 rounded-lg text-sm font-light transition-colors whitespace-nowrap"
            >
                Открыть в новой вкладке
            </a>
            <button
                onClick={onClose}
                className="bg-transparent hover:bg-[#694e78] duration-500 cursor-pointer border border-[#7D34EB] text-white px-4 py-2 rounded-lg text-sm font-lighttransition-colors whitespace-nowrap"
            >
                Закрыть
            </button>
        </div>
    </div>
);

export default memo(ModalFooter);
