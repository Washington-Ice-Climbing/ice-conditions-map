import { Popup } from "react-mapbox-gl";
import Link from "next/link";
import Stars from "./Stars";

export default function MapPopup({route}) {
    return (
        <Popup coordinates={route.coordinates}>
            <div>
                <Link href="/routes/[rid]" as={`/routes/${route.rid}`}>
                    <h3><a>{route.getTitle()}</a></h3>
                </Link>
                <h4>{route.getSubtitle()}</h4>
                <Stars numStars={route.stars}/>
            </div>

        </Popup>
    )
}