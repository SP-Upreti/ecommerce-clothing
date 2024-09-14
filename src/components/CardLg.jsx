import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css'

export default function CardLg({ title, features, img }) {
    return (
        <div className="sm:w-[80%] mx-auto  sm:h-[350px]  relative bg-black">
            <img src={img} alt="" className="  w-full" />
        </div>
    )
}