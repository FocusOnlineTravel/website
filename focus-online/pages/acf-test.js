import { gql, useQuery } from '@apollo/client';

export default function Acf() {
  const { data, loading, error } = useQuery(acf_test_page);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{data?.page?.title}</h2>
    </div>
  );
}

const acf_test_page = gql`
  query acfTestPage {
    page(id: "acf-test", idType: URI) {
      title
      content
    }
  }
`;