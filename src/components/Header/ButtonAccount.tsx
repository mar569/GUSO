import { IoIosArrowRoundUp } from "react-icons/io";

const ButtonAccount = () => {
    return (
        <button className="bg-gradient-to-b from-[#8a7c92] to-[#436237] flex  text-white py-2 px-6 rounded-xl cursor-pointer hover:text-black hover:bg-[#505050] duration-500 w-fit"
            style={{ fontFamily: 'Poppins' }}>
            Войти в аккаунт
            <IoIosArrowRoundUp className="ml-2 rotate-45" size={24} />
        </button>
    )
}

export default ButtonAccount