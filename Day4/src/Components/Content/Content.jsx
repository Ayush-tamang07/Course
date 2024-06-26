import { Link } from "react-router-dom";
function Content() {
  const description = "The Avengers is a team of superheroes in the Marvel Comics universe, brought together to combat threats that no single hero can face alone. Founded by Iron Man, Thor, Hulk, Ant-Man, and Wasp, the team features an evolving roster that includes iconic characters like Captain America, Black Widow, and Hawkeye. The Avengers are known for their unity, strength, and diverse abilities, making them one of the most formidable forces against evil in the Marvel Universe. Their stories span comic books, animated series, and blockbuster films, capturing the imagination of fans worldwide.";

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://images.thedirect.com/media/article_full/avengers-status.jpg"
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Avengers
            </h1>
            <p class="mb-8 leading-relaxed">
                {description}
            </p>
            <div class="flex justify-center">
              <Link to="/editForm">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Edit
                </button>
              </Link>

              <Link to="/uploadForm">
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Upload
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
