import { useState, useEffect } from "react";


const Bantu = () => {

    const [resourceType, setResourceType] = useState('');
    const [data, setData] = useState([]);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch data');
    //         }

    //         return await response.json();

    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         throw error;
    //     }
    // };

    // useEffect(() => {
    //     console.log(resourceType);
    //     const response = fetchData();
    //     setData(response);
    //     console.log(data);
    // }, [resourceType]);

    useEffect(() => {
        // const getData = async () => { 
        //     try {
        //         const fetchedData = await fetchData();
        //         setData(fetchedData);
        //     } catch (error) {
        //         console.error('Error setting data:', error);
        //     }
        // };
        // if (resourceType) {
        //     getData();
        // }

        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                let data = await response.json();
                setData(data);


            } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
            }
        };

        fetchData();

    }, [resourceType]);




    return (
        <>
            <button onClick={() => setResourceType("users")}>users</button>
            <button onClick={() => setResourceType("posts")}>posts</button>
            <button onClick={() => setResourceType("comments")}>comments</button>

            {data.length > 0 && data?.map(d =>
                <p key={d.id}>{d.name || d.title}</p>
            )}
        </>
    )
}

export default Bantu;