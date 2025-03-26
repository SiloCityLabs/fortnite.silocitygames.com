import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import WhereWeDroppin from "@/components/WhereWeDroppin";
//json
import mapInfo from "@/json/drop-spot/og/season-three.json";

export default function WhereWeDroppinOgS03() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Fortnite OG Season 3 - Where We Droppin?</title>
        <meta
          name="description"
          content="Spice up your Fortnite gameplay! Randomly roll where you should land in fortnite og season 3."
        />
        <meta name="keywords" content="" />
      </Head>
      <Header navLinks={navLinks} />
      <Container fluid>
        <Row>
          <Col>
            <h2 className="text-center my-3">
              Fortnite OG Season 3
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Where We Droppin?
            </h2>

            <WhereWeDroppin
              map="OG Season Three"
              button_key="br-og-3"
              ga_label="BrOg-3"
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
