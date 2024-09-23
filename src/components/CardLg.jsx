import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css'
import { FaCheck, FaCheckCircle } from "react-icons/fa";

export default function CardLg({ title, features, img }) {
    return (
        <div className=" h-fit  screen-920:h-[400px] w-[100%]    overflow-hidden bg-gradient-to-r from-[#004242] to-[#0c4760]">
            <img src={`hero${img + 1}.jpg`} alt="" />
        </div>
    )
}