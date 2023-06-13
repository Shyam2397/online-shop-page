import ItemCard from "../component/itemcard";
import NavScrollExample from "../component/topnav";

export default function BasePage(){
    return(
        <div className="flex flex-col bg-black w-full border-opacity-50">
            <div className="grid h-20 card mx-5 mt-4">
                <NavScrollExample/>
            </div>
            <div className="divider"></div>
            <div className="grid card place-items-center bg-black text-white">
                <h1 className="my-5">MEGA SALE</h1>
                <p className="my-5">End of season</p>
            </div>
            <div className="divider"></div>
            <div className="flex flex-row flex-wrap gap-4 m-5">
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>

            </div>
        </div>
    )
}