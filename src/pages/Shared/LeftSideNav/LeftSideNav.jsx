import Categories from "../../Cetegories/Categories";


const LeftSideNav = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">All Category</h2>
            <Categories></Categories>
        </div>
    );
};

export default LeftSideNav;