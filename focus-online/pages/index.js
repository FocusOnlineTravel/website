import { gql, useQuery } from '@apollo/client';

const GET_HOME_PAGE = gql`
  query GetHomePage {
    page(id: "home", idType: URI) {
      title
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(GET_HOME_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{data?.page?.title}</h2>
    </div>
  );
}