import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import WhereWeDroppin from "@/components/WhereWeDroppin";
//json
import mapInfo from "@/json/drop-spot/battle-royal/chapter-six/season-two.json";

export default function WhereWeDroppinCh06S02() {
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Changelog", href: "/changelog" },
    ];

    return (
        <>
            <Head>
                <title>Fortnite Chapter 6 Season 2 - Where We Droppin?</title>
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="description"
                    content="Spice up your Fortnite gameplay! Randomly roll where you should land in fortnite chapter 6 season 2."
                />
                <meta
                    name="keywords"
                    content=""
                />
            </Head>
            <Header navLinks={navLinks} />
            <Container fluid>
                <Row>
                    <Col>
                        <h2 className="text-center my-3">
                            Fortnite Chapter 6 Season 2
                            <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
                            <br className="d-block d-sm-none" />
                            Where We Droppin?
                        </h2>

                        <WhereWeDroppin map="Chapter 6 Season 2" button_key="br-ch6-2" ga_label="BrCh6-2" mapInfo={mapInfo} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
