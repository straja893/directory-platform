import { auth } from "@/auth";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const session = await auth();

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        name: "John Doe",
        _id: 1,
      },
      _id: 1,
      description: "This is description",
      image: "https://placehold.co/48x48",
      category: "Robots",
      title: "We robots",
    },
  ];

  return (
    <>
      {session && session?.user ? (
        <>
          <section className="pink_container">
            <h1 className="heading">
              Pitch Your Startup <br />
              Connect With Entrepreneurs
            </h1>
            <p className="sub-heading !max-w-3xl">
              Submit Ideas, Vote on Peaches, and Get Noticed in Virtual
              Competitions.
            </p>
            <SearchForm query={query} />
          </section>

          <section className="section_container">
            <p className="text-30-semibold">
              {query ? `Search result for "${query}"` : `All startups`}
            </p>
            <ul className="mt7 card_grid">
              {posts.length > 0 ? (
                posts.map((post: StartupCardType) => (
                  <StartupCard key={post?._id} post={post} />
                ))
              ) : (
                <p className="no-results">No startups found</p>
              )}
            </ul>
          </section>
        </>
      ) : (
        <section className="pink_container">
          <h1 className="heading"> Please log in </h1>
        </section>
      )}
    </>
  );
}
