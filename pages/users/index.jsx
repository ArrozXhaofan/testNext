import React from 'react'
import Link from 'next/link'

function index({ data }) {
    return (
        <div className='min-h-screen bg-blue-950 text-white'>
            This is user

            <ul>
                {
                    data.map(({ id }) => (
                        <Link  key={id} href={`/users/${id}`}>
                            <li>{id}</li>
                        </Link>

                    ))
                }
            </ul>

        </div>
    )
}

export default index

export async function getStaticProps() {

    try {

        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json()

        return {
            props: {
                data
            }
        }

    } catch (error) {

    }
}