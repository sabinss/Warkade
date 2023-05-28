async function fetchGraphQL(
  operationsDoc: any,
  operationName: any,
  variables: any
) {
  const result = await fetch(
    'https://indexer-testnet.staging.gcp.aptosdev.com/v1/graphql',
    {
      method: 'POST',
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName,
      }),
    }
  );

  return await result.json();
}

function getOperationDesObj(walletAccountInfo: any) {
  let ownerAddress = walletAccountInfo?.address ?? '';

  const operationsDoc = `
    query MyQuery {
      current_token_ownerships_v2(
        where: {owner_address: {_eq: "${ownerAddress}"}, current_token_data: {current_collection: {collection_name: {_eq: "Warcade"}}}}
      ) {
        current_token_data {
          collection_id
          current_collection {
            token_uri
            collection_name
          }
        }
      }
    }
  `;
  return operationsDoc;
}

function fetchMyQuery(walletAccountInfo: any) {
  return fetchGraphQL(getOperationDesObj(walletAccountInfo), 'MyQuery', {});
}

export async function startFetchMyQuery({ walletAccountInfo }: any) {
  const { errors, data } = await fetchMyQuery(walletAccountInfo);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
