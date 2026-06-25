import Header from "../../components/Header/Header";
import AppTitle from "../../components/AppTitle/AppTitle";

const AddMovie = () => {
  return (
    <div className="min-h-screen w-full ">
      <Header />
      <AppTitle
        title="Add New Movie"
        description="Fill in the details below to add a movie to the catalog"
        text={<span className="text-7xl">🎬</span>}
      />
    </div>
  );
};

export default AddMovie;
