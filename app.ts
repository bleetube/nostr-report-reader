import NDK, { NDKEvent, NDKUser, NDKFilter } from 'npm:@nostr-dev-kit/ndk';

const ndk = new NDK({
    explicitRelayUrls: [
        "wss://bitcoiner.social",
    ],
});

await ndk.connect();

const now = new Date();
// Subtract 24 hours (1 day) from the current time
// 1 day = 24 hours = 1440 minutes = 86400 seconds = 86400000 milliseconds
const oneWeekAgo = new Date(now.getTime() - (86400000 * 7));
// Convert to Unix timestamp (in seconds)
const oneWeekAgoUnixTimestamp = Math.floor(oneWeekAgo.getTime() / 1000);

const reportFilter: NDKFilter = { "kinds": [1984], since: oneWeekAgoUnixTimestamp }

const reports: Set<NDKEvent> = await ndk.fetchEvents(reportFilter);

const pTagCounts = new Map();

for (const report of reports) {
    // Find all 'p' tags
    const pTags = report.tags.filter(tag => tag[0] === "p");

    for (const pTag of pTags) {
        const publicKey = pTag[1]; // Assuming the public key is the second element

        // If the public key is already in the map, increment its count
        if (pTagCounts.has(publicKey)) {
            pTagCounts.set(publicKey, pTagCounts.get(publicKey) + 1);
        } else {
            // If the public key is not in the map, add it with a count of 1
            pTagCounts.set(publicKey, 1);
        }
    }
}

// Start with npubs with the most reports
const sortedPTags = Array.from(pTagCounts).sort((a, b) => b[1] - a[1]);
sortedPTags.forEach(([publicKey, count]) => {
    if(count>1) {
        for (const report of reports) {
            // Check if this report contains the target pTag
            const containsTargetPTag = report.tags.some(tag => tag[0] === "p" && tag[1] === targetPTag);

            // If it does, log the content of the report
            if (containsTargetPTag) {
                console.log(report.content);
            }
        }
    }
});
