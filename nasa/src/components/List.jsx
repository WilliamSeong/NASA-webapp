import {useEffect, useState} from "react";
import styled from "styled-components";
import Card from "./Card.jsx";

const StyledContent = styled.div`
    align-content: center;
    width: 100%;
    margin: auto;
`

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: .75vw;
    text-align: center;
    width: 80vw;
    margin: auto;
    backgroundImage: "https://i.pinimg.com/originals/68/83/5a/68835abe5c1ac80c29201676d28431d8.gif";
`;

export default function List() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchData() {
            const rawData = await fetch("https://api.nasa.gov/planetary/apod?api_key=t8oBMDHqQbEgwdmfFSxfBnqCn0nYdN0a0AFUCycJ&count=10")
            setData(await rawData.json());
            setLoading(false);
        }


        fetchData()
            .then(() => console.log("good fetch"))
            .catch(() => console.log("bad fetch"));
    }, [])


    return (
        <StyledContent>
            {loading ? (
                <img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="loading image"></img>
            ) : (
                <StyledWrapper>
                    {
                        data.map((entry) => (
                                <Card
                                    key = {entry.date}
                                    date = {entry.date}
                                    url = {entry.url}
                                    title = {entry.title}
                                    media_type = {entry.media_type}
                                    copyright = {entry.copyright}
                                />
                        ))
                    }
                </StyledWrapper>
                )
            }
        </StyledContent>

    )
}