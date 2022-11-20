import React from 'react'

import BookmarkCard from '../components/Cards/BookmarkCard'
import PageLayout from '../components/PageLayout'

const Next = ({ nextData }: any) => {
    return (
        <PageLayout title='Next JS 101'>
            <div style={{ width: "744px" }}>
                <h2>Next JS 101</h2>
                {nextData.items.map((d: unknown, i: number) => (
                    <BookmarkCard key={i} d={d} />
                ))}
            </div>
        </PageLayout>
    )
}

export default Next



export async function getStaticProps() {
    const topicID = "28779961";
    const raindropUrl = `https://api.raindrop.io/rest/v1/raindrops/${topicID}`;

    const options = {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP}`,
        },
    };

    const res = await fetch(raindropUrl, options);
    const nextData = await res.json();

    return {
        props: {
            nextData,
        },
    };
}
