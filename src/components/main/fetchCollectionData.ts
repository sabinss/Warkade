// async function fetchGraphQL(
//   operationsDoc: any,
//   operationName: any,
//   variables: any
// ) {
//   const result = await fetch(
//     'https://indexer-testnet.staging.gcp.aptosdev.com/v1/graphql',
//     {
//       method: 'POST',
//       body: JSON.stringify({
//         query: operationsDoc,
//         variables: variables,
//         operationName: operationName,
//       }),
//     }
//   );

//   return await result.json();
// }

// function getOperationDesObj(walletAccountInfo: any) {
//   // let ownerAddress = walletAccountInfo?.address ?? '';
//   let ownerAddress =
//     '0x468617bac464a57978946364bab8872a6ae2054bc7bcd83c82121a15083d4d19';

//   const operationsDoc = `
//     query MyQuery {
//       current_token_ownerships_v2(
//         where: {owner_address: {_eq: "${ownerAddress}"}, current_token_data: {current_collection: {collection_name: {_eq: "Warcade"}}}}
//       ) {
//         current_token_data {
//           collection_id
//           current_collection {
//             token_uri
//             collection_name
//           }
//         }
//       }
//     }
//   `;
//   return operationsDoc;
// }

// function fetchMyQuery(walletAccountInfo: any) {
//   return fetchGraphQL(getOperationDesObj(walletAccountInfo), 'MyQuery', {});
// }

// export async function startFetchMyQuery({ walletAccountInfo }: any) {
//   const { errors, data } = await fetchMyQuery(walletAccountInfo);

//   if (errors) {
//     // handle those errors like a pro
//     console.error(errors);
//   }

//   // do something great with this precious data
//   console.log(data);
// }

/*
This is an example snippet - you should consider tailoring it
to your service.
*/

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
const operationsDoc = `
  query MyQuery($ownerAddress: String!) {
    current_token_ownerships_v2(
      where: { owner_address: { _eq: $ownerAddress }, current_token_data: { current_collection: { collection_name: { _eq: "Warcade" } } } }
    ) {
      current_token_data {
        collection_id
        current_collection {
          collection_name
        }
        token_uri
      }
    }
  }
`;

function fetchMyQuery(ownerAddress: any) {
  const operationsDoc = `
  query MyQuery() {
    current_token_ownerships_v2(
      where: { owner_address: { _eq: "$ownerAddress "}, current_token_data: { current_collection: { collection_name: { _eq: "Warcade" } } } }
    ) {
      current_token_data {
        collection_id
        current_collection {
          collection_name
        }
        token_uri
      }
    }
  }
`;
  return fetchGraphQL(operationsDoc, 'MyQuery', {});
}

export async function startFetchMyQuery(xyz: any) {
  const ownerAddress =
    '0x468617bac464a57978946364bab8872a6ae2054bc7bcd83c82121a15083d4d19';

  const { errors, data } = await fetchMyQuery(ownerAddress);

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
