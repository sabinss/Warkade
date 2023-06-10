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

function fetchMyQuery(walletAccountInfo: any) {
  const address = walletAccountInfo?.address
    ? walletAccountInfo?.address
    : '0x0f4757e900aa6104b364b021c7d1c515b7715e13fda2e7960605068a1f1d349b';
  const operationsDoc = `
  query MyQuery {
    current_token_ownerships_v2(
      where: {owner_address: {_eq: "${address}"}, current_token_data: {current_collection: {collection_name: {_eq: "Warcade"}}}}
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

export async function startFetchMyQuery(
  state: any,
  callback: (mintImage: any) => any
) {
  const { walletAccountInfo } = state;
  const { errors, data } = await fetchMyQuery(walletAccountInfo);
  let mintImages = [];
  if (errors) {
    // handle those errors like a pro
    callback(null);
  } else if (data) {
    // do something great with this precious data
    mintImages = data.current_token_ownerships_v2.map(async (mint: any) => {
      const {
        current_token_data: { token_uri },
      } = mint;
      const response = await fetch(token_uri);
      const mintImage = await response.json();

      return mintImage;
    });
    const finalMintImages = await Promise.all(mintImages);
    console.log('finalMintImages', finalMintImages);
    callback(finalMintImages);
  }
}
