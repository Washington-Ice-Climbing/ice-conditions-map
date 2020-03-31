import fetch from 'node-fetch'

export default function Route({route, status}) {

    if (status != 200) return <p>{route.message}</p>;
    return (
        <div>
            <p>Send it! {route.rid}</p>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const response = await fetch(`http://localhost:3000/api/routes/${params.rid}`)
    const route = await response.json()

    return {
        props: {route: route, status: response.status}
    }
}