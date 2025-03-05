import { gql, useQuery } from '@apollo/client';
import Link from "next/link";
import Layout from "../components/layout";

const ACF_TEST_PAGE = gql`
  query getClients {
    clients {
      nodes {
        clientFields {
          clientName
        }
        databaseId
        slug
      }
    }
  }
`;

export default function Acf() {
  const { data, loading, error } = useQuery(ACF_TEST_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Layout>
      <ul>
        {data.clients.nodes.map((client) => (
          <li key={client.databaseId}>
            <Link href={`/clients/${client.slug}`}>
              <p>{client.clientFields?.clientName}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

