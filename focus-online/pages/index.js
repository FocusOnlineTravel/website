import { gql, useQuery } from '@apollo/client';

export default function Home() {
  const { data, loading, error } = useQuery(home_page);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data?.page?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data?.page?.content }} />
    </div>
  );
}

const home_page = gql`
  query homePage {
    page(id: "home", idType: URI) {
      title
      content
    }
  }
`;