import InfoHero from "../components/InfoHero";
import InfoStats from "../components/InfoStats";
import Tips from "../components/Tips"

function Info(props) {
    return (
        <div className="Info">
           <InfoHero />
           <InfoStats />
           <Tips />
        </div>
    )
}

export default Info;