import styled from "styled-components";

const StyledAnchor = styled.a`
    text-decoration: none;
    color: black;
    background-color: white;
`

const StyledCard = styled.div`
    border: solid;
    margin: 1px;
`;


const StyledCardTitle = styled.div`
    margin: 1vh;
    font-size: calc(200%);
    font-weight: bold;
`;


const StyledImgWrapper = styled.div`
    background-color: azure;
    padding: 1vw;
    border: 3px solid black;
    margin: 3vw;
    text-align: center;
    width: 30vw;
    max-width: 100%;
    height: 20vw;
    display: flex;
    justify-content: center;
    align-content: center;
`;


const StyledImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: auto;
`;

const StyledIframe = styled.iframe`
    border: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: auto;
`

export default function Card(entry) {
    console.log(entry.date.split("-"));
    let year = entry.date.split("-")[0].slice(2,4);
    console.log("Year: " + year);
    let month = entry.date.split("-")[1];
    console.log("Month: " + month);
    let day = entry.date.split("-")[2];
    console.log("Day: " + day);
    let id = "ap" + year + month + day;
    console.log("id: " + id);
    let link = "https://apod.nasa.gov/apod/" + id + ".html";
    console.log("Link: " + link);
    return(
        <StyledAnchor href={link} target="_blank">
            <StyledCard>
                <StyledCardTitle >{entry.title}</StyledCardTitle>
                <p>{entry.date}</p>
                <StyledImgWrapper>
                    {entry.media_type === "video" ? (
                        <StyledIframe src={entry.url} alt={entry.title}/>
                    ) : (
                        <StyledImg src={entry.url} alt={entry.title}/>
                    )}
                </StyledImgWrapper>
                {entry.copyright ? (
                    <p>{entry.copyright}</p>
                ) : (
                    <p>NASA</p>
                )}
            </StyledCard>
        </StyledAnchor>
    )
}
