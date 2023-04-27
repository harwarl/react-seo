import { Helmet } from "react-helmet-async";

export default function Home(){
    return <>
    <Helmet>
        <title>Home Page</title>
        <meta name='description' content="This is the home page"/>
        <link rel="canonical" href="/" />
    </Helmet>

    <h1>Home Page</h1>
    </>
}