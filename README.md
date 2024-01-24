# nostr report auditor

Aggregate reports by npub for a quick review.

## Running

```shell
deno run -A app.ts
```

## weird report types

A lot of reports look like this:

```js
{
  'content': 'This content has been reported for profanity using NIP-69 vocabulary https://github.com/nostr-protocol/nips/pull/457',
  'created_at': 1700766254,
  'id': 'b1b1196a7132aa98eb9df1b7b61ac29d6e404115460913a6c9baddaf88040139',
  'kind': 1984,
  'pubkey': 'add5190be4673768546c18b565da3a699241f0e06a75e2dbc03f18663d1b7b27',
  'sig': '5811c18486e17b54a6bda0c1f5a121e373caf7bfd5ab2955c399622f5cdb586b82c0aefade5aa373ab935b1f5ee17c1a9aa6c9f1b451388b7eb8a1624ae236d5',
  'tags': [
    ['e',
    '1ba0c6210889f33dbb23da97f42d0b3596c626ff2facc809edd57d9e0d39041e',
    'profanity'],
    ['L',
    'MOD'],
    ['l',
    'IH',
    'MOD',
    '{"confidence":0.6232141256332397}'],
    ['l',
    'IL-har',
    'MOD',
    '{"confidence":0.9142866134643555}']
  ]
}
```

Feels like some automated heuristic thing ("confidence" levels), so ignoring it for now.

## resources

* [NIP-56](https://github.com/nostr-protocol/nips/blob/master/56.md)
* [NIP-69](https://github.com/nostr-protocol/nips/pull/457)
