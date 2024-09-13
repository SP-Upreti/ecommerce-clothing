import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css'

export default function CardLg({ title, features, img }) {
    return (
        <div className="sm:w-[80%] mx-auto  h-[350px]  relative bg-black">
            <img src={img} alt="" className="absolute top-0 left-0 w-full" />
        </div>
    )
}