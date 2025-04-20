import { Container, Row, Col } from "react-bootstrap";
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Components ---
import DropRoulette from "@/components/DropRoulette";
// --- Data ---
import mapInfo from "@/json/drop-spot/reload/oasis.json";

export const metadata: Metadata = {
  title: "Drop Roulette - Fortnite Reload: Oasis",
  description:
    "Spice up your Fortnite gameplay! Randomly roll where you should land in fortnite reload oasis.",
};

export default function DropRouletteOasisPage() {
  return (
    <PageLayout>
      <Container className="mt-3 mb-3">
        <Row className="shadow-lg p-3 bg-body rounded">
          <Col>
            <h2 className="text-center my-3">
              Drop Roulette
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Fortnite Reload: Oasis
            </h2>
            <hr />

            <DropRoulette
              map="Reload - Oasis"
              button_key="reload-oasis"
              ga_label="ReloadOasis"
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
