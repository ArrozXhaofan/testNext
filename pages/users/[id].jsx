import { data } from 'autoprefixer';
import React from 'react'

function post({ data }) {

    console.log(data);

    return (

        <div className='min-h-screen bg-blue-950 text-white flex flex-col items-center justify-center gap-3'>

            <h1> {data.id} </h1>
            <h1> {data.title} </h1>
            <h1> {data.completed} </h1>

        </div>
    )
}

export default post

export async function getStaticPaths(){

    try {

        const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
        const data = await res.json()

        const paths = data.map(({id}) => ({params:{id:`${id}`}}))

        return{
            paths,
            fallback:false
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getStaticProps({params}){

    try {
        
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
        const data = await res.json()

        return{
            props: {
                data
            }
        }

    } catch (error) {
        console.log(error);
    }
}