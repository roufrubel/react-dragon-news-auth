import Categories from "../../Cetegories/Categories";


const LeftSideNav = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">All Caterogy</h2>
            <button className="btn btn-neutral w-full">National News</button>
            <Categories></Categories>
        </div>
    );
};

export default LeftSideNav;